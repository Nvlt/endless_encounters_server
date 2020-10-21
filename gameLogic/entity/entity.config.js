const job = require('../Job/job');
const jobConfig = require('../Job/job.config');
module.exports = {
    
    jobs:{
        
        Warrior:new job({name:"Warrior",desc:"Big smashy boy",base_stats:{str:15,stam:14,agi: 13,dex: 12,cha:10,int:8},abilities:{
            Attack:jobConfig.Attack
        }}),
        Villager:new job({name:"Villager",desc:"Hrm",base_stats:{str:1,stam:1,agi:1,dex:1,cha:1,int:1}}),
    },
    npc_jobs:[]
}