const express=require('express');
const path=require('path');
const eventService=require('./event-service');

const eventRouter=express.Router();
const jsonBodyParser=express.json();



eventRouter
  .route('/event')
  .get(async (req, res, next) => {
    try {
      const items=await getInventoryItems(req.app.get('db'), req.inventory.id);
      res.json({
        inventory: req.inventory,
        items
      })
    } catch(err) {
      next(err)
    }
  })
  .post(jsonBodyParser, async (req, res, next) => {
    const {event_id, choice}=req.body;


  })


  ;
