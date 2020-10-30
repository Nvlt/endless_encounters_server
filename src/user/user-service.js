const bcrypt = require('bcryptjs');
const {v4:uuid} = require('uuid');
const entityService = require('../entity/entity-service');
const storyService = require('../story/story-service');
const UserService = {
  hasUserWithUserName(db, username) {
    return db
      .from('user')
      .where({ username })
      .first()
      .then(user => !!user);
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('user')
      .returning('*')
      .then(( [user] ) => user)
  },
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password must be less than 72 characters';
    }
    return null;
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },
  serializeUser(user) {
    return {
      id: user.id,
      username: user.username
    }
  },
  getUserGameData:async(db,access_token)=>
  {
    
    let user = await db.raw(`SELECT "username","entity" FROM "user" WHERE "access_token" = '${access_token}';`);
    ////console.log(user)
    user = user.rows[0];
    ////console.log(user);
    if(user)
    { 
      const entity = await entityService.getEntityById(db,user.entity)
      user.entity = entity;
      //console.log(entity)
      const story = storyService.getStoryByID(db, entity.current_event)
      return story;
    }
    //////console.log(data);
    return {Error:'invalid access token'}
  },
  getUserGameDataForEngine:async(db,access_token)=>
  {
    
    let user = await db.raw(`SELECT "username","entity" FROM "user" WHERE "access_token" = '${access_token}';`);
    ////console.log(user)
    user = user.rows[0];
    ////console.log(user);
    if(user)
    { 
      const entity = await entityService.getEntityByIdForEngine(db,user.entity)
      
      const story = await storyService.getStoryByIDForEngine(db, entity.current_event)
      story.playerRef = user.entity;
      story.storyRef = entity.current_event;
      return story;
    }
    //////console.log(data);
    return {Error:'invalid access token'}
  },
  updateAccessToken:async(db,username)=>
  {
    
    const newToken = uuid();
    ////console.log(username);
    const data = await db.raw(`UPDATE "user" SET "access_token" = '${newToken}' WHERE "username" = '${username}' `)
    //////console.log(data);
    return newToken;
  }
}

module.exports = UserService;