
const { format } = require('morgan');
const {v4:uuid} = require('uuid');
const {jobs} = require('../../gameLogic/Content/jobs');
let abilities = require('../../gameLogic/Content/abilities');
const entityService = require('../entity/entity-service');
const userService = require('../user/user-service');
const storyEvent = require('../../gameLogic/storyEvent/storyEvent');
const entity = require('../../gameLogic/entity/entity');
const PLACE = require('../../gameLogic/Content/place');
const {specialAbilities} = require('../../gameLogic/Content/jobs');




const formatAbilitiesForClient=(ability_array)=>
{ 
    let sto = new storyEvent();
    let p = new PLACE(sto);
    let _abilities = {...abilities,...p.specialAbilities,...specialAbilities}
    let result=[];
    for(const ability of ability_array)
    {
        ////console.log(ability,_abilities[ability]);
        const {name,desc,cost,type} = _abilities[ability]
        result.push({displayName:ability,name,desc,cost,type});
    }
    ////console.log(abilities['tavern']);
    return result;
}
const formatAbilitiesForEngine=(ability_array)=>
{ 
    let sto = new storyEvent();
    let p = new PLACE(sto);
    let _abilities = {...abilities,...p.specialAbilities,...specialAbilities}
    let result = {};
    for(const ability of ability_array)
    {
        result[ability] = _abilities[ability];
    }
    
    return result;
}
const deconstructAbilities = (abilityObj)=>
{
  result = '';
  //console.log(abilityObj);
  for(const [key, value] of Object.entries(abilityObj))
  {
    result += `,'${key}'`
  }
  result = result.substr(1);
  return result;
}
const deconstructEntities = (entitiesArry)=>
{
    if(entitiesArry)
    {
        result = [];
        for(const entity of entitiesArry)
        {
            result.push(entity.serverData.id);
        }
        return result;
    }
}
const deconstructStory = (storyObj)=>
{
  ////console.log(entityObj);
  if(storyObj)
  {
    storyObj.choices = deconstructAbilities(storyObj.choices);
    storyObj.entities = deconstructEntities(storyObj.entities);

    let {type,displayText,combat,fromCombat,name,lastTavern,lastTown,desc,choices,player,ap,turn,entities} = storyObj;
    const data = {type,displayText,combat,fromCombat,name,lastTavern,lastTown,desc,choices,player,ap,turn,entities}
    console.log(data)
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

const storyService = {
 
    getStoryByID:async(db,id)=>{
        //////console.log(typeof id)
        if(!typeof id === 'number')
        {
            return {Error:'id must be an integer'};
        }
        let data = await db.raw(`SELECT * FROM "story" WHERE "id" = '${id}'`);
        data = data.rows[0];
        //////console.log(data.player)
        data.player = await entityService.getEntityById(db,data.player)
        entityArray = [];
        for(const entity of data.entities)
        {
            entityArray.push(await entityService.getEntityById(db,entity));
        }
        data.entities = entityArray;
        data.choices = formatAbilitiesForClient(data.choices);
        return data;
    },
    getStoryByIDForEngine:async(db,id)=>{
        let data = await db.raw(`SELECT * FROM "story" WHERE "id" = '${id}'`);
        data = data.rows[0];
        data.player = await entityService.getEntityByIdForEngine(db,data.player)
        entityArray = [];
        for(const entity of data.entities)
        {
            entityArray.push(await entityService.getEntityByIdForEngine(db,entity));
        }
        data.entities = entityArray;
        data.choices = formatAbilitiesForEngine(data.choices);
        const newStory = new storyEvent(data);
        newStory.serverData = {id:id};
        return newStory;
    },
    saveStory:async(db,storyObj)=>
  {
    //`UPDATE "user" SET "access_token" = '${newToken}' WHERE "username" = '${username}' `
    //////console.log("mew",entityObj)
    
    ////console.log(entityObj,"meewww");
    console.log("Meow object",storyObj.serverData);
    const _story = deconstructStory(storyObj);
    let {type,displayText,combat,fromCombat,name,lastTavern,lastTown,desc,choices,player,ap,turn,entities} = _story;
    if(!entities.length)
    {
        entities = `array[]::INT[]`;
    }
    else
    {
        entities = `ARRAY[${entities}]`
    }
    
    
    const data = await db.raw(`
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
    console.log(data.rows[0]);
  }
}

module.exports = storyService;