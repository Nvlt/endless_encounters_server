const express = require('express');
const path = require('path');
const UserService = require('./user-service');
const {v4:uuid} = require('uuid');
const atob = require('atob');
const userRouter = express.Router();
const jsonBodyParser = express.json();
userRouter.route('/story/').get(jsonBodyParser, async (req,res,next)=>{

  let auth = req.headers['authorization'];
  if(auth)
  {
    const db = req.app.get('db');
    auth = auth.split('.');
    const accessAuth = JSON.parse(atob(auth[1]));
    console.log(accessAuth);
    const data = await UserService.getUserGameDataForEngine(db, accessAuth['access_token']);
    if(!data)
    {
      return res.status(400).json({Error:"Denied"})
    }
    return res.status(200).json(data);
  }
  else
  {
    return res.status(400).json({Error:"Denied"})
  }

})
userRouter
  .route('/')
  .post(jsonBodyParser, async (req, res, next) => {
    const {email, password, username}=req.body;
    
    for(const field of ['email', 'username', 'password']) {
      if(!req.body[field]) {
        return res.status(400).json({
          error: `Missing ${field} in request body`
        });
      }
    }

    try {
      const passwordError=UserService.validatePassword(password);
      if(passwordError) return res.status(400).json({error: passwordError});

      const hasUsername=await UserService.hasUserWithUserName(req.app.get('db'), username);
      if(hasUsername) return res.status(400).json({error: 'Username already taken'});

      const hashedPassword=await UserService.hashPassword(password);

      const newUser={
        email,
        username,
        password: hashedPassword,
        access_token: uuid()

      }

      const user=await UserService.insertUser(req.app.get('db'), newUser);

      return res.status(201)
        .location(path.posix.join(req.originalUrl, `/${user.id}`))
        .json(UserService.serializeUser(user))
    } catch(error) {
      next(error);
    }
  });

module.exports=userRouter;
