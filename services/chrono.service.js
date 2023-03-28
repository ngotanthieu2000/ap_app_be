const chrono = require('chrono-node');
const { parseISO } = require('./dayjs.service');
module.exports = {
    getAlarmByChrono : (text,callback) =>{
        try {
            console.log(`Chrono ====>`)
            const date = chrono.parseDate(text);
            // console.log({date});
            // console.log({parseISO:parseISO(date)})
            callback(parseISO(date),null)
        } catch (error) {
            callback(null,error)
        }
    }
}