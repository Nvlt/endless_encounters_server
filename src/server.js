require('dotenv').config();

const knex = require('knex');
const app = require('./app.js');
const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL
});

app.set('db', db);
app.get('/', function (req, res) {
  res.send('Hello, world!')
})

app.listen(PORT, () => {
  console.log('Server started');
});
module.exports = app;