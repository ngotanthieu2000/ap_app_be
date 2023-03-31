const dayjs = require("dayjs");
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)
const timezoneName = 'Asia/Ho_Chi_Minh'
const timezoneOffset = new Date().getTimezoneOffset()
const timezoneConfig = {
  name: timezoneName,
  offset: timezoneOffset,
}
module.exports = {
  parseISO: (text) => {
    try {
      const outputFormat = "h:mm A DD/MM/YYYY";
      let parse = dayjs(text).utcOffset(timezoneOffset).tz(timezoneName);
      // console.log({timeNow,timeTaget:parse.valueOf()})
      console.log({parseISO:parse.format("h:mm A DD/MM/YYYY")})
      // let diff = getDiff(timeNow,parse.millisecond());
      let diff = parse.unix() * 1000;
      return {
        format: parse.format(outputFormat),
        day: parse.date(),
        month: parse.month(),
        year: parse.year(),
        hour: parse.hour(),
        minute: parse.minute(),
        second: parse.second(),
        diff,
      };
    } catch (error) {
      console.log({ error });
    }
  },
  parseTimezone: (parsedDate) => {
    try {
    const localDate = dayjs(parsedDate).utcOffset(timezoneOffset).tz(timezoneName)
      console.log({localDate:localDate.format("h:mm A DD/MM/YYYY")})
      return localDate ;
    } catch (error) {
      console.log({ error });
    }
  },
};
