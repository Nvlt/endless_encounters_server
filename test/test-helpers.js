const knex = require('knex');
const path = require('path');
const fs = require('fs');
module.exports = {
    makeKnexInstance:()=> {
        return knex({
          client: 'pg',
          connection: process.env.TEST_DATABASE_URL,
        })
    },
    sqlFile:(filePath)=>
    {
        return fs.readFileSync(path.join(__dirname, filePath)).toString();
    }
    

}

