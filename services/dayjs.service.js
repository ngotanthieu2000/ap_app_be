const dayjs = require('dayjs')
module.exports = {
    parseISO : (text) =>{
        try {
            const outputFormat = 'h:mm A DD/MM/YYYY';
            let parse = dayjs(text);
            return {format:parse.format(outputFormat),day:parse.date(),month:parse.month(),year:parse.year(),hour:parse.hour(),minute:parse.minute(),second:parse.second()}
        } catch (error) {
            console.log({error})
        }
    },
}