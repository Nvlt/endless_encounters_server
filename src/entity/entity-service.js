
const { format } = require('morgan');
const {v4:uuid} = require('uuid');
const {jobs} = require('../../gameLogic/Content/jobs');
const abilities = require('../../gameLogic/Content/abilities');

const statsObjToArr=(obj) => {
    if(!obj) throw new Error('Input must be stats object')
    return [
      obj.str || 0, 
      obj.dex || 0, 
      obj.int || 0, 
      obj.stam|| 0, 
      obj.will|| 0, 
      obj.agi || 0, 
      obj.cha || 0
    ]
  }

const formatStats=(array) => {
    if(array.length<7) throw new Error('All Stats Must have a value; str, dex, int, stam, will, agi, cha')
    if(!array) throw new Error('Input must be an Array')
    return {
      str: array[0] || 0,
      dex: array[1] || 0,
      int: array[2] || 0,
      stam: array[3]|| 0,
      will: array[4]|| 0,
      agi: array[5] || 0,
      cha: array[6] || 0
    };
}
const formatJob=(jobKey)=>
{
  const job = jobs[jobKey];
  return job;
}
const formatAbilities=(ability_array)=>
{
    let result=[];
    for(const ability of ability_array)
    {
        const {name,desc,cost,type} = abilities[ability]
        result.push({displayName:ability,name,desc,cost,type});
    }
    return result;
}

const entityService = {
  getEntityById:async(db, id)=>
  {
    let data = await db.raw(`SELECT * FROM "entity" WHERE "id" = '${id}'`)
    data.rows[0].stats = formatStats(data.rows[0].stats);
    data.rows[0].abilities = formatAbilities(data.rows[0].abilities);
    data.rows[0].job = formatJob(data.rows[0].job);
    return data.rows[0];
  },
  getEntityByToken:async(db, token)=>
  {

  }
}

module.exports = entityService;