const bcrypt = require('bcryptjs');
const {v4:uuid} = require('uuid');
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
    const data = await db.raw(`SELECT "username","entity" FROM "user" WHERE "access_token" = '${access_token}';`);
    //console.log(data);
    return data.rows;
  },
  updateAccessToken:async(db,username)=>
  {
    
    const newToken = uuid();
    console.log(username);
    const data = await db.raw(`UPDATE "user" SET "access_token" = '${newToken}' WHERE "username" = '${username}' `)
    //console.log(data);
    return newToken;
  }
}

module.exports = UserService;