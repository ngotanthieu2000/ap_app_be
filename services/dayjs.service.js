const dayjs = require('dayjs')
const getDiff =  (timeA,timeB) =>{
    try {
        let a = dayjs(timeA)
        let b = dayjs(timeB)
        return a.diff(b) 
    } catch (error) {
        console.log({error})
    }
}
module.exports = {
    parseISO : (text,timeNow) =>{
        try {
            const outputFormat = 'h:mm A DD/MM/YYYY';
            let parse = dayjs(text);
            // console.log({timeNow,timeTaget:parse.valueOf()})
            // let diff = getDiff(timeNow,parse.millisecond());
            let diff = parse.unix() * 1000;
            return {format:parse.format(outputFormat),day:parse.date(),month:parse.month(),year:parse.year(),hour:parse.hour(),minute:parse.minute(),second:parse.second(),diff}
        } catch (error) {
            console.log({error})
        }
    },
}