const job=require('../Job/job');
const abilities=require('../Content/abilities');
module.exports={
    specialAbilities:{
        attack:abilities.Attack,
        heavy: abilities.HeavyAttack,
        quick: abilities.QuickAttack,
        punch: abilities.UnarmedAttack,
        'scratch':abilities.QuickAttack,
        'bite': abilities.HeavyAttack,
        'wizard slap':abilities.UnarmedAttack,
        str:abilities.levelUpStr,
        dex:abilities.levelUpDex,
        int:abilities.levelUpInt,
        stam:abilities.levelUpStam,
        will:abilities.levelUpWill,
        agi:abilities.levelUpAgi,
        cha:abilities.levelUpCha,
        "clumsy clip": abilities.QuickAttack,
        "dirty dink": abilities.UnarmedAttack,
        whirlwind: abilities.Whirlwind,
    },
        
    jobs: {

        Warrior: new job({
                key:'Warrior',name: "Warrior", desc: "Big smashy boy", base_stats: {str: 15, stam: 14, agi: 13, dex: 12, cha: 10, int: 8}, abilities: {
                attack: abilities.Attack,
                heavy: abilities.HeavyAttack,
                quick: abilities.QuickAttack,
                punch: abilities.UnarmedAttack,
                whirlwind: abilities.Whirlwind,
                'fire ball': abilities['Fire Ball']
                

            }
        }),
        WereCat: new job({
                key:'WereCat',name: "Cat", desc: "a person that fluctuates into a fetchingly flocculant feline", base_stats: {str: 15, stam: 14, agi: 13, dex: 12, cha: 10, int: 8}, abilities: {
                attack: abilities.Attack,
                'scratch': abilities.QuickAttack,
                'bite': abilities.HeavyAttack
               
            }
        }),
        Mage: new job({
               key:'Mage', name: "Mage", desc: "a wispy wizard person", base_stats: {str: 2, stam: 5, agi: 13, dex: 12, cha: 10, int: 20, will: 10}, abilities: {
                attack: abilities.Attack,
                'wizard slap': abilities.UnarmedAttack,
                'fire ball': abilities['Fire Ball'],
                heal: abilities.heal
                

            }
        }),
        Test_Enemy: new job({
               key:'Test_Enemy', name: "an enemy", desc: "an enemy", base_stats: {str: 2, stam: 5, agi: 13, dex: 12, cha: 10, int: 20, will: 200}, abilities: {
                'fire ball': abilities['Fire Ball'],
                attack: abilities.Attack,
                heavy: abilities.HeavyAttack,
                quick: abilities.QuickAttack,
                punch: abilities.UnarmedAttack,
            }
        }),
        drunk_Enemy: new job({
               key:'drunk_Enemy', name: "a wrathful wino", desc: "the local livid lush", base_stats: {str: 2, stam: 7, agi: 3, dex: 2, cha: 20, int: 4, will: 3}, abilities: {
                attack: abilities.Attack,
                heavy: abilities.HeavyAttack,
                "clumsy clip": abilities.QuickAttack,
                "dirty dink": abilities.UnarmedAttack,
            }
        }),
        goblin: new job({
               key:'goblin', name: "a rapacious rapscallion", desc: "the miserly minx ", base_stats: {str: 2, stam: 5, agi: 15, dex: 15, cha: 1, int: 5, will: 1},
            abilities: {
                "greedy gut punch": abilities.Attack,
                "craven cut": abilities.HeavyAttack,
                quick: abilities.QuickAttack,
                punch: abilities.UnarmedAttack,
            }
        }),
        orc: new job({
                key:'orc', name: "an Orc", desc: "big, green and ugly", base_stats: {str: 15, stam: 20, agi: 8, dex: 7, cha: 4, int: 2, will: 10}, abilities: {
                attack: abilities.Attack,
                heavy: abilities.HeavyAttack,
                quick: abilities.QuickAttack,
                punch: abilities.UnarmedAttack,
            }
        }),
        Villager: new job({key:'Villager', name: "Villager", desc: "Hrm", base_stats: {str: 1, stam: 1, agi: 1, dex: 1, cha: 1, int: 1}}),
    },
    npc_jobs: []
}
