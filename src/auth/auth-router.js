const express = require('express');
const AuthService = require('./auth-service');
const {v4:uuid} = require('uuid');
const { requireAuth } = require('../middleware/jwt-auth');
const userServices = require('../user/user-service');

const authRouter = express.Router();
const jsonBodyParser = express.json();

authRouter
  .route('/login')
  .post(jsonBodyParser, async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username,password)
    const loginUser = { username, password };

    for (const [key, value] of Object.entries(loginUser)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        });
      }
    }
    try {
      const dbUser = await AuthService.getUserWithUserName(req.app.get('db'), loginUser.username);
      if (!dbUser) return res.status(400).json({ error: 'Incorrect username or password' });

      const compareMatch = await AuthService.comparePasswords(loginUser.password, dbUser.password);
      if (!compareMatch) return res.status(400).json({ error: 'Incorrect username or password' });

      const sub = dbUser.username;
      const payload = {
        user_id: dbUser.id,
        name: dbUser.name,
        access_token:await userServices.updateAccessToken(req.app.get('db'),sub)
      }
      res.send({
        authToken: AuthService.createJwt(sub, payload)
      })
    }
    catch (error) {
      next(error);
    }   
  })
  .put(requireAuth, (req, res) => {
    const sub = req.user.username
    const payload = {
      user_id: req.user.id,
      name: req.user.name
    }
    res.send({
      authToken: AuthService.createJwt(sub, payload)
    });
  });

module.exports = authRouter;