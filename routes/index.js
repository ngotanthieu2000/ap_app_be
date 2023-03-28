const express = require('express')
const router = express.Router()
const UserRoute = require('./users')
const AlarmRoute = require('./alarm')

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/api/users',UserRoute);
router.use('/api/alarm',AlarmRoute);


module.exports = router;
