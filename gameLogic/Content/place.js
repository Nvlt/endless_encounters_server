
const storyEvent = require('../storyEvent/storyEvent');
const abilities = require('./abilities');
module.exports = class place
{
    constructor(StoryEvent)
    {
        this.player = StoryEvent.player || {name:undefined,desc:undefined};
        //console.log(StoryEvent);
        this.choices = {
            explore:[
                abilities.cave,
                abilities.cave,
                abilities.cave,
                abilities.abandoned_castle,
                abilities.town
            ],
            cave:[
                abilities.leave_cave,
                abilities.deep_cave
            ]
        }
        this.descData = {
            start_screen:{
                names:[''],
                text:['Endless Encounters\n'],
                afterText:['\nNothin but mews...\n\n', '\nOh yeah~\n\n', '\nWe have dragons.\n\n', '\nPlease just start.\n\n'],
                choices:{Start:abilities.name_screen}
            },
            class_screen:{
                names:[''],
                text:['Welcome to Endless Encounters\n'],
                afterText:['\nPlease select a class..\n\n'],
                choices:{Mage:abilities.selectMage,Warrior:abilities.selectWarrior,'Test Cat':abilities.selectTestCat}
            },
            name_screen:{
                names:[''],
                text:['Welcome to Endless Encounters\n'],
                afterText:['\nWhat is your name?\n\n'],
                choices:{}
            },
            desc_screen:{
                names:[''],
                text:[`So, your name is ${this.player.name}`],
                afterText:['\nDescribe yourself...\n\n'],
                choices:{}
            },
            town:{
                names:['Mewington', 'Castle MeowMuffin', 'Flufftopia', 'Potatia', 'Portlandia'],
                text:["You arrive in the town of", "Welcome to the town of", "You have entered"],
                afterText:[""],
                choices:{explore:abilities.explore, 'Rest at tavern':abilities.tavern}
            },
            explore:{
                names:['swamp', 'magical forest','field'],
                text:["You go exploring and you find yourself in a", "You leave and find yourself in a"],
                afterText:[
                    "immediately.\nYou see something in the distance..",
                    "shortly after.\nYou see something in the distance..",
                    "after a long journey to get there.\nYou see a structure in the distance.."
                ],

                choices:{explore:abilities.explore, inspect:this.randomChoice('explore')}
            },
            cave:{
                names:['dark cave', 'glowing mushroom cave', 'cave'],
                text:["You enter the", "You quietly sneak into the", "You casually walk into the"],
                afterText:[".\nYou look around, amazed at it's natural beauty.",".\nIt is very quiet..\nToo quiet..."],
                choices:{leave:abilities.leave_cave, 'continue deeper':abilities.deep_cave}
            },
            deep_cave:{
                names:['cave'],
                text:["You explore deeper into the", "You quietly continue to explore the", "You casually walk deeper into the"],
                afterText:[".\nIt's getting darker.",".\nYou hear drips on the near by rocks..",".\nIt is very quiet..\nToo quiet..."],
                choices:{'continue deeper':abilities.deep_cave,leave:this.randomChoice('cave')}
            },
            abandoned_castle:{
                names:['castle ruin', 'abandoned wizard tower', 'mystic pillars'],
                text:["You observe the", "You happen upon a", "You casually walk into the"],
                afterText:[".\nYou look around, amazed at it's construction",".\nIt is very quiet..\nToo quiet...", '.\nYou cannot begin to understand the skill it took to create it.'],
                choices:{explore:abilities.explore}
            },
            afterlife:{
                names:['black void.', 'hellish nightmare.'],
                text:["You appear in a"],
                afterText:["\nYou are dead..","\nThe end..."],
                choices:{Continue:abilities.tavern, 'Start again':abilities.name_screen}
            },
            tavern:{
                names:['tavern.', 'Broken Spoon Tavern.','Meowing Mug.'],
                text:["You awake at the"],
                afterText:['\n\nYou feel refreshed.'],
                choices:{Leave:abilities.leaveTavern}
                }
        }
    }
    generateText(type, name)
    {
        return `${this.selectRandomData(type,'text')} ${name} ${this.selectRandomData(type,'afterText')}`;
    }
    selectRandomData(type, key)
    {
        const data = this.descData[type][key]
        //console.log(data);
        const index = Math.round(Math.random() * (data.length - 1))
        return data[index];
    }
    randomChoice(type)
    {
        const data = this.choices[type]
        //console.log(data);
        const index = Math.round(Math.random() * (data.length - 1))
        return data[index];
    }
}