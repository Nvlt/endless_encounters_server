const express=require('express');
const cors=require('cors');
const app=express();
const morgan=require('morgan');
const helmet=require('helmet');
const {NODE_ENV}=require('./config');
const errorHandler=require('./middleware/error-handler');
const authRouter=require('./auth/auth-router');
const userRouter=require('./user/user-router');
const choiceRouter=require('./choice/choice-router');
const entityRouter=require('./entity/entity-router');
const storyRouter=require('./story/story-router');
//const inventoryRouter = require('./inventory/inventory-router');



app.use(morgan((NODE_ENV==='production')? 'tiny':'common', {
  skip: () => NODE_ENV==='test'
}));
app.use(cors());
app.use(helmet());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/choice', choiceRouter);
app.use('/api/entity', entityRouter);
app.use('/api/story', storyRouter);
//app.use('/api/inventory', inventoryRouter);

app.use(errorHandler);

module.exports=app;
