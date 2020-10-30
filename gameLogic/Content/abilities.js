const ability=require('../abiliy/ability');
const storyEvent=require('../storyEvent/storyEvent');
const sArray=require('../utility/sArray');
const entity=require('../entity/entity');

const roll=function (max) {
    max=max+1;
    min=1;
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min); //The maximum is exclusive and the minimum is inclusive
}
const verbs=(caster) => {
    const you={dodge: 'dodge', attack: 'attack', strike: 'strike', prepare: 'prepare', ready: 'ready', their: 'their', have: 'have', them: 'them', miss: 'miss', hit: 'hit', channel: 'channel', hurl: 'hurl'}
    const enemy={dodge: 'dodges', attack: 'attacks', strike: 'strikes', prepare: 'prepares', ready: 'readys', their: 'your', have: 'has', them: 'you', miss: 'misses', hit: 'hits', channel: 'channel', hurl: 'hurls'}
    if(caster.type=='player') {
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
        console.log(jobs)
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
        console.log(jobs)
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
    heal: new ability({name: 'heal', desc: 'Heal yourself for int * 5 hp.'}, (StoryEvent) => {
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
        let {channel, hurl, have, dodge}=verbs(caster);
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

            StoryEvent.displayText=`${StoryEvent.turn}'s turn. ${caster.name} targets ${target.name}`;
        }

        return StoryEvent;
    }),
    endTurn: new ability({name: "End Turn", desc: "end your turn."}, (StoryEvent, caster, target) => {

        if(caster&&target) {
            StoryEvent.ap=StoryEvent.max_ap;
            StoryEvent.displayText=`${caster.name} ends their turn.`
            StoryEvent.turn=(StoryEvent.turn=='player')? 'enemy':'player';
        }
        else {
            StoryEvent.displayText='You are alone...'
            StoryEvent.turn='player';
        }
        return StoryEvent;
    }),
    Attack: new ability({name: "Attack", desc: "A basic attack.", type: 'offense'}, (StoryEvent, caster, target) => {
        const cost=5;
        const apCost=5;
        // if(caster.type=='player') {
        //     StoryEvent.ap-=apCost;
        // }
        StoryEvent.combat=true;
        let name=(caster.type=='player')? 'You':caster.name;
        let {prepare, attempt, hit, miss}=verbs(caster)
        let tName=target.name;
        let pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} ${prepare} to attack.`
        const hitRoll=roll(20);
        if(caster&&target) {
            console.log('has caster & target', StoryEvent.ap)
            let {str}=caster.stats;
            let {stam, agi}=target.stats;
            if(StoryEvent.ap>=cost||caster.type!=='player') {
                // console.log('caster.ap>=cost ran')
                if(caster.type==='player') {
                    StoryEvent.ap-=cost;
                }
                StoryEvent.displayText+=`\n\n${name} ${attempt} to strike ${target.name}!`
                if(hitRoll===1) {
                    console.log('crit fail ran')
                    const dmg=(str/2)
                    caster.hp=(caster.hp-dmg);
                    StoryEvent.displayText+=`${name} ${miss} spectacularly, injuring themselves for ${dmg} damage..\n`
                    return StoryEvent
                }
                if(hitRoll===20) {
                    console.log('crit success ran')
                    const dmg=str*5;
                    target.hp=target.hp-dmg;
                    StoryEvent.displayText+=`${name} lands a critical strike on ${target.name},\n dealing ${dmg} damage..\n`
                    return StoryEvent;
                }
                if(hitRoll+str>=(stam+((agi+2)/2))) {
                    console.log('successful hit ran')
                    const dmg=(str+roll(4));
                    StoryEvent.displayText+=`\n\n${name} ${hit} ${tName} for ${dmg} damage!`;
                    target.hp-=dmg;
                    if(target.hp<=0) {
                        //console.log('killed it ran')
                        StoryEvent.displayText+=`\n\n${tName} has fallen, lifeless to the ground...`;
                    }
                }
                else {
                    console.log('dodged attack and counter ran')
                    const dmg=((agi+2)/2);
                    StoryEvent.displayText+=`\n\n${tName} dodges ${pronoun} attack at lightning speed, striking ${name} for ${dmg} damage!`
                    caster.hp-=dmg;
                }
            }
            else {
                StoryEvent.displayText+='You do not have enough AP for that'
            }

        }
        else {
            StoryEvent.displayText+='But no one is around...'
        }
        return StoryEvent;
    }),
    UnarmedAttack: new ability({name: "Unarmed Attack", desc: "An attack with a bare fist."}, (StoryEvent, caster, target) => {
        const cost=3;
        const apCost=3;
        // if(caster.type=='player') {
        //     StoryEvent.ap-=apCost;
        // }
        StoryEvent.combat=true;
        let name=caster.name;
        let tName=target.name;
        let pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} winds up for an attack on ${target.name}.`
        const hitRoll=roll(20);
        if(caster&&target) {
            let {str}=caster.stats;
            let {stam, agi}=target.stats;
            if(StoryEvent.ap>=cost||caster.type!=='player') {
                if(caster.type==='player') {
                    StoryEvent.ap-=cost;
                }
                StoryEvent.displayText+=`\n\n${name} launches their attack ${target.name}'s way!`
                if(hitRoll===1) {
                    console.log('crit fail')
                    const dmg=((str+4)/4)
                    caster.hp=(caster.hp-dmg);
                    StoryEvent.displayText+=`${name} hits themselves, for ${dmg} damage..\n`
                    return StoryEvent
                }
                if(hitRoll===20) {
                    console.log('crit success')
                    const dmg=(str*2)-2;
                    target.hp=target.hp-dmg;
                    StoryEvent.displayText+=`${name} horrifically stamps ${target.name},\n dealing ${dmg} damage..\n`
                    return StoryEvent;
                }
                if(hitRoll+str>=(stam+((agi+2)/2))) {

                    const dmg=(str+roll(4));
                    StoryEvent.displayText+=`\n\n${name} hits ${tName} for ${dmg} damage!`;
                    target.hp-=dmg;
                    if(target.hp<=0) {
                        StoryEvent.displayText+=`\n\n${tName} has fallen, bloodied and bruised to the ground...`;
                    }
                }
                else {
                    console.log('dodge')
                    const dmg=((agi+2)/2);
                    StoryEvent.displayText+=`\n\n${tName} dodges ${pronoun} attack and strikes back ${name} for ${dmg} damage!`
                    caster.hp-=dmg;
                }
            }
            else {
                StoryEvent.displayText+='You do not have enough AP for that'
            }

        }
        else {
            StoryEvent.displayText+='But no one is around...'
        }
        return StoryEvent;
    }),
    HeavyAttack: new ability({name: "Heavy Attack", desc: "An heavy attack with a melee weapon."}, (StoryEvent, caster, target) => {
        const cost=8;
        const apCost=8;
        console.log('AP ', StoryEvent.ap)
        // if(caster.type=='player') {
        //     StoryEvent.ap-=apCost;
        // }
        StoryEvent.combat=true;
        let name=caster.name;
        let tName=target.name;
        let pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} prepares a haymaker.`
        const hitRoll=roll(20);
        if(caster&&target) {
            console.log('has caster and target', StoryEvent.ap)
            let {str}=caster.stats;
            let {stam, agi}=target.stats;

            if(StoryEvent.ap>=cost||caster.type!=='player') {
                if(caster.type==='player') {
                    StoryEvent.ap-=cost;
                }
                StoryEvent.ap-=apCost;
                StoryEvent.displayText+=`\n\n${name} hastens toward ${target.name}.`
                if(hitRoll===1) {
                    const dmg=(str+5)
                    caster.hp=(caster.hp-dmg);
                    StoryEvent.displayText+=`${name} bungles ${pronoun} attack, taking ${dmg} damage..\n`
                    return StoryEvent
                }
                if(hitRoll===20) {
                    const dmg=str*10;
                    target.hp=target.hp-dmg;
                    StoryEvent.displayText+=`${name} lands a shattering strike on ${target.name},\n dealing ${dmg} damage..\n`
                    return StoryEvent;
                }
                if(hitRoll+str>=(stam+((agi+2)/2))) {
                    const dmg=(str*roll(4));
                    StoryEvent.displayText+=`\n\n${name} hits ${tName} for ${dmg} damage!`;
                    target.hp-=dmg;
                    if(target.hp<=0) {
                        StoryEvent.displayText+=`\n\n${tName} is no more, they lie bleeding on the ground.`;
                    }
                }
                else {
                    const dmg=((agi+2)/2);
                    StoryEvent.displayText+=`\n\n${tName} had dodged the attack, dealing ${dmg} damage!`
                    caster.hp-=dmg;
                }
            }
            else {
                StoryEvent.displayText+='You do not have enough AP for that'
            }

        }
        else {
            StoryEvent.displayText+='But no one is around...'
        }
        return StoryEvent;
    }),
    QuickAttack: new ability({name: "Quick Attack", desc: "An quick attack."}, (StoryEvent, caster, target) => {
        const cost=2;
        const apCost=2;

        StoryEvent.combat=true;
        let name=caster.name;
        let tName=target.name;
        let pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} rushes toward ${tName}.`
        let hitRoll=roll(20);
        if(caster&&target) {
            let {str, dex}=caster.stats;
            let {stam, agi}=target.stats;
            if(StoryEvent.ap>=cost||caster.type!=='player') {
                if(caster.type=='player') {
                    StoryEvent.ap-=apCost;
                }
                StoryEvent.displayText+=`\n\n${name} spring toward ${target.name}.`
                if(hitRoll===1) {//critical failure
                    const dmg=(str+dex)
                    caster.hp=(caster.hp-dmg);
                    StoryEvent.displayText+=`${name} stumble, hurting ${pronoun} pride for 100, and themselves for ${dmg}.\n`
                    return StoryEvent
                }
                if(hitRoll===20) {//critical success
                    const dmg=(dex*((str+2)/2))+10;
                    target.hp=target.hp-dmg;
                    StoryEvent.displayText+=`${name} artfully flips over ${target.name},\n dealing ${dmg} damage.\n That was awesome.\n`
                    return StoryEvent;
                }
                if(hitRoll+dex>=(stam+((agi+2)/2))) {//successful attack
                    const dmg=((dex+str)*roll(6));
                    StoryEvent.displayText+=`\n\n${name} hits ${tName} for ${dmg} damage!`;
                    target.hp-=dmg;
                    if(target.hp<=0) {
                        StoryEvent.displayText+=`\n\n${tName} is greeted by death, as ${name} emerges the victor.`;
                    }
                }
                else {
                    const dmg=((agi+2)/2);//missed attack
                    StoryEvent.displayText+=`\n\n${tName} is too quick, hammering ${name} for ${dmg} damage!`
                    caster.hp-=dmg;
                }
            }
            else {
                StoryEvent.displayText+='You do not have enough AP for that'
            }
        }
        else {
            StoryEvent.displayText+='But no one is around...'
        }
        return StoryEvent;
    }),
    Whirlwind: new ability({name: 'Whirlwind', desc: 'Spin furiously, attacking multiple times'}, (StoryEvent, caster, target) => {
        const cost=6;
        const name=caster.name;
        const tName=target.name;
        const pronoun=(StoryEvent.turn=='player')? 'Your':'their';
        StoryEvent.displayText=`\n\n${name} rushes toward ${tName}.`


        if(caster&&target) {

            let {str, dex}=caster.stats;
            let {stam, agi}=target.stats;
            if(StoryEvent.ap>=cost||caster.type!=='player') {
                if(caster.type==='player') {
                    StoryEvent.ap-=cost;
                }
                for(let i=0;i<cost;i++) {
                    let hitRoll=roll(20);
                    if(hitRoll===1) {
                        const dmg=(str+dex)/6;
                        caster.hp=caster.hp-dmg;
                        StoryEvent.displayText+=`\n${name} sprains an ankle, taking ${dmg} damage`;
                        return StoryEvent;
                    }
                    if(hitRoll===20) {
                        const dmg=(dex*((str+2)/6))+1;
                        target.hp-=dmg;
                        StoryEvent.displayText+=`\n${tName} slices cleanly, critically striking for ${dmg} damage!`;
                        return StoryEvent;
                    }
                    if(hitRoll+dex>=(stam+((agi+2)/2))) {
                        const dmg=((dex/4+str)*roll(6)/2);
                        StoryEvent.displayText+=`\n${name} hits ${tName} for ${dmg} damage!`;
                        target.hp-=dmg;
                        if(target.hp<=0) {
                            StoryEvent.displayText+=`\n${tName} is greeted by death, as ${name} emerges the victor.`;
                            return StoryEvent;
                        }
                    }
                    else {
                        const dmg=((agi+2)/2);//missed attack
                        StoryEvent.displayText+=`\n${tName} is too quick, hammering ${name} for ${dmg} damage!`
                        caster.hp-=dmg;
                    }
                }
            }
            else {
                StoryEvent.displayText+=`\n\nYou do not have enough AP to cast that!`
            }
        }
        else {
            StoryEvent.displayText+=`\n\nThere is nobody around...`
        }
        return StoryEvent;

    })
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE





}
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE





{        // if(StoryEvent.activeEntity==='player') {
    //     StoryEvent.displayText="You wind up for an attack.\n"
    //     active=StoryEvent.player;
    //     target=StoryEvent.entities[0]
    //     if(!target) {
    //         StoryEvent.displayText+='But there is no one there.'
    //         return StoryEvent;
    //     }

    // }
    // let hitRoll=roll(20);

    // if(hitRoll===1) {
    //     let damage=(target.stats.str/2)
    //     active.hp=(active.hp-damage);
    //     StoryEvent.displayText+=`Your attack backfires. You take ${damage} damage..\n`

    //     return StoryEvent
    // }
    // if(hitRoll===20) {
    //     let damage=target.hp;
    //     target.hp=target.hp-damage;
    //     StoryEvent.displayText+=`Oh my god ${target.name} just exploded into a red mist of blood and viscera... \nyou did ${damage} damage..\n`

    //     return StoryEvent;
    // }
    // //console.log(target.stats);
    // if(hitRoll+active.stats.str>=(target.stats.stam+((target.stats.agi+2)/2))) {
    //     let damage=active.stats.str+1;
    //     target.hp=target.hp-damage;
    //     StoryEvent.displayText+=`You strike ${target.name} with your fist doing ${damage} damage\n`

    //     return StoryEvent
    // }
    // StoryEvent.displayText="Ha, you missed!\n";
}

//const Attack = new ability()
//if event.activeEntity===player active=Player, target=event.entities[0]

//Attack.name='Attack'
//else char=event.entities[0], target=player
//Attack.desc = "You attempt to attack your target in a way that defies explanation."


//Attack.logic=()=>{ const hitRoll=roll20+Str

//if roll20 === 1 return char.hp -target.Str/2 res.desc="You failed so badly you're lucky you're still alive"


//if roll20 === 20 && active===player return target.hp===0 res.desc="Oh my god they just exploded into a red mist of blood and viscera..."

//if hitRoll+(activ.stats.str) >= target.Stam+(Agi/2) Attack.Hit=true
//if Attack.Hit return Attack.damage=char.Str+1
//return new Event()}
//


//const unarmedAttack = new ability()
//unarmedAttack.desc = "You attempt to attck your target."
//unarmedAttack.logic=()=>{
//const hitRoll=roll20+Str
//if hitRoll >= target.Stam+(Agi/2) unarmedAttack.Hit=true
//if unarmedAttack.Hit return unarmedAttack.damage=char.Str+1
//return new Event()}
//

//{attack:new Ability(()=>{the stuff, return event})}


//const heavyMeleeAttack = new ability()
//heavyMeleeAttack.desc = "You attempt to attack your target."
//heavyMeleeAttack.function=()=>{ const hitRoll=roll20+Str
//if hitRoll >= target.Stam+(Agi/2) heavyMeleeAttack.Hit=true
//if heavyMeleeAttack.Hit return heavyMeleeAttack.damage=char.Str*2
//return new Event()}
//


//const lightMeleeAttack = new ability()
//lightMeleeAttack.desc = "You attempt to attack your target."
//lightMeleeAttack.function=()=>{ const hitRoll=roll20+Str
// if roll20 === 1 return char.hp -target.Str/2 res.desc="You failed so badly you're lucky you're still alive"
//if hitRoll >= target.Stam+(Agi/2) return lightMeleeAttack.Hit=true
//else return lightMeleeAttack.Hit=false
//if lightMeleeAttack.Hit return lightMeleeAttack.damage=char.Str
//else return char.hp- target.str / 5
//return new Event()}
//



///entity.isPlayerturn bool
///isNPC turn==


//activeEntity=player || NPC
