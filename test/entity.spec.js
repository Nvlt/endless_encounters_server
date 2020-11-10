const chai = require('chai');
const supertest = require('supertest');
const app = require('../src/server')

describe('Testing /api/entity/:id', () => {
    it(`Response when id is valid: the dataType key of the returned object should be 'entity' `, async() => {
        let response = await supertest(app).get('/api/entity/1062');
        return chai.expect(response.body.dataType).to.equal('entity');
    })
    it(`Response when id is invalid should be an object with an error message`, async() => {
        let response = await supertest(app).get('/api/entity/-1');
        return chai.expect(response.status).to.equal(400) && chai.expect(response.body.Error).to.equal('Denied');
        
    })
})