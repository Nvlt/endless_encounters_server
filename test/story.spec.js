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
populateTestDB()
describe('Testing /api/story/:id', () => {
    it(`Response when id is valid: the dataType key of the returned object should be 'StoryEvent' `, async() => {
        let response = await supertest(app).get('/api/story/1');
        return chai.expect(response.body.dataType).to.equal('StoryEvent');
    })
    it(`Response when id is invalid should be an object with an error message`, async() => {
        let response = await supertest(app).get('/api/story/-1');
        return chai.expect(response.status).to.equal(400) && chai.expect(response.body.Error).to.equal('Denied');
        
    })
})