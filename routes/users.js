var express = require('express');
const { getUsers ,getUserById} = require('../controllers/user.controller');
var router= express.Router();

/* GET users listing. */
router.get('/get-users/all', getUsers);
router.get('/login', getUserById);

module.exports = router;
