const chrono = require('chrono-node');
const { parseISO } = require('./dayjs.service');
module.exports = {
    getAlarmByChrono : (text,timeNow,callback) =>{
        try {
            console.log(`Chrono ====>`)
            const date = chrono.parseDate(text);
            // console.log({date});
            // console.log({parseISO:parseISO(date)})
            callback(parseISO(date,timeNow),null)
        } catch (error) {
            callback(null,error)
        }
    }
}