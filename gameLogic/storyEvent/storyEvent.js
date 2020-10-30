
const entity = require('../entity/entity');
const speech = require('../Content/speech');
const sArray = require('../utility/sArray');
const characters = require('../Content/characters');
const place =  require('../Content/place');
const abli = require('../Content/abilities');

module.exports = class storyEvent
{
    constructor(data = {})
    {
        
        const {type,pData,ap, displayText,lastTown,lastTavern,fromCombat, combat, turn, name, desc, choices, player, entities, activeEntity, serverData} = data;
        ////////console.log(this.pData);
        this.pData = pData || new place(this);
        this.serverData=serverData;
        this.type = type || 'start_screen';
        this.name = name || this.pData.selectRandomData(this.type, 'names')
        if(this.type == 'town')
        {
            this.lastTown = this.name;
        }
        else
        {
            this.lastTown = lastTown;
        }
        if(this.type == 'tavern')
        {
            this.lastTavern = this.name;
        }
        else
        {
            this.lastTavern = lastTavern;
        }
        if(this.type == 'explore')
        {
            this.lastTavern = undefined;
            this.lastTown = undefined;
        }
        
        ////////console.log(this.lastTown);
        this.desc = desc || 'a new place';
        
        
        if(player)
        {
            this.player = player;
        }
        else
        {
            this.player = new entity({name:"Joe",desc:"Just some guy.",type:'player'});
        }
        
        this.pData = new place(this);
        this.combat = combat || false;
        this.displayText = displayText || `${this.pData.generateText(this.type,this.name)}`;
        if(choices)
        {
            this.choices = choices;
        }
        else
        {
            this.choices = (this.player.statPoints > 0) ? this.player.upgradeAbilities : {...this.pData.descData[this.type].choices,...this.player.abilities};
        }
        if(this.combat)
        {
            this.choices = this.player.abilities;
        }
        if(this.player.hp <= 0)
        {
            this.choices = this.pData.descData[this.type].choices;
        }
        
        ////////console.log(this.choices);
        this.max_ap = 10;
        this.ap = (ap != undefined)? ap : this.max_ap;
        this.fromCombat = fromCombat || false;
        this.activeEntity = activeEntity || 'player'
        ////////console.log(turn);
        this.turn = turn || 'player'
        this.entities = (this.roll(20) > 10 && !entities) ? [new characters(this).getCharacter(this.type)] : undefined || entities || [];
        ////////console.log(this.entities);
        this.dataType = "StoryEvent";
        if(this.type == 'start_screen' || this.type == 'class_screen' || this.type == 'name_screen' || this.type == 'desc_screen')
        {
            this.choices = this.pData.descData[this.type].choices;
            this.displayChoices();  
        }
        else
        {
            if(this.fromCombat)
            {
                this.fromCombat = false;
            }
            else
            {
                this.interact();
            }
            
             
            this.displayPlayerStatus(this);
            this.displayChoices(); 
            //////console.log(this.entities[0]);
            
        }
          
        
    }
    roll = function (max) {
        max = max + 1;
        let min = 1;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    displayChoices()
    {
        let choices = this.choices;
        ////////console.log(this.choices)
        let display = new sArray();
        for(const [key, value] of Object.entries(choices))
        {
            display.push(key);
        }

        this.displayText += `\nChoices: ${display.sJoin(', ','or ')}`
    }
    interact()
    {
        const roll = this.roll(20);
        
        if(this.entities[0])
        {
            if(this.entities[0].hostility && !this.entities[0].intro)
            {
                this.entities[0].intro = true;
                this.displayText += `\n\nYou come across ${this.entities[0].desc}.`;
                this.displayText += `\n\n${this.entities[0].name}: ${new speech(this).getHostileQuote(this.entities[0].speechType)}`
                this.combat = true;
                this.choices = this.player.abilities;
            }
            else if(!this.entities[0].hostility && !this.entities[0].intro)
            {
                this.entities[0].intro = true;
                this.displayText += `\n\nYou come across ${this.entities[0].desc}.`;
                this.displayText += `\n\n${this.entities[0].name}: ${new speech(this).getGeneralQuote(this.entities[0].speechType)}`
            }
            else if(this.player.hp > 0)
            {
                this.displayText += `\n\n${this.entities[0].name} stares at you.`;
                if(this.ap <= 0)
                {
                    this.choices = {'End Turn':abli.endTurn};
                }
                if(this.combat && this.turn == 'enemy')
                {
                    const skill = this.randomAbility(this.entities[0].abilities)
                    if(skill != -1)
                    {
                        this.fromCombat = true;
                        this.checkEntities(this.entities[0].abilities[skill].do(this));
                        this.displayText += (this.player.hp > 0)? `\n\nIt is now your turn.` : `\n\nYou are dead...`;
                        this.ap = this.max_ap;
                        this.turn = 'player';
                    }
                    else
                    {
                        this.displayText = `${this.entities[0].name} can't seem to do anything...`
                        this.displayText += (this.player.hp > 0)? `\n\nIt is now your turn.` : `\n\nYou are dead...`;
                        this.ap = this.max_ap;
                        this.turn = 'player';   
                    }
                    
                    //Object.assign(this,new storyEvent());
                }
            }
        }
        else
        {
            if(this.player.hp > 0)
            {
                this.displayText += '\nNo one is around.'
                this.combat = false;
                this.choices = (this.player.statPoints > 0) ? this.player.upgradeAbilities : {...this.pData.descData[this.type].choices,...this.player.abilities};
            }
            else
            {
                
                this.pData.descData[this.type].choices;
            }
            
        }

    }
    checkEntities(StoryEvent)
    {
        let {entities, player} = StoryEvent;
        let earnedExp = 0;
        let livingEntities = [];
        let kills = 0;
        if(!StoryEvent.entities)
        {
            StoryEvent.choices = undefined;
            return StoryEvent;
        }
        if(this.ap <= 0)
        {
            this.choices = {'End Turn':abli.endTurn};
        }
        if(player.hp <= 0)
        {
            StoryEvent.displayText += `\n\nYou died...\n\nGame Over.`;
            StoryEvent.type = 'afterlife';
            StoryEvent.choices = this.pData.descData[this.type].choices;
            if(StoryEvent.entities[0])
            {
                StoryEvent.displayText += `\n\n${entities[0].name}: ${new speech(StoryEvent).getKillQuote(entities[0].speechType)}`;
                
            }
            return StoryEvent;
        }
        ////////console.log(entities);
        for(const entity of entities)
        {
            if(entity.hp <= 0)
            {
                kills++;
                earnedExp += 100 + 100*entity.level;
                StoryEvent.displayText += `\n${entity.name} dies.\n`
            }
            else
            {
                livingEntities.push(entity);
            }
        }
        if(kills)
        {
            StoryEvent.displayText += `\nYou gained:${earnedExp} exp!\n`;
            StoryEvent.player.exp += earnedExp;
        }
        if(player.exp >= player.max_exp)
        {
            //Level up!
            const levelUp = (player)=>
            {
                player.level++;
                player.statPoints ++;
                player.exp -= player.max_exp;
                
                if(player.exp >= player.max_exp)
                {
                    player = new entity(player);
                    player = levelUp(player);
                }
                player = new entity(player);
                return player;
            }
            player = levelUp(player);
            StoryEvent.displayText += `\n\nYou leveled up to level ${player.level}`;
            StoryEvent.displayText += `\n\nYou have ${player.statPoints} attribute points to spend!`
            StoryEvent.player = new entity(player);
        }
        StoryEvent.entities = livingEntities;
        return StoryEvent;
    }
    displayPlayerStatus = (StoryEvent) => {
        const { hp, max_hp, mp, max_mp, exp, max_exp} = StoryEvent.player;
        const {ap, max_ap} = StoryEvent;
        StoryEvent.displayText += `\n\nhp:${hp}/${max_hp}\nmp:${mp}/${max_mp}\nap:${ap}/${max_ap}\nexp:${exp}/${max_exp}\n`
        return StoryEvent;
    }
    randomAbility(abilities)
    {
        let keys = [];
        for(const [key, values] of Object.entries(abilities))
        {
            keys.push(key);
        }
        
        if(keys.length)
        {
            const index = Math.round(Math.random() * (keys.length - 1))
            return keys[index];
        }
        else
        {
            return -1;
        }
        
    }
    makeChoice(key)
    {
        this.pData = new place(this);
        
        if(this.type == 'name_screen')
        {
            let newChar = new entity({name:key, type:'player'})
            this.player = newChar;
            
            this.displayText = undefined;
            this.entities = undefined;
            this.choices = undefined;
            this.type = 'desc_screen'
            return new storyEvent(this);
        }
        if( this.type == 'desc_screen')
        {
            this.player.desc = key;
            this.displayText = undefined;
            this.entities = undefined;
            this.choices = undefined;
            this.type = 'class_screen'
            return new storyEvent(this);
        }
        if(this.choices[key])
        {
            //Check if ability killed an enemy.
            let current_event = this.checkEntities(this.choices[key].do(this));
            current_event.player.max_hp = undefined;
            current_event.player = new entity(current_event.player);
            return new storyEvent(current_event);
        }
        else
        {
            this.displayText = "You flail around and accomplish nothing."
            return new storyEvent(this);
        }
        
    }
}
