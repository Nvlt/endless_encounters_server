const express = require('express');
const path = require('path');
const storyService = require('./story-service');
const entityService = require('../entity/entity-service');
const router = express.Router();
const abilities = require('../../gameLogic/Content/abilities');
const jsonBodyParser = express.json();


router.route('/:id').get(jsonBodyParser, async (req, res, next) => {
      const db= req.app.get('db');
      const {id} = req.params;
      const data = await storyService.getStoryByIDForEngine(db,id);
      
      res.json(data);

  });


  module.exports = router;