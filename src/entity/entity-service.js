
const {format}=require('morgan');
const {v4: uuid}=require('uuid');
const {jobs}=require('../../gameLogic/Content/jobs');
const abilities=require('../../gameLogic/Content/abilities');
const storyEvent=require('../../gameLogic/storyEvent/storyEvent');
const entity=require('../../gameLogic/entity/entity');
const PLACE=require('../../gameLogic/Content/place');
const {specialAbilities}=require('../../gameLogic/Content/jobs');

const statsObjToArr=(obj) => {
  if(!obj) throw new Error('Input must be stats object')
  return [
    obj.str||0,
    obj.dex||0,
    obj.int||0,
    obj.stam||0,
    obj.will||0,
    obj.agi||0,
    obj.cha||0
  ]
}

const formatStats=(array) => {
  if(array.length<7) throw new Error('All Stats Must have a value; str, dex, int, stam, will, agi, cha')
  if(!array) throw new Error('Input must be an Array')
  return {
    str: array[0]||0,
    dex: array[1]||0,
    int: array[2]||0,
    stam: array[3]||0,
    will: array[4]||0,
    agi: array[5]||0,
    cha: array[6]||0
  };
}
const formatJob=(jobKey) => {
  const job=jobs[jobKey];
  return job;
}
const formatAbilitiesForEngine=(ability_array) => {
  let sto=new storyEvent();
  let p=new PLACE(sto);
  let _abilities={...abilities, ...p.specialAbilities, ...specialAbilities}
  let result={};
  for(const ability of ability_array) {
    result[ability]=_abilities[ability];
  }

  return result;
}
const formatAbilities=(ability_array) => {
  let sto=new storyEvent();
  let p=new PLACE(sto);
  const _abilities={...abilities, ...p.specialAbilities, ...specialAbilities}
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
const deconstructAbilities=(abilityObj) => {
  result=[];

  for(const [key, value] of Object.entries(abilityObj)) {
    result.push(key);
  }
  return result;
}
const deconstructEntity=(entityObj) => {

  if(entityObj) {
    entityObj.abilities=deconstructAbilities(entityObj.abilities);
    entityObj.stats=statsObjToArr(entityObj.stats);
    let {type, name, desc, abilities, stats, job, level, speechType, statPoints, exp, max_exp, hp, max_hp, mp, max_mp, current_event, hostility}=entityObj;
    return {type, name, desc, abilities, stats, job, level, speechType, statPoints, exp, max_exp, hp, max_hp, mp, max_mp, current_event, hostility};
  }
}

/*CREATE TABLE "entity" (
  "id" SERIAL PRIMARY KEY,
  "type" TEXT,
  "name" TEXT,
  "desc" TEXT,
  "abilities" TEXT[],
  "stats" INT[],
  "job" TEXT,
  "level" INT,
  "speechType" TEXT,
  "statPoints" INT,
  "exp" INT,
  "max_exp"INT,
  "hp" INT,
  "max_hp" INT,
  "mp" INT,
  "max_mp"INT,
  "current_event" INT,
  "hostility" BOOLEAN); */
module.exports=class entityService {

  getEntityById=async (db, id) => {
    if(typeof id=='number') {
      id=id.toString();
    }
    let data=await db.raw(`SELECT * FROM "entity" WHERE "id" = '${id}'`)
    if(data.rows[0]) {
      data.rows[0].stats=formatStats(data.rows[0].stats);
      data.rows[0].abilities=formatAbilities(data.rows[0].abilities);
      data.rows[0].job=formatJob(data.rows[0].job);

    }

    return data.rows[0];
  }
  getEntityByIdForEngine=async (db, id) => {
    // if(typeof id == 'number')
    // {
    //   id = id.toString();
    // }
    let data=await db.raw(`SELECT * FROM "entity" WHERE "id" = '${id}'`)
    if(data.rows[0]) {
      data.rows[0].stats=formatStats(data.rows[0].stats);
      data.rows[0].abilities=formatAbilitiesForEngine(data.rows[0].abilities);
      data.rows[0].job=formatJob(data.rows[0].job);

    }
    const newEntity=new entity(data.rows[0]);
    newEntity.serverData={id: id};
    return newEntity;
  }
  registerBlankEntity=async (db, story_id=null, type='basic') => {
    let newEntity=new entity({type: type});
    let data=await db.raw(`INSERT INTO entity DEFAULT VALUES RETURNING "id"`);
    let id=data.rows[0].id
    newEntity.serverData=data.rows[0]
    newEntity.current_event=(story_id)? story_id:-1;
    data=await this.saveEntity(db, newEntity)
    return id;
  }
  saveEntity=async (db, entityObj) => {

    const _entity=deconstructEntity(entityObj);
    let {type, name, desc, abilities, stats, job, level, speechType, statPoints, exp, max_exp, hp, max_hp, mp, max_mp, current_event, hostility}=_entity;
    job=job.key;

    let abilityStr="";
    if(abilities) {

      for(const ability of abilities) {
        abilityStr+=`,'${ability}'`;
      }
      abilityStr=abilityStr.substr(1);
    }



    const data=await db.raw(`
    UPDATE "entity"
    SET
    "type" = '${type}',
    "name" = '${name}',
    "desc" = '${desc}',
    "abilities" = ARRAY[${abilityStr}],
    "stats" = ARRAY[${stats}],
    "job" = '${job}',
    "level" = ${level},
    "speechType" = '${speechType}',
    "statPoints" = ${statPoints},
    "exp" = ${exp},
    "max_exp" = ${max_exp},
    "hp" = ${hp},
    "max_hp" = ${max_hp},
    "mp" = ${mp},
    "max_mp" = ${max_mp},
    "current_event" = ${current_event},
    "hostility" = ${hostility}
    WHERE "id" = ${entityObj.serverData.id}
    RETURNING *;`)
    return data;
  }
}
