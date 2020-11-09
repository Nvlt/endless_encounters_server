const bcrypt = require('bcryptjs');
const {v4:uuid} = require('uuid');
let storyService = require('../story/story-service');
let entityService = require('../entity/entity-service');

storyService = new storyService();
entityService = new entityService();
const UserService = {
  hasUserWithUserName(db, username) {
    return db
      .from('user')
      .where({ username })
      .first()
      .then(user => !!user);
  },
  insertUser:async(db, newUser)=> {
    let newStory = await storyService.createNewStory(db);
   
    newUser.entity = newStory.player;
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
    
    user = user.rows[0];
    
    if(user)
    { 
      const entity = await entityService.getEntityById(db,user.entity)
      user.entity = entity;
      
      const story = storyService.getStoryByID(db, entity.current_event)
      return story;
    }
    
    return {Error:'invalid access token'}
  },
  getUserGameDataForEngine:async(db,access_token)=>
  {
    
    let user = await db.raw(`SELECT "username","entity" FROM "user" WHERE "access_token" = '${access_token}';`);
    
    user = user.rows[0];
    
    if(user)
    { 
      const entity = await entityService.getEntityByIdForEngine(db,user.entity)
      
      const story = await storyService.getStoryByIDForEngine(db, entity.current_event)
      story.playerRef = user.entity;
      story.storyRef = entity.current_event;
      return story;
    }
    
    return {Error:'invalid access token'}
  },
  updateAccessToken:async(db,username)=>
  {
    
    const newToken = uuid();
    
    const data = await db.raw(`UPDATE "user" SET "access_token" = '${newToken}' WHERE "username" = '${username}' `)
   
    return newToken;
  }
}

module.exports = UserService;