const chai = require('chai');
const supertest = require('supertest');
const app = require('../src/server')

let auth_object = null;
describe('Login and authenticated end points', () => {
    it('Successful login should be accepted and send an object containing authToken', async() => {
        let loginData = {"username":"test_user","password":"password"};
        let test = await supertest(app).post('/api/auth/login').send(loginData);
        if(Object.keys(test.body).includes('authToken'))
        {
            auth_object = test.body;
        }
        return chai.expect(test.status).to.equal(200) && chai.expect(Object.keys(test.body)).to.include('authToken');
    })
    it('Unsuccessful login should be rejected and send an object with an error', async() => {
        let loginData = {"username":"test_user","password":"wrongPassword"};
        let test = await supertest(app).post('/api/auth/login').send(loginData);
        return chai.expect(test.status).to.equal(400) && chai.expect(Object.keys(test.body)).to.include('error');
    })
    it('/api/user/story/ with correct auth should be accepted and return an object with a dataType of StoryEvent', async() => {
        let test = await supertest(app).get('/api/user/story/').set('Authorization',auth_object.authToken);
        return chai.expect(test.status).to.equal(200) && chai.expect(test.body.dataType).to.equal('StoryEvent');
    })
    it('/api/user/story/ with incorrect auth should be rejected and send an object with an error', async() => {
        let test = await supertest(app).get('/api/user/story/').set('Authorization','whatkindofnonsense?');
        return chai.expect(test.status).to.equal(400) && chai.expect(Object.keys(test.body)).to.include('error');
    })
    it('/api/choice/ with correct auth should be accepted and return an object with a dataType of StoryEvent', async() => {
        let test = await supertest(app).post('/api/choice/').send({"choice":"some decision"}).set('Authorization',auth_object.authToken);
        console.log(test.body.displayText);
        return chai.expect(test.status).to.equal(200) && chai.expect(test.body.dataType).to.equal('StoryEvent') && chai.expect(test.body.displayText).to.contain('You flail around and accomplish nothing.');
    })
    it('/api/choice/ with incorrect auth should be rejected and send an object with an error', async() => {
        let test = await supertest(app).post('/api/choice/').send({"choice":"some decision"}).set('Authorization','whatthewhoblahisthis?');
        return chai.expect(test.status).to.equal(400) && chai.expect(Object.keys(test.body)).to.include('error');
    })
    

})