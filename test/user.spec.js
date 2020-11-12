const chai = require('chai');
const supertest = require('supertest');
const app = require('../src/server')
const testHelper = require('./test-helpers.js');
const db = testHelper.makeKnexInstance();
const paths = [
                '../migrations/001.do.create_user.sql',
                '../migrations/002.do.create_story.sql',
                '../migrations/003.do.create_entity.sql',
                '../seeds/seed.tables.sql'
            ]
async function populateTestDB()
{
    for(const path of paths)
    {
        await db.raw(`${testHelper.sqlFile(path)}`);
    }
}



describe('/api/user/ endpoint tests.', () => {
    it('On valid registration we should get an object with our username', async() => {
        await populateTestDB();
        let test = await supertest(app).post('/api/user/').send({"email":"meow@meow.com","password":"password","username":"moo"});
        console.log(test.status);
        return chai.expect(test.status).to.equal(201) && chai.expect(test.body.username).to.equal('moo');
    })
    it('On invalid registration we should get an object containing an error message.', async() => {
        await populateTestDB();
        let test = await supertest(app).post('/api/user/').send({"password":"password","username":"moo"});        
        return chai.expect(test.status).to.equal(400) && chai.expect(Object.keys(test.body)).to.include('error');
    })
    
    
})