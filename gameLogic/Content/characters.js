
module.exports=class characters {
    constructor(StoryEvent) {
        const {jobs}=require('./jobs');
        const entity=require('../entity/entity');
        this.characters={
            class_screen: [],
            start_screen: [],
            name_screen: [],
            desc_screen: [],

            // new entity({name: "", desc: "", speechType: '', hostility: false, job: jobs.Test_Enemy, max_hp: 0, level: 0, stats: {str: 0}})

            town: [
                new entity({name: "Friendly cat", desc: "an adorable cat", speechType: 'cat', job: jobs.Test_Enemy, max_hp: 10000, level: 100, stats: {str: 5000000}}),
                new entity({name: "Drunk Jim", desc: "an older man in the begginning of his golden years", speechType: 'drunk', job: jobs.drunk_Enemy, max_hp: 100, level: 10, stats: {str: 5, agi: -5, char: 20, int: 3}}),
                new entity({name: "Thrall", desc: "an honorable Orc, in tune with elements around hiim.", speechType: 'orc', hostility: false, job: jobs.orc, max_hp: 200, level: 60, stats: {int: 100, will: 50, str: 40}})
            ],
            cave: [
                new entity({name: "Elder Dragon", desc: "a dragon", hostility: true, speechType: 'dragon', job: jobs.Test_Enemy, max_hp: 1000, level: 30, stats: {str: 500, int: 500}}),
                new entity({name: "Giant Spider", desc: "a horrifying giant spider", hostility: true, job: jobs.Test_Enemy, speechType: 'spider', max_hp: 800, level: 15, stats: {str: 500}}),
                new entity({name: "Harmless Bunny", desc: "an adorable little bunny", hostility: true, job: jobs.Test_Enemy, speechType: 'dragon', max_hp: 10000, level: 100, stats: {str: 99999999, agi: 999999}}),
                new entity({name: "Smorf", desc: "a small orange goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 10, level: 1}),
                new entity({name: "Smyrf", desc: "a small yellow goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 20, level: 2}),
                new entity({name: "Smeeg", desc: "a small green goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 30, level: 3}),

            ],
            deep_cave: [
                new entity({name: 'zubat', desc: 'a fackin zubat', speechType: 'bat', hostility: false, job: jobs.Test_Enemy}),
                new entity({name: "Beetlejuice", desc: "a half rotten scumbag", speechType: 'beetle', hostility: true, job: jobs.Test_Enemy, max_hp: 420, level: 69, stats: {str: 50}}),
                new entity({name: "Athena", desc: "the goddess of war", speechType: 'dragon', hostility: true, job: jobs.Test_Enemy, max_hp: 1200, level: 300, stats: {str: 500, int: 500}}),
                new entity({name: "Smoob", desc: "a small blue goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 40, level: 4}),
                new entity({name: "Smave", desc: "a small violet goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 50, level: 5}),
                new entity({name: "Smerf", desc: "a small red goblin with a bulging sack...of coins.", speechType: 'goblin', hostility: true, job: jobs.Test_Enemy, max_hp: 60, level: 6}),
            ],
            abandoned_castle: [
                new entity({name: "Elder Dragon", desc: "a dragon", speechType: 'dragon', hostility: true, job: jobs.Test_Enemy, max_hp: 1000, level: 30, stats: {str: 500, int: 500}}),
                new entity({name: "Giant Spider", desc: "a horrifying giant spider", hostility: true, job: jobs.Test_Enemy, speechType: 'spider', max_hp: 800, level: 15, stats: {str: 500}}),
                new entity({name: "Mama Sun", desc: "a one-eyed, one-horned, flyin' purple people eater", hostility: true, job: jobs.Test_Enemy, speechType: 'spider', max_hp: 200, level: 25, stats: {str: 250}}),
                new entity({name: "Grommash", desc: "a brawny orc with massive fangs", speechType: 'orc', hostility: true, job: jobs.orc, max_hp: 2000, level: 0, stats: {str: 65, agi: 25, dex: 25}})
            ],
            explore: [
                new entity({name: "Bandit", desc: "a basic asshole", speechType: 'general', hostility: true, job: jobs.Test_Enemy, max_hp: 300, level: 3, stats: {str: 500}}),
                new entity({name: "Friendly cat", desc: "an adorable cat", speechType: 'cat', job: jobs.Test_Enemy, max_hp: 10000, level: 100, stats: {str: 5000000}}),
                new entity({name: "Tiff", desc: "a queer cutie", speechType: 'tiff', job: jobs.Test_Enemy, max_hp: 10000, level: 100, stats: {str: 5000000}}),
            ],
            tavern: [
                new entity({name: "Friendly cat", desc: "an adorable cat", speechType: 'cat', job: jobs.Test_Enemy, max_hp: 10000, level: 100, stats: {str: 5000000}}),
                new entity({name: "Joe", desc: "the inn keeper", speechType: 'villager', job: jobs.Test_Enemy}),
                new entity({name: "Meli", desc: "the inn keeper", speechType: 'villager', job: jobs.Test_Enemy}),
                new entity({name: "Joy", desc: "the inn keeper", speechType: 'villager', job: jobs.Test_Enemy})
            ],
            afterlife: [

            ]
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
            /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE

        }
    }
    getCharacter(type) {
        const data=this.characters[type]
        if(data) {
            const index=Math.round(Math.random()*(data.length-1))
            return data[index];
        }
        else {
            throw new Error('Character Error.')
        }
    }
    getCharacters(type, length) {

        let characters=[];
        for(let i=0;i<Math.round(length);i++) {
            characters.push(this.getCharacter(type))
        }
        return characters;
    }

}


/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
/////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
