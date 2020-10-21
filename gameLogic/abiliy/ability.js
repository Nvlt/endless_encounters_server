 module.exports = class ability
{
    constructor(data = {}, logic = (StoryEvent)=>{return StoryEvent})
    {
        if(data)
        {
            var {name, desc} = data;
        }
        this.name = data.name || "";
        this.desc = data.desc || "";
        this.logic = logic;
    }
    do(event)
    {
        if(event)
        {
            const result = this.logic(event);
            if(result.dataType === 'StoryEvent')
            {
                return result;
            }
            else
            {
                throw new Error('Ability must return storyevent')
            }
        }
        else
        {
            throw new Error("Abilities must take storyevent");
        }
    }
}


//const Attack = new ability()
//if event.activeEntity===player active=Player, target=event.entities[0]
//Attack.name='Attack'
//else char=event.entities[0], target=player
//Attack.desc = "You attempt to attack your target in a way that defies explanation."
//Attack.logic=()=>{ const hitRoll=roll20+Str
//if roll20 === 1 return char.hp -target.Str/2 res.desc="You failed so badly you're lucky you're still alive"
//if roll20 === 20 && active===player return target.hp===0 res.desc="Oh my god they just exploded into a red mist of blood and viscera..."
//if hitRoll >= target.Stam+(Agi/2) Attack.Hit=true
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
