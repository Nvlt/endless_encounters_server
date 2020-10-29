const {jobs} = require('../Content/jobs');
const cAbilities = require('../Content/abilities');
const { threadId } = require('worker_threads');
module.exports = class entity
{
    
    constructor(data = {})
    {
        
        if(data)
        {
            let {name, desc, job, speechType,statPoints, level, intro, abilities, exp, hp, max_hp,mp, type, stats, gold, hostility} = data;
            //inventory = [new item(),new item(),new item()];
            if(job)
            {
                var {abilities:jobAbilities, base_stats} = job
                var {str,dex,int,stam,will,agi,cha} = base_stats;
               
            }
            else
            {
                job = jobs.Warrior;
                var {abilities:jobAbilities, base_stats} = job;
                var {str,dex,int,stam,will,agi,cha} = base_stats;
              

            }
            if(stats)
            {
                str = stats.str || str;
                dex = stats.dex || dex;
                int = stats.int || int;
                stam = stats.stam || stam;
                will = stats.will || will;
                agi = stats.agi || agi;
                cha = stats.cha || cha;
            }

            this.name = name || "unknown being"
            this.desc = desc || "Indescribable, maybe scary, maybe not, nobody knows."
            this.job = job 
            this.base_hp = 200;
            this.level = level || 0;
            this.speechType = speechType || 'general'
            this.pronoun = 'They';
            this.upgradeAbilities = {
                str:cAbilities.levelUpStr,
                dex:cAbilities.levelUpDex,
                int:cAbilities.levelUpInt,
                stam:cAbilities.levelUpStam,
                will:cAbilities.levelUpWill,
                agi:cAbilities.levelUpAgi,
                cha:cAbilities.levelUpCha
            }
            this.statPoints = statPoints || 0;
            // this.equipment = equipment || base_equipment || []; //Boots, leggings, torso, helm, gloves, main hand weapon, and offhand weapon.
            // jobAbilities vvvvv

            this.abilities = abilities || jobAbilities || {};
            this.stats = {str,dex,int,stam,will,agi,cha};
            //this.modifiedStats=stats||stats+equipmentstats;
            //this.equipmentstats={str,dex,int,stam,will,agi,cha}
            this.gold = gold || 0;
            this.exp = exp || 0;
            this.max_exp = 100 + (100*this.level);
            if(max_hp)
            {
                this.max_hp = max_hp;
            }
            else
            {
                console.log(this.stats);
                this.max_hp = this.base_hp + (this.stats.stam * 10);
            }
            this.hp = (hp != undefined)? hp : this.max_hp;
            this.max_mp = 100 + this.stats.will * 10;
            this.mp = (mp != undefined)? mp : this.max_mp;

            //this.inventory = inventory || job.base_inventory || [];
            //this.gear=gear || { }
            this.hostility = hostility || false;
            this.type = type || job.type || "basic";
            //this.current_event = current_event || job.birth_event// || new storyEvent(null,'town');
            this.intro = intro || false;
             
        }
    }
    selectRandomJob()
    {
        const data = config.npc_jobs;
        const index = Math.round(Math.random() * (data.length - 1))
        return data[index];
    }
}



// Item -> {str = 0,dex = 0 ,int = 0,stam = 0 ,will = 0 ,agi = 0,cha = 0}


// const {str,dex,int,stam,will,agi,cha} = player.stats;
// if(item.isEquipped)
//{
// str + item.stats.str
// dex + item.stats.dex
// int + item.stats.int
// stam + item.stats.stam
// will + item.stats.will
// agi + item.stats.agi
// cha + item.stats.cha
//}
// str+1



// func use(item){
//     item.mod=key 
//     player.stats[key]=player.stats[key]+item.mod}
    
// func unequip(item){
// item.mod=key 
// player.stats[key]=player.stats[key]+item.mod}