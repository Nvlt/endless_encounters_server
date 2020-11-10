const express = require('express');
const path = require('path');
let storyService = require('./story-service');
const router = express.Router();
const abilities = require('../../gameLogic/Content/abilities');
const jsonBodyParser = express.json();

storyService = new storyService();


router.route('/:id').get(jsonBodyParser, async (req, res, next) => {
      const db= req.app.get('db');
      const {id} = req.params;
      const data = await storyService.getStoryByIDForEngine(db,id);
      if(data)
      {
            if(data.Error)
            {
                  return res.status(400).json(data);
            }
            else
            {
                  return res.status(200).json(data);
            }
      }
      

  });


  module.exports = router;