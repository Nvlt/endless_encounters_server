
const {format}=require('morgan');
const {v4: uuid}=require('uuid');
const {jobs}=require('../../gameLogic/Content/jobs');
let abilities=require('../../gameLogic/Content/abilities');
const userService=require('../user/user-service');
const storyEvent=require('../../gameLogic/storyEvent/storyEvent');
const PLACE=require('../../gameLogic/Content/place');
const {specialAbilities}=require('../../gameLogic/Content/jobs');
let entityService=require('../entity/entity-service');
entityService=new entityService();




const formatAbilitiesForClient=(ability_array) => {
    let sto=new storyEvent();
    let p=new PLACE(sto);
    let _abilities={...abilities, ...p.specialAbilities, ...specialAbilities}
    let result=[];
    for(const ability of ability_array) {

        if(_abilities[ability]) {
            const {name, desc, cost, type}=_abilities[ability]
            result.push({displayName: ability, name, desc, cost, type});
        }
        else {
            throw new Error(`Ability Error: ${ability} could not be found. Add it into a special abilities array or something.`)
        }

    }

    return result;
}
const formatAbilitiesForEngine=(ability_array) => {
    let sto=new storyEvent();
    let p=new PLACE(sto);
    let _abilities={...abilities, ...p.specialAbilities, ...specialAbilities}
    let result={};
    console.log(ability_array)
    for(const ability in ability_array) {
        result[ability]=_abilities[ability];
    }

    return result;
}
const deconstructAbilities=(abilityObj) => {
    result='';

    for(const [key, value] of Object.entries(abilityObj)) {
        result+=`,'${key}'`
    }
    result=result.substr(1);
    return result;
}
const deconstructEntities=(entitiesArry) => {
    if(entitiesArry) {
        result=[];
        for(const entity of entitiesArry) {
            if(entity) {
                result.push(entity.serverData.id);
            }

        }
        return result;
    }
}
const deconstructStory=(storyObj) => {

    if(storyObj) {
        storyObj.choices=deconstructAbilities(storyObj.choices);
        storyObj.entities=deconstructEntities(storyObj.entities);

        let {type, displayText, combat, fromCombat, name, lastTavern, lastTown, desc, choices, player, ap, turn, entities}=storyObj;
        const data={type, displayText, combat, fromCombat, name, lastTavern, lastTown, desc, choices, player, ap, turn, entities}

        return data;
    }
}
/* CREATE TABLE "story" (
  "id" SERIAL PRIMARY KEY,
  "type" TEXT,
  "displayText" TEXT,
  "combat" BOOLEAN DEFAULT false,
  "fromCombat" BOOLEAN DEFAULT false,
  "name" TEXT,
  "lastTavern" TEXT,
  "lastTown" TEXT,
  "desc" TEXT,
  "choices" TEXT[],
  "player" INT,
  "ap" INT,
  "turn" TEXT,
  "entities" INT[]
);*/

module.exports=class storyService {

    constructor() {
        this.deconstructStory=deconstructStory;
    }
    getStoryByID=async (db, id) => {

        if(!typeof id==='number') {
            return {Error: 'id must be an integer'};
        }
        let data=await db.raw(`SELECT * FROM "story" WHERE "id" = '${id}'`);
        data=data.rows[0];

        data.player=await entityService.getEntityById(db, data.player)
        let entityArray=[];
        for(const entity of data.entities) {
            entityArray.push(await entityService.getEntityById(db, entity));
        }
        data.entities=entityArray;
        data.choices=formatAbilitiesForClient(data.choices);
        return data;
    }
<<<<<<< HEAD
    getStoryByIDForEngine = async(db,id)=>{
        let data = await db.raw(`SELECT * FROM "story" WHERE "id" = '${id}'`);
        data = data.rows[0];
        if(data)
        {
            data.player = await entityService.getEntityByIdForEngine(db,data.player)
            let entityArray = [];
            if(data.entities)
            {
                for(const entity of data.entities)
                {
                    entityArray.push(await entityService.getEntityByIdForEngine(db,entity));
                }
=======
    getStoryByIDForEngine=async (db, id) => {
        let data=await db.raw(`SELECT * FROM "story" WHERE "id" = '${id}'`);
        data=data.rows[0];
        data.player=await entityService.getEntityByIdForEngine(db, id)
        let entityArray=[];
        if(data.entities) {
            for(const entity of data.entities) {
                entityArray.push(await entityService.getEntityByIdForEngine(db, entity));
            }
>>>>>>> 60039726425c8e1b8a353125c591abb3fc9f0909

            }
            
            data.entities = entityArray;
            data.choices = formatAbilitiesForEngine(data.choices);
            let tmText = data.displayText;
            data.displayText = null;
            const newStory = new storyEvent(data);
            newStory.displayText = tmText;
            newStory.serverData = {id:id};
            return newStory;
        }
        else
        {
            return {Error:'Denied'};
        }
<<<<<<< HEAD
=======

        data.entities=entityArray;
        data.choices=formatAbilitiesForEngine(data.choices);
        let tmText=data.displayText;
        data.displayText=null;
        const newStory=new storyEvent(data);
        newStory.displayText=tmText;
        newStory.serverData={id: id};
        return newStory;
>>>>>>> 60039726425c8e1b8a353125c591abb3fc9f0909
    }
    createNewStory=async (db) => {

        let newStory=new storyEvent()
        let data=await db.raw(`INSERT INTO story DEFAULT VALUES RETURNING "id"`);
        let id=data.rows[0].id
        newStory.serverData=data.rows[0]
        let player=await entityService.registerBlankEntity(db, id, 'player'); //Create our initial player;
        await entityService.registerBlankEntity(db, -1, 'basic'); //Create a place holder for future entities;
        newStory.player={serverData: {id: player}};

        newStory.entities=[];
        data=await this.saveStory(db, newStory)
        return data;


    }
    saveStory=async (db, storyObj) => {

        const _story=deconstructStory(storyObj);
        let {type, displayText, combat, fromCombat, name, lastTavern, lastTown, desc, choices, player, ap, turn, entities}=_story;
        if(!entities.length) {
            entities=`array[]::INT[]`;
        }
        else {
            entities=`ARRAY[${entities}]`
        }
        if(!choices.length) {
            choices=`array[]::INT[]`;
        }


        console.log('Attempt to save story')
        const data=await db.raw(`
        UPDATE "story"
        SET
        "type" = '${type}',
        "name" = '${name}',
        "desc" = '${desc}',
        "choices" = ARRAY[${choices}],
        "displayText" = '${displayText}',
        "combat" = ${combat},
        "fromCombat" = ${fromCombat},
        "lastTavern" = '${lastTavern}',
        "lastTown" = '${lastTown}',
        "player" = ${player.serverData.id},
        "ap" = ${ap},
        "turn" = '${turn}',
        "entities" = ${entities}
        WHERE "id" = ${storyObj.serverData.id}
        RETURNING *;`)
        return data.rows[0];
    }
}
