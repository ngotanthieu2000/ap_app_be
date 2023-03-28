const cloudinary = require("cloudinary");
const { getAlarms } = require("../models/alarms.model");
const { getAlarmByChrono } = require("../services/chrono.service");
require("dotenv").config();
const { CLOUD_NAME, API_CLOUD_KEY, API_CLOUD_SECRET } = process.env;
console.log({ CLOUD_NAME, API_CLOUD_KEY, API_CLOUD_SECRET });
cloudinary.config({
  cloud_name: CLOUD_NAME, // add your cloud_name
  api_key: API_CLOUD_KEY, // add your api_key
  api_secret: API_CLOUD_SECRET, // add your api_secret
  secure: true,
});

module.exports = {
  getAudios: async (req, res, next) => {
    try {
      const listAudio = await cloudinary.v2.search
        .expression("folder:alarm_app_music/*")
        .execute()
        .then((result) => {
          return result.resources.map((a) => {
            return { filename: a.filename, url: a.url };
          });
        });
      console.log(listAudio);
      return res.status(200).json({ code: "Success", listAudio });
    } catch (error) {
      console.log({ error });
    }
  },
  getListAlarm: async (req, res) => {
    try {
      console.log(">>>> getListAlarm");
      if (!req.query.id) {
        res.status(400).json({ code: "Failure" });
      }
      await getAlarms(req.query.id, (err, rows) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ code: "Failure", err });
        } else {
          console.log(rows);
          return res.status(200).json({ code: "Success", rows });
        }
      });
    } catch (error) {
      console.log({ error });
    }
  },
  getAlarmByText: async (req,res) =>{
    try {
      console.log({body: req.body.text})
      await getAlarmByChrono(req.body.text[0],(result,error)=>{
        if (error) {
          console.error(error);
          return res.status(400).json({ code: "Failure", error });
        } else {
          console.log(result);
          return res.status(200).json({ code: "Success", result });
        }
      })
    } catch (error) {
      
    }
  }
};
