const job = require('../Job/job');
const abilities = require('../Content/abilities');
module.exports = {
    
    jobs:{
        
        Warrior:new job({name:"Warrior",desc:"Big smashy boy",base_stats:{str:15,stam:14,agi: 13,dex: 12,cha:10,int:8},abilities:{
            Attack:abilities.Attack,
            'End Turn':abilities.endTurn,
            flee:abilities.flee,

            
        }}),
        TestCat:new job({name:"Test Cat",desc:"a wispy wizard person",base_stats:{str:15,stam:14,agi: 13,dex: 12,cha:10,int:8},abilities:{
            Attack:abilities.Attack,
            Check:abilities.Check,
            'End Turn':abilities.endTurn,
            'Fire Ball':abilities.fireBall,
            heal:abilities.heal,
            flee:abilities.flee,

            damage:abilities.damage, 
            Suicide:abilities.Suicide,
            Kill:abilities.kill
        }}),
        Mage:new job({name:"Mage",desc:"a wispy wizard person",base_stats:{str:2,stam:5,agi: 13,dex: 12,cha:10,int:20,will:10},abilities:{
            Attack:abilities.Attack,
            'Fire Ball':abilities.fireBall,
            heal:abilities.heal,
            'End Turn':abilities.endTurn,
            flee:abilities.flee,
            

            
        }}),
        Test_Enemy:new job({name:"an enemy",desc:"an enemy",base_stats:{str:2,stam:5,agi: 13,dex: 12,cha:10,int:20,will:200},abilities:{
            'Fire Ball':abilities.fireBall
            

            
        }}),
        Villager:new job({name:"Villager",desc:"Hrm",base_stats:{str:1,stam:1,agi:1,dex:1,cha:1,int:1}}),
    },
    npc_jobs:[]
}