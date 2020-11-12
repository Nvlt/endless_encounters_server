const ability=require('../ability/ability');
const roll=function (max) {
    max=max+1;
    min=1;
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min); //The maximum is exclusive and the minimum is inclusive
}
const verbs=(caster,swap = false) => {
    
    const you={You:'You',you:'you',jab:'jab',spin:'spin',yourself:'yourself',your:'your', fail:'fail', charge:'charge',swing:'swing',dodge: 'dodge', attack: 'attack',attempt:'attempt', strike: 'strike', prepare: 'prepare', ready: 'ready', their: 'their', have: 'have', them: 'them', miss: 'miss', hit: 'hit', channel: 'channel', hurl: 'hurl'}
    if(!caster)
    {
        return you;
    }
    const enemy={You:caster.name,you:'they',spin:'spins', jab:'jabs',yourself:'themselves',fail:'fails',charge:'charges',your:'their',swing:'swings',dodge: 'dodges', attack: 'attacks',attempt:'attempts', strike: 'strikes', prepare: 'prepares', ready: 'readys', their: 'your', have: 'has', them: 'you', miss: 'misses', hit: 'hits', channel: 'channel', hurl: 'hurls'}
    if(caster.type=='player' && swap == false) {
        return you;
    }
    else {
        return enemy;
    }
}

/*
str = stats.str || str;
dex = stats.dex || dex;
int = stats.int || int;
stam = stats.stam || stam;
will = stats.will || will;
agi = stats.agi || agi;
cha = stats.cha || cha;
*/

module.exports={
    name_screen: new ability({name: 'name screen', desc: 'Select a name'}, (StoryEvent) => {

        StoryEvent.type='name_screen';
        StoryEvent.name=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;

    }),
    selectWarrior: new ability({name: 'Warrior', desc: 'Select the warrior class.'}, (StoryEvent, caster) => {
        const {jobs}=require('../Content/jobs');
        StoryEvent.type='tavern';
        caster.job=jobs.Warrior;
        caster.hp=undefined;
        caster.mp=undefined;
        caster.max_hp=undefined;
        caster.stats=undefined;
        caster.max_mp=undefined;
        caster.abilities=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;

    }),
    selectMage: new ability({name: 'Mage', desc: 'Select the Mage class.'}, (StoryEvent, caster) => {
        const {jobs}=require('../Content/jobs');
      
        StoryEvent.type='tavern';
        caster.job=jobs.Mage;
        caster.hp=undefined;
        caster.mp=undefined;
        caster.max_hp=undefined;
        caster.max_mp=undefined;
        caster.stats=undefined;
        caster.abilities=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;

    }), selectWereCat: new ability({name: 'Select Test Cat', desc: 'Select the Test Cat class.'}, (StoryEvent, caster) => {
        const {jobs}=require('../Content/jobs');
    
        StoryEvent.type='tavern';
        caster.job=jobs.TestCat;
        caster.hp=undefined;
        caster.mp=undefined;
        caster.max_hp=undefined;
        caster.max_mp=undefined;
        caster.stats=undefined;
        caster.abilities=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;

    }),
    classMenu: new ability({name: 'class selection', desc: 'go to select your class'}, (StoryEvent) => {
        StoryEvent.type='class_screen';
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;

    }),
    levelUpStr: new ability({name: 'Level Up Str.', desc: 'Level up your str stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.str+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your str. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpDex: new ability({name: 'Level Up Dex.', desc: 'Level up your Dex stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.dex+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your dex. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpInt: new ability({name: 'Level Up Int.', desc: 'Level up your Int stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.int+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your int. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpStam: new ability({name: 'Level Up stam.', desc: 'Level up your stam stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.stam+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your stam. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpWill: new ability({name: 'Level Up Will.', desc: 'Level up your will stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.will+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your will. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpAgi: new ability({name: 'Level Up agi.', desc: 'Level up your agi stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.agi+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your agi. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    levelUpCha: new ability({name: 'Level Up cha.', desc: 'Level up your cha stat.'}, (StoryEvent) => {
        if(StoryEvent.player.statPoints) {
            StoryEvent.player.stats.cha+=1;
            StoryEvent.player.statPoints-=1;
            StoryEvent.displayText=`You level up your cha. You now have ${StoryEvent.player.statPoints} stat points.`
        }
        else {
            StoryEvent.displayText=`You don't have enough stat points for that.`
        }
        return StoryEvent;
    }),
    flee: new ability({name: 'town', desc: 'Go to a town.'}, (StoryEvent) => {
        if(!StoryEvent.entities[0]) {
            StoryEvent.displayText='You are out of your mind..'
            return StoryEvent;
        }
        const {int, agi}=StoryEvent.player.stats
        const fRoll=roll(20)+StoryEvent.entities[0].stats.agi;
        if((int+agi/2)+roll(20)>=fRoll||!StoryEvent.entities[0].hostility) {
            StoryEvent.entities=[];
            StoryEvent.displayText=`You escape..`;
            StoryEvent.choices=undefined;
        }
        else {
            const dmg=(StoryEvent.entities[0].stats.str/2);
            StoryEvent.displayText=`\nYou fail to escape the ${StoryEvent.entities[0].name}`;
            StoryEvent.player.hp-=dmg;
            StoryEvent.displayText+=`\nThe ${StoryEvent.entities[0].name} strikes you!\n\nYou take ${dmg} damage...`
        }

        return StoryEvent;
    }),
    tavern: new ability({name: 'tavern', desc: 'Go to a tavern.'}, (StoryEvent) => {

        StoryEvent.type='tavern';
        StoryEvent.player.hp=StoryEvent.player.max_hp;
        StoryEvent.player.mp=StoryEvent.player.max_mp;
        StoryEvent.ap = StoryEvent.max_ap;
        StoryEvent.name=StoryEvent.lastTavern;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;
    }),
    leaveTavern: new ability({name: 'Leave', desc: 'Leave the tavern'}, (StoryEvent) => {

        StoryEvent.type='town';
        StoryEvent.player.hp=StoryEvent.player.max_hp;
        StoryEvent.player.mp=StoryEvent.player.max_mp;
        StoryEvent.name=StoryEvent.lastTown;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;
    }),
    town: new ability({name: 'town', desc: 'Go to a town.'}, (StoryEvent) => {

        StoryEvent.type='town';
        StoryEvent.name=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;
    }),
    explore: new ability({name: 'town', desc: 'Go to a town.'}, (StoryEvent) => {

        StoryEvent.type='explore';
        StoryEvent.name=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.choices=undefined;
        return StoryEvent;
    }),
    cave: new ability({name: 'cave', desc: 'Go to a cave.'}, (StoryEvent) => {

        StoryEvent.type='cave';
        StoryEvent.name=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        return StoryEvent;
    }),
    deep_cave: new ability({name: 'deep cave', desc: 'explore deeper into the cave.'}, (StoryEvent) => {

        StoryEvent.type='deep_cave';
        StoryEvent.name=undefined;
        StoryEvent.displayText=undefined;
        StoryEvent.entities=undefined;
        return StoryEvent;
    }),
    leave_cave: new ability({name: 'town', desc: 'Go to a town.'}, (StoryEvent) => {
        const fRoll=roll(20);
        if(StoryEvent.player.stats.int*2>=fRoll) {
            StoryEvent.type='explore';
            StoryEvent.name=undefined;
            StoryEvent.entities=undefined;
            StoryEvent.displayText=`You escape the cave.`;
        }
        else {
            StoryEvent.type='cave';
            StoryEvent.name=undefined;
            StoryEvent.entities=undefined;
            StoryEvent.displayText='Try as you may, you cannot find the exit...';
        }

        return StoryEvent;
    }),
    abandoned_castle: new ability({name: 'town', desc: 'Go to a town.'}, (StoryEvent) => {

        StoryEvent.type='abandoned_castle';
        StoryEvent.name=undefined;
        StoryEvent.entities=undefined;
        StoryEvent.displayText=undefined;
        return StoryEvent;
    }),
    damage: new ability({name: 'damage', desc: 'Take 100 damage.'}, (StoryEvent) => {
        StoryEvent.displayText='You take 100 damage.';
        StoryEvent.player.hp-=100;
        return StoryEvent;
    }),
    heal: new ability({name: 'heal', desc: 'Heal yourself for int * 5 hp.', cost:5}, (StoryEvent) => {
        let player=StoryEvent.player
        let {int}=player.stats;
        let healedHp=5*int;
        StoryEvent.displayText=`You heal yourself for ${healedHp} hp!`;
        player.hp=((player.hp+healedHp)>player.max_hp)? player.max_hp:(player.hp+healedHp);
        return StoryEvent;
    }),
    kill: new ability({name: "kill", desc: "A tool for testing death."}, (StoryEvent) => {
        if(StoryEvent.entities.length) {
            StoryEvent.displayText=`Everyone is destroyed...\n`;
            for(const entity of StoryEvent.entities) {
                entity.hp=0;
            }
        }
        else {
            StoryEvent.displayText="There is no one to destroy..."
        }
        return StoryEvent
    }),
    Suicide: new ability({name: "Suicide", desc: "A tool for testing death."}, (StoryEvent) => {
        StoryEvent.displayText='You wither away into dust without explanation...';
        StoryEvent.player.hp=0;
        return StoryEvent
    }),
    'Fire Ball': new ability({name: 'Fire Ball', desc: 'Cast a Fire Ball.', cost: 5, type: 'offense'}, (StoryEvent, caster, target) => {
        const cost=50;


        StoryEvent.combat=true;
        let {channel,have, hurl,dodge}=verbs(caster);
        

        let name=(StoryEvent.turn=='player')? 'You':caster.name;
        let tName=(StoryEvent.turn=='enemy')? 'You':target.name;
        let pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} ${channel} ${pronoun} energy to form a massive fire ball.`
        if(caster&&target) {
            let {int, will}=caster.stats;
            let {agi}=target.stats;
            if(caster.mp>=cost) {
                caster.mp-=cost;
                StoryEvent.displayText+=`\n\n${name} ${hurl} the fire ball at ${target.name}!`
                if(roll(20)+int+will>=roll(20)+agi) {
                    const dmg=(int+will+roll(20));
                    StoryEvent.displayText+=`\n\n${pronoun} fire ball hits ${tName} for ${dmg} damage!`;
                    target.hp-=dmg;
                    if(target.hp<=0) {
                        StoryEvent.displayText+=`\n\n${tName} ${have} been reduced to ash...`;
                    }
                }
                else {
                    const dmg=(target.stats.str/2);
                    StoryEvent.displayText+=`\n\n${tName} ${dodge} the fire ball with lightning speed, striking the ${name} for ${dmg} damage!`
                    caster.hp-=dmg;
                }
            }
            else {
                const dmg=(caster.stats.int/2);
                StoryEvent.displayText+=`\n\nThe fire ball explodes in ${pronoun} face doing ${dmg} damage!`
                caster.hp-=dmg;
            }
        }
        else {
            StoryEvent.displayText+='But no one is around...'
        }
        return StoryEvent;
    }),
    Check: new ability({name: "Check target", desc: "A game testing ability."}, (StoryEvent, caster, target) => {
        if(caster&&target) {

            StoryEvent.displayText=`${StoryEvent.turn}''s turn. ${caster.name} targets ${target.name}`;
        }

        return StoryEvent;
    }),
    endTurn: new ability({name: "End Turn", desc: "end your turn."}, (StoryEvent, caster, target) => {

        if(caster&&target) {
            StoryEvent.ap=StoryEvent.max_ap;
            StoryEvent.displayText=`${caster.name} ends their turn.`
            StoryEvent.turn=(StoryEvent.turn=='player')? 'enemy':'player';
            StoryEvent.combat = true;
            StoryEvent.fromCombat = true;
        }
        else {
            StoryEvent.displayText='You are alone...'
            StoryEvent.turn='player';
        }
        return StoryEvent;
    }),
    Attack: new ability({name: "Attack", desc: "A basic attack.", cost: 2, type: 'offense'}, (StoryEvent, caster, target) => {
       
        
        let {You,hit,them,miss, prepare} = verbs(caster)
        StoryEvent.displayText = `${You} ${prepare} to attack.\n`
        if(roll(20) + caster.stats.agi >= roll(20) + target.stats.agi)
        {
            let crit = (roll(20) == 20)? (caster.stats.dex + caster.stats.int)/2 : 0;
            let dmg = (caster.stats.str + roll(20)) * (1 + crit);
            target.hp -= dmg;
            StoryEvent.displayText += `\n${You} ${hit} ${them} for ${dmg} damage.\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        else
        {
            let e = verbs(target);
            let crit = (roll(20) == 20)? (target.stats.dex + target.stats.int)/2 : 0;
            let dmg = (target.stats.str + roll(20)) * (1 + crit);
            StoryEvent.displayText += `\n${You} ${miss}!\n`
            caster.hp -= dmg;
            StoryEvent.displayText += `\n${e.You} ${e.strike} ${e.them} back for ${dmg} damage!\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        return StoryEvent;
    }),
    UnarmedAttack: new ability({name: "Unarmed Attack", desc: "An attack with a bare fist.", cost: 2, type: 'offense'}, (StoryEvent, caster, target) => {
        
        let {You,hit,them,miss,swing, your} = verbs(caster)
        StoryEvent.displayText = `${You} ${swing} ${your} fist.\n`
        if(roll(20) + caster.stats.agi >= roll(20) + target.stats.agi)
        {
            let crit = (roll(20) == 20)? (caster.stats.dex + caster.stats.int)/2 : 0;
            let dmg = (caster.stats.str + roll(20)) * (1 + crit);
            target.hp -= dmg;
            StoryEvent.displayText += `\n${You} ${hit} ${them} for ${dmg} damage.\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        else
        {
            let e = verbs(target);
            let crit = (roll(20) == 20)? (target.stats.dex + target.stats.int)/2 : 0;
            let dmg = (target.stats.str + roll(20)) * (1 + crit);
            StoryEvent.displayText += `\n${You} ${miss}!\n`
            caster.hp -= dmg;
            StoryEvent.displayText += `\n${e.You} ${e.strike} ${e.them} back for ${dmg} damage!\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        return StoryEvent;
        
    }),
    HeavyAttack: new ability({name: "Heavy Attack", desc: "An heavy attack with a melee weapon.", cost: 5, type: 'offense'}, (StoryEvent, caster, target) => {
        
        let {you,hit,them,miss,swing,your,You,yourself} = verbs(caster)
        StoryEvent.displayText = `${You} ${swing} ${your} fist as hard as ${you} can.\n`
        if(roll(20) + caster.stats.agi >= roll(20) + target.stats.agi)
        {
            let crit = (roll(40) == 40)? (caster.stats.dex + caster.stats.int)/2 : 0;
            let dmg = (caster.stats.str + roll(40)) * (1 + crit);
            target.hp -= dmg;
            StoryEvent.displayText += `\n${You} ${hit} ${them} for ${dmg} damage.\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        else
        {
            let e = verbs(target);
            let crit = (roll(20) >= 15)? (target.stats.dex + target.stats.int)/2 : 0;
            let dmg = (target.stats.str + roll(20)) * (1 + crit);
            StoryEvent.displayText += `\n${you} miss and leave ${yourself} wide open!\n`
            caster.hp -= dmg;
            StoryEvent.displayText += `\n${e.You} ${e.strike} ${e.them} back for ${dmg} damage!\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        return StoryEvent;
    }),
    QuickAttack: new ability({name: "Quick Attack", desc: "An quick attack.", cost: 1, type: 'offense'}, (StoryEvent, caster, target) => {
        
        let {You,them,miss,jab, prepare} = verbs(caster)
        StoryEvent.displayText = `${You} ${prepare} to attack.\n`
        if(roll(20) + caster.stats.agi >= roll(20) + target.stats.agi)
        {
            let crit = (roll(20) == 20)? 2 : 0;
            let dmg = (caster.stats.str + roll(5)) * (1 + crit);
            target.hp -= dmg;
            StoryEvent.displayText += `\n${You} quickly ${jab} ${them} in the face for ${dmg} damage.\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        else
        {
            let e = verbs(target);
            let crit = (roll(20) == 20)? (target.stats.dex + target.stats.int)/2 : 0;
            let dmg = (target.stats.str + roll(20)) * (1 + crit);
            StoryEvent.displayText += `\n${You} ${miss}!\n`
            caster.hp -= dmg;
            StoryEvent.displayText += `\n${e.You} ${e.strike} ${e.them} back for ${dmg} damage!\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        return StoryEvent;
    }),
    Whirlwind: new ability({name: 'Whirlwind', desc: 'Spin furiously, attacking multiple times' , cost: 5, type: 'offense'}, (StoryEvent, caster, target) => {
        
       
        let {You,hit,them,miss,spin, prepare} = verbs(caster)
        StoryEvent.displayText = `${You} ${spin} around like a maniac!\n`
        if(roll(20) + caster.stats.agi >= roll(20) + target.stats.agi)
        {
            let critical = 0;
            let totalDamage = 0;
            let attacks = roll(10)
            for(let i = 0; i<attacks; i++)
            {
                let crit = (roll(20) == 20)? (caster.stats.dex + caster.stats.int)/2 : 0;
                let dmg = (caster.stats.str + roll(20)) * (1 + crit);
                totalDamage += dmg;
                critical += crit;
            }

            target.hp -= totalDamage;
            StoryEvent.displayText += `\n${You} ${hit} ${them} ${attacks} times!\nDoing ${totalDamage} damage..\n`
            if(critical)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${critical} times damage!\n`
            }
        }
        else
        {
            let e = verbs(target);
            let crit = (roll(20) == 20)? (target.stats.dex + target.stats.int)/2 : 0;
            let dmg = (target.stats.str + roll(20)) * (1 + crit);
            StoryEvent.displayText += `\n${You} ${miss}!\n`
            caster.hp -= dmg;
            StoryEvent.displayText += `\n${e.You} ${e.strike} ${e.them} back for ${dmg} damage!\n`
            if(crit)
            {
                StoryEvent.displayText += `\nA critical strike!\n\n${crit} times damage!\n`
            }
        }
        return StoryEvent;

    }),

}
