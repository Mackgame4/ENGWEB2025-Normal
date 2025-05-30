var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user by ID */
router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

/* POST create a new user */
router.post('/', function(req, res, next) {
  const newUser = req.body;
  // Here you would typically save the user to a database
  res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

module.exports = router;
