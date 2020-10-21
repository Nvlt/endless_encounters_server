const ability = require('../abiliy/ability');
const roll = function(max){
    max=max+1;
    min=1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


module.exports = {
        Attack:new ability({name:"Attack", desc:"A very basic attack."},(StoryEvent)=>{
      let active;
      let target;
      if (StoryEvent.activeEntity==='player') {
        StoryEvent.displayText = "You wind up for an attack.\n"
        active = StoryEvent.player;
        target = StoryEvent.entities[0]
        }
        let hitRoll = roll(20);
   
        if(hitRoll===1){
           active.hp = (active.hp - (target.stats.str/2)); 
           StoryEvent.displayText += "You failed so badly you're lucky you're still alive.\n"
          return StoryEvent}
        if(hitRoll===20){
            let damage = target.hp;  
            target.hp = target.hp-damage;
            StoryEvent.displayText += `Oh my god ${target.name} just exploded into a red mist of blood and viscera... \nyou did ${damage} damage..`
            return StoryEvent;
        }
        if(hitRoll+active.stats.str>=(target.stats.stam+((target.stats.agi+2)/2))){ 
          let damage = active.stats.str+1;  
          target.hp = target.hp-damage;
          StoryEvent.displayText += `You strike ${target.name} with your fist doing ${damage} damage`
        return StoryEvent
        }
        StoryEvent.displayText = "Ha, you missed!";
        return StoryEvent;
       } )
  
  
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