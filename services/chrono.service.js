const chrono = require('chrono-node');
const { parseISO } = require('./dayjs.service');
module.exports = {
    getAlarmByChrono : (text,timeNow,callback) =>{
        try {
            console.log(`Chrono ====>`)
            const date = chrono.parseDate(text,{
                instant: new Date(timeNow), 
                timezone: "ICT",
            });
            console.log({date});
            // console.log({parseISO:parseISO(date)})
            callback(parseISO(date),null)
        } catch (error) {
            callback(null,error)
        }
    }
}