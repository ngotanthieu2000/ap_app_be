const {pool,getQueryDB} = require('./db');
const { getUser } = require('./users.model');

module.exports = {
    getAlarms: async (id,callback) => {
        try {
            console.log('>>>>> getAlarm >> pool querry')
          const query = {
            text: `select * from alarm where own = $1 `,
            values: [id]
          };
          pool.query(query, (err, res) => {
            if (err) {
              callback(err, null);
            } else {
              callback(null, res.rows);
            }
          });
        } catch (error) {
          return error;
        }
      },
}