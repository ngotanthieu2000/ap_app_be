const chrono = require('chrono-node');
const { parseISO, parseTimezone } = require('./dayjs.service');
module.exports = {
    getAlarmByChrono : (text,timeNow,callback) =>{
        try {
            console.log(`Chrono ====>`)
            const date = chrono.parseDate(text);
            // let localTime = parseTimezone(date);
            // console.log({getAlarmByChrono:localTime.format("h:mm A DD/MM/YYYY")})
            // console.log({timeNow})
            console.log({date});
            // console.log({parseISO:parseISO(date)})
            callback(parseISO(date),null)
        } catch (error) {
            callback(null,error)
        }
    }
}