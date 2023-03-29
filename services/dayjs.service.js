const dayjs = require('dayjs')
module.exports = {
    parseISO : (text,timeNow) =>{
        try {
            const outputFormat = 'h:mm A DD/MM/YYYY';
            let parse = dayjs(text);
            return {format:parse.format(outputFormat),day:parse.date(),month:parse.month(),year:parse.year(),hour:parse.hour(),minute:parse.minute(),second:parse.second(),diff:getDiff(timeNow,parse)}
        } catch (error) {
            console.log({error})
        }
    },
    getDiff: (timeA,timeB) =>{
        try {
            let a = dayjs(timeA)
            let b = dbyjs(timeB)
            return a.diff(b) 
        } catch (error) {
            console.log({error})
        }
    },
}