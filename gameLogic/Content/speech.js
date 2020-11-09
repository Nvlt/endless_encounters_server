const storyEvent=require("../storyEvent/storyEvent")

module.exports=class speech {
    constructor(StoryEvent) {
        if(StoryEvent) {
            this.player=StoryEvent.player;
            this.killQuotes={
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general: [
                    `So ends the life of the pathetic ${this.player.name}!`,
                    `It could have been great, ${this.player.name}, but alas you had to go..`,
                    `Bahahahaa!! You''re a fool, ${this.player.name}!`,
                    `That will teach you! I ${StoryEvent.entities[0].name} am a GOD!! Goodbye ${this.player.name}.`
                ],
                beetle: [
                    `See you in Hell!`,
                    `you''re dead!`
                ],
                dragon: [
                    `Foolish human, challenging me was the last mistake you will ever make.`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider: [
                    `Hsss...`,
                    `*Rattling hiss*`
                ],
                cat: [
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                villager: [
                    `Oh no...`
                ],
                bat: [
                    `*squeak squeak*`,
                    `*screech*`,
                ],
                drunk: [
                    `momma...just killed a...`,
                    `take me home, COUNTRY ROADS!!`,
                    "We''re no strangers to love..."
                ],
                goblin: [
                    'WAHOO! Now me take shiny',
                    'Your shiny mine now',
                    'You no even have good stuff!'
                ],
                tiff: [
                    `RIP :--/`
                ],
                orc: [
                    `You fought with honor.`,
                    `I will make my new helm from your bones.`,
                    `This outcome was obvious.`
                ],
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            };
            this.generalQuote={
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general: [
                    `So ends the life of the pathetic ${this.player.name}!`,
                    `It could have been great, ${this.player.name}, but alas you had to go..`,
                    `Bahahahaa!! you''re a fool, ${this.player.name}!`,
                    `That will teach you! I ${StoryEvent.entities[0].name} am a GOD!! Goodbye ${this.player.name}.`
                ],
                dragon: [
                    `Foolish human, challenging me was the last mistake you will ever make.`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider: [
                    `Hsss...`,
                    `*Rattling hiss*`
                ],
                cat: [
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                bat: [
                    `*squeak squeak*`,
                    `*screech*`,
                ],
                goblin: [
                    'This MY treasure, MINE!',
                    'You have pretty shiny things?',
                    'We trade? Want shiny.'
                ],
                beetle: [
                    `IT''S SHOWTIME!`,
                    `Not so fast, roundy. We''re gonna have some laughs`,
                    `Not so fast, Brawnda. We''re taking attendance today and you''re late...`,
                ],
                villager: [
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name=='Mage')? 'Are you gonna do a magic trick?':`It''s good to see folks with such upstanding careers.`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name=='Mage')? `Don't see many of them around here.`:`Gonna go out and slay the dragon?`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name=='Mage')? `Keep your filthy magic to yourself.`:`Well piss off ya brute!`}`,
                    `Good day to ya.`,
                    `Happy to see ya.`
                ],
                drunk: [
                    `hic...hic...`,
                    `I used to be an adventurer like you...`,
                    'Get me another drink, would ya?'
                ],
                tiff: [
                    `That''s fucking bologna, my dude.`,
                    `brb :--)`,
                    `Sorry I'm late...`
                ],
                orc: [
                    `Lok tar Ogar.`,
                    `Zug Zug`,
                    `nothing but mutton to eat`
                ],



                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE

            };
            this.hostileQuote={
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general: [
                    `Bahahahaa!! you''re a fool, ${this.player.name}!`,
                    `Prepare to die!`,
                    `Prepare for trouble, and make it double..`,
                    `Give me your money!`,
                    `You.. I've heard of you. Prepare to die, ${this.player.name}`

                ],
                beetle: [
                    `Let''s turn on the juice and see what shakes loose`,
                    `I'm the ghost with the most babe and your ass is toast`
                ],
                villager: [
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name=='Mage')? 'Are you gonna do a magic trick?':`It''s good to see folks with such upstanding careers.`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name=='Mage')? `Don't see many of them around here.`:`Gonna go out and slay the dragon?`}`,
                    `Good day to ya.`,
                    `Happy to see ya.`
                ],
                dragon: [
                    `Oh.. Another one, they just keep coming.\nHow many times must I tell you humans, STAY OUT OF MY ${StoryEvent.name.toUpperCase()}!!`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider: [
                    `Hsss...`,
                    `*Rattling hiss*`,
                    `*raises arms and does a threatening dance*`
                ],
                cat: [
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                bat: [
                    `*squeak squeak*`,
                    `*screech*`,
                ],
                goblin: [
                    `I see shiny, GIMME`,
                    `Get away from my shiny!`,
                    `YAAHHAHAHARARARARRRRAAA`
                ],
                drunk: [
                    `you...you think you''re better than me?`,
                    `Respect me, respect my money...`,
                    `you feel lucky, punk?`
                ],
                tiff: [
                    `Yikes! That was a lil spicy. We might need take things outside...`
                ],
                orc: [
                    `For Hellscream!`,
                    `Looks like meat is back on the menu!`,
                    `FOR THE HORDE`
                ],
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
                /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE

            };
        }
        else {
            throw new Error('Speech must receive a StoryEvent.')
        }
    }

    getKillQuote(type) {
        const data=this.killQuotes[type];
        if(data) {
            const index=Math.round(Math.random()*(data.length-1))
            return data[index];
        }
        else {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
    getGeneralQuote(type) {
        const data=this.generalQuote[type];
        if(data) {
            const index=Math.round(Math.random()*(data.length-1))
            return data[index];
        }
        else {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
    getHostileQuote(type) {
        const data=this.hostileQuote[type];
        if(data) {
            const index=Math.round(Math.random()*(data.length-1))
            return data[index];
        }
        else {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
}
