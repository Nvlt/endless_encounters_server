const express=require('express');
const path=require('path');
let storyService=require('./story-service');
const router=express.Router();
const abilities=require('../../gameLogic/Content/abilities');
const jsonBodyParser=express.json();

storyService=new storyService();


<<<<<<< HEAD
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
      
=======
router
    .route('/:id')
    .get(jsonBodyParser, async (req, res, next) => {
        const db=req.app.get('db');
        const {id}=req.params;
        console.log(req.params, req.params.id, id)
        const data=await storyService.getStoryByIDForEngine(db, id);
        res.json(data);
>>>>>>> 60039726425c8e1b8a353125c591abb3fc9f0909

    });


module.exports=router;
