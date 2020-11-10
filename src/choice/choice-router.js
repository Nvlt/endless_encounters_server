const express = require('express');
const path = require('path');
const userService = require('../user/user-service');
let storyService = require('../story/story-service');
let entityService = require('../entity/entity-service');
entityService = new entityService();
storyService = new storyService();
const atob = require('atob');

const router = express.Router();
const jsonBodyParser = express.json();

router.route('/').post(jsonBodyParser, async (req, res, next) => {
      //entityService.registerBlankEntity(req.app.get('db'))
      
      const db = req.app.get('db');
      let auth = req.headers['authorization'];
      if(auth)
      {
            const {choice} = req.body;
            auth = auth.split('.');
            if(auth[1])
            {
                  const accessAuth = JSON.parse(atob(auth[1]));
                  let gameState = await userService.getUserGameDataForEngine(db,accessAuth['access_token']);
                  if(gameState)
                  {
                        if(gameState.Error)
                        {
                              return res.status(400).json({error:"Denied"});  
                        }
                        let serverData_player = gameState.player.serverData;
                        let serverData_story = gameState.serverData;
                        gameState.displayText = null;
                        gameState = gameState.makeChoice(choice);
                        //console.log(gameState.displayText)
                        gameState.serverData = serverData_story;
                        gameState.player.serverData = serverData_player;
                        gameState.player.current_event = serverData_story.id;
                        
                        let storedGame = {...gameState};
                        if(gameState.entities[0])
                        {  
                              gameState.entities[0].serverData = {id:Number(gameState.player.serverData.id) + 1};
                              gameState.entities[0].current_event = gameState.serverData.id;
                              storedGame = {...gameState};
                              await entityService.saveEntity(db,gameState.entities[0]); 
                        }
                        await entityService.saveEntity(db,gameState.player);
                        
                        await storyService.saveStory(db,gameState);
                        
                        res.json(await storyService.getStoryByIDForEngine(db,serverData_story.id));
                  }
                  else
                  {
                        return res.status(400).json({error:"Denied"});
                  }
                  
            }
            else
            {
                  return res.status(400).json({error:"Denied"});
            }
            
      }
      else
      {
            return res.status(400).json({error:"Denied"});
      }
      
  });

  module.exports = router;