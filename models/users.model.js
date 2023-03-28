const {pool} = require('./db')

module.exports = {
  getUsers: async () => {
    const users = await sql`
      select
        *
      from users
    `;
    return users;
  },
  createUser: async (id,callback) => {
    const query = {
      text: `insert into users(idDevice) value $1`,
      values: [id],
    };
    pool.query(query,(err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    });
  },
  getUser: async (id,callback) => {
    try {
      const query = {
        text: `select *  from users where idDevice = $1 `,
        values: [id],
      };
      pool.query(query,(err, res) => {
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