const storyEvent = require("../storyEvent/storyEvent")

module.exports = class speech
{
    constructor(StoryEvent)
    {
        if(StoryEvent)
        {
            this.player = StoryEvent.player;
            this.killQuotes = {
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general:[
                    `So ends the life of the pathetic ${this.player.name}!`,
                    `It could have been great, ${this.player.name}, but alas you had to go..`,
                    `Bahahahaa!! You're a fool, ${this.player.name}!`,
                    `That will teach you! I ${StoryEvent.entities[0].name} am a GOD!! Goodbye ${this.player.name}.`
                ],
                dragon:[
                    `Foolish human, challenging me was the last mistake you will ever make.`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider:[
                    `Hsss...`,
                    `*Rattling hiss*`
                ],
                cat:[
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                villager:[
                    `Oh no...`
                ],
                bat:[
                    `*squeak squeak*`,
                    `*screech*`,
                ],
            };
            this.generalQuote = {
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general:[
                    `So ends the life of the pathetic ${this.player.name}!`,
                    `It could have been great, ${this.player.name}, but alas you had to go..`,
                    `Bahahahaa!! You're a fool, ${this.player.name}!`,
                    `That will teach you! I ${StoryEvent.entities[0].name} am a GOD!! Goodbye ${this.player.name}.`
                ],
                dragon:[
                    `Foolish human, challenging me was the last mistake you will ever make.`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider:[
                    `Hsss...`,
                    `*Rattling hiss*`
                ],
                cat:[
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                bat:[
                    `*squeak squeak*`,
                    `*screech*`,
                ],
                villager:[
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name == 'Mage')? 'Are you gonna do a magic trick?' : `It's good to see folks with such upstanding careers.`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name == 'Mage')? `Don't see many of them around here.` : `Gonna go out and slay the dragon?`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name == 'Mage')? `Keep your filthy magic to yourself.` : `Well piss off ya brute!`}`,
                    `Good day to ya.`,
                    `Happy to see ya.`
                ],
            };
            this.hostileQuote = {
                /*
                    The keys in this array represent an entity speech type.
                    If you created a special character, set their speechType to the same key as the speech you give them here.
                    For example a dragon entity would be given the speechType of dragon.
                */
                general:[
                    `Bahahahaa!! You're a fool, ${this.player.name}!`,
                    `Prepare to die!`,
                    `Prepare for trouble, and make it double..`,
                    `Give me your money!`,
                    `You.. I've heard of you. Prepare to die, ${this.player.name}`
                    
                ],
                villager:[
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name == 'Mage')? 'Are you gonna do a magic trick?' : `It's good to see folks with such upstanding careers.`}`,
                    `Oh, a ${this.player.job.name} huh? ${(this.player.job.name == 'Mage')? `Don't see many of them around here.` : `Gonna go out and slay the dragon?`}`,
                    `Good day to ya.`,
                    `Happy to see ya.`
                ],
                dragon:[
                    `Oh.. Another one, they just keep coming.\nHow many times must I tell you humans, STAY OUT OF MY ${StoryEvent.name.toUpperCase()}!!`,
                    `Ahh, well at least you'll make a good snack.`
                ],
                spider:[
                    `Hsss...`,
                    `*Rattling hiss*`
                ],
                cat:[
                    `Meow.`,
                    `Meeeoow~`,
                    `Mew`
                ],
                bat:[
                    `*squeak squeak*`,
                    `*screech*`,
                ],
            };
        }
        else
        {
            throw new Error('Speech must receive a StoryEvent.')
        }
    }
    
    getKillQuote(type)
    {
        const data = this.killQuotes[type];
        if(data)
        {
            const index = Math.round(Math.random() * (data.length - 1))
            return data[index];
        }
        else
        {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
    getGeneralQuote(type)
    {
        const data = this.generalQuote[type];
        if(data)
        {
            const index = Math.round(Math.random() * (data.length - 1))
            return data[index];
        }
        else
        {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
    getHostileQuote(type)
    {
        const data = this.hostileQuote[type];
        if(data)
        {
            const index = Math.round(Math.random() * (data.length - 1))
            return data[index];
        }
        else
        {
            return `aaaaaaaaaaaaaaaaaaaaaaaaaaa!`
        }
    }
}