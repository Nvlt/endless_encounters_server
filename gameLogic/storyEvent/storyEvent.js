
const config = require('./storyEvent.config');
const entity = require('../entity/entity');
module.exports = class storyEvent
{
    constructor(data = {})
    {
        
        const {type, displayText, name, choices, player, entities, activeEntity} = data;
        
        this.type = type || 'town';
        this.name = name || this.selectRandomData(this.type, 'names');
        this.displayText = displayText || `${this.selectRandomData(this.type,'text')} ${this.name} ${this.selectRandomData(this.type,'afterText')}`
        this.choices = choices || config[this.type].choices;
        this.player = player || new entity({name:"Joe",desc:"Just some guy."});
        this.activeEntity = activeEntity || 'player'
        this.entities = entities || [new entity()];
        this.dataType = "StoryEvent";

        
        
    }
    selectRandomData(type, key)
    {
        const data = config[type][key]
        //console.log(data);
        const index = Math.round(Math.random() * (data.length - 1))
        return data[index];
    }
    makeChoice(key)
    {
        if(this.player.abilities[key])
        {
            return this.player.abilities[key].do(this);
        }
        if(this.choices.includes(key))
        {
            
            return new storyEvent({type:key});
        }
        else
        {
            this.displayText = "You flail around and accomplish nothing."
            return this;
        }
    }
}

//Todo Death
//Todo LevelUp
//Todo interact >> Todo Combat