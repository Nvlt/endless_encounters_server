const express = require('express');
const path = require('path');


const router = express.Router();
const jsonBodyParser = express.json();

router.route('/').get(jsonBodyParser, async (req, res, next) => {
        res.status(200).send('It works, wooo.');
  });

  module.exports = router;