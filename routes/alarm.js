var express = require('express');
const { getAudios,getListAlarm ,getAlarmByText} = require('../controllers/alarm.controller');
var router= express.Router();

/* GET users listing. */
router.get('/get-audios', getAudios);
router.get('/get-list-alarm', getListAlarm);
router.post('/get-alarm-by-text', getAlarmByText);

module.exports = router;
