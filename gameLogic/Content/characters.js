const {jobs} = require('./jobs');
const entity = require('../entity/entity');
module.exports = class characters
{
    constructor(StoryEvent)
    {
        this.characters = {
            class_screen:[],
            start_screen:[],
            name_screen:[],
            desc_screen:[],
            town:[
                new entity({name:"Friendly cat", desc:"an adorable cat", speechType:'cat', job:jobs.Test_Enemy, max_hp:10000,level:100, stats:{str:5000000}}),
            ],
            cave:[
                new entity({name:"Elder Dragon", desc:"a dragon",hostility:true, speechType:'dragon',job:jobs.Test_Enemy, max_hp:1000,level:30, stats:{str:500, int:500}}),
                new entity({name:"Giant Spider", desc:"a horrifying giant spider",hostility:true,job:jobs.Test_Enemy, speechType:'spider', max_hp:800,level:15, stats:{str:500}}),
                new entity({name:"Harmless Bunny", desc:"an adorable little bunny",hostility:true,job:jobs.Test_Enemy, speechType:'dragon', max_hp:10000,level:100, stats:{str:99999999, agi:999999}})
            ],
            deep_cave:[
                new entity({name:'zubat', desc:'a fackin zubat', speechType:'bat',hostility:false, job:jobs.Test_Enemy})
            ],
            abandoned_castle:[
                new entity({name:"Elder Dragon", desc:"a dragon", speechType:'dragon',hostility:true,job:jobs.Test_Enemy, max_hp:1000,level:30, stats:{str:500, int:500}}),
                new entity({name:"Giant Spider", desc:"a horrifying giant spider",hostility:true,job:jobs.Test_Enemy, speechType:'spider', max_hp:800,level:15, stats:{str:500}})
            ],
            explore:[
                new entity({name:"Bandit", desc:"a basic asshole", speechType:'general',hostility:true,job:jobs.Test_Enemy, max_hp:300,level:3, stats:{str:500}}),
                new entity({name:"Friendly cat", desc:"an adorable cat", speechType:'cat',job:jobs.Test_Enemy, max_hp:10000,level:100, stats:{str:5000000}}),
            ],
            tavern:[
                new entity({name:"Friendly cat", desc:"an adorable cat", speechType:'cat',job:jobs.Test_Enemy, max_hp:10000,level:100, stats:{str:5000000}}),
                new entity({name:"Joe", desc:"the inn keeper", speechType:'villager',job:jobs.Test_Enemy }),
                new entity({name:"Meli", desc:"the inn keeper", speechType:'villager',job:jobs.Test_Enemy}),
                new entity({name:"Joy", desc:"the inn keeper", speechType:'villager',job:jobs.Test_Enemy })
            ],
            afterlife:[

            ]
        }
    }
    getCharacter(type)
    {
        const data = this.characters[type]
        if(data)
        {
            const index = Math.round(Math.random() * (data.length - 1))
            return data[index];
        }
        else
        {
            throw new Error('Character Error.')
        }
    }
    getCharacters(type,length)
    {
        
        let characters = [];
        for(let i = 0; i < Math.round(length); i++) 
        {
            characters.push(this.getCharacter(type))
        }
        return characters;
    }
    
}