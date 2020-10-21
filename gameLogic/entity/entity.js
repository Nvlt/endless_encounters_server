const storyEvent = require('../storyEvent/storyEvent');
const Job = require('../Job/job');
const config = require('./entity.config');
module.exports = class entity
{
    
    constructor(data = {})
    {
        
        if(data)
        {
            let {name, desc, job, level, abilities, exp, max_exp, hp, max_hp, current_event, type, stats, gold, hostility} = data;
            //inventory = [new item(),new item(),new item()];
            if(job)
            {
                var {abilities:jobAbilities, base_stats} = job
                var {str,dex,int,stam,will,agi,cha} = base_stats;
               
            }
            else
            {
                job = config.jobs.Warrior;
                var {abilities:jobAbilities, base_stats} = job;
                var {str,dex,int,stam,will,agi,cha} = base_stats;
              

            }

            this.name = name || "unknown being"
            this.desc = desc || "Indescribable, maybe scary, maybe not, nobody knows."
            this.job = job 
            this.base_hp = 200;
            this.level = level || 0;
            // this.equipment = equipment || base_equipment || []; //Boots, leggings, torso, helm, gloves, main hand weapon, and offhand weapon.
            // jobAbilities vvvvv
            this.abilities = abilities || jobAbilities || {
                
                doThing:(StoryEvent)=>
                {
                    if(StoryEvent)
                    {
                        StoryEvent.displayText = "We did a thing.";
                        return StoryEvent;
                    }
                    else
                    {
                        throw new Error("Abilities must get the StoryEvent.")
                    }
                },
                damageSelf:(StoryEvent)=>
                {
                    if(StoryEvent)
                    {
                        let {playerEntity} = StoryEvent;
                        let damage = 50
                        playerEntity.hp = playerEntity.hp - damage;
                        if(playerEntity.hp <= 0)
                        {
                            StoryEvent.displayText = `You have died..`
                        }
                        else
                        {
                            StoryEvent.displayText = `You take ${damage} damage!\n Your hp is now ${playerEntity.hp}`
                        }
                        
                        return StoryEvent;
                    }
                    else
                    {
                        throw new Error("Abilities must get the StoryEvent.")
                    }
                },
            };
            this.stats = stats || base_stats
            this.gold = gold || 0;
            this.exp = exp || 0;
            this.max_exp = max_exp || 0;
            this.max_hp = max_hp || this.base_hp + (stam * 10); 
            this.hp = hp || this.max_hp;
            //this.inventory = inventory || job.base_inventory || [];
            
            this.hostility = hostility || false;
            this.type = type || job.type || "basic";
            this.current_event = current_event || job.birth_event// || new storyEvent(null,'town');
            this.speech = ["Life is but a fleeting indescribable illusion. I do not know if I exist, or even if you exist, but it makes no difference to me anyway."];  
        }
    }
    selectRandomJob()
    {
        const data = config.npc_jobs;
        const index = Math.round(Math.random() * (data.length - 1))
        return data[index];
    }
}