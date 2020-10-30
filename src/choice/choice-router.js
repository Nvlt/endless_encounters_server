const express = require('express');
const path = require('path');
const userService = require('../user/user-service');
const entityService = require('../entity/entity-service');
const storyService = require('../story/story-service');
const atob = require('atob');

const router = express.Router();
const jsonBodyParser = express.json();

router.route('/').post(jsonBodyParser, async (req, res, next) => {
      
      const {choice} = req.body;
      let auth = req.headers['authorization'];
      const db = req.app.get('db');
      auth = auth.split('.');
      const accessAuth = JSON.parse(atob(auth[1]));
      //////console.log(accessAuth)
      let gameState = await userService.getUserGameDataForEngine(db,accessAuth['access_token'])
      ////console.log(gameState.player.entityRef);
      gameState = gameState.makeChoice(choice);
      entityService.saveEntity(db,gameState.player);
      if(gameState.entities.length)
      {
            entityService.saveEntity(db,gameState.entities[0]);
            
      }
      
      storyService.saveStory(db,gameState);
      res.json(gameState);
  });

  module.exports = router;