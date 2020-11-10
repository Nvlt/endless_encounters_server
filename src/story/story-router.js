const express=require('express');
const path=require('path');
let storyService=require('./story-service');
const router=express.Router();
const abilities=require('../../gameLogic/Content/abilities');
const jsonBodyParser=express.json();

storyService=new storyService();


router
    .route('/:id')
    .get(jsonBodyParser, async (req, res, next) => {
        const db=req.app.get('db');
        const {id}=req.params;
        console.log(req.params)
        const data=await storyService.getStoryByIDForEngine(db, id);
        res.json(data);

    });


module.exports=router;
