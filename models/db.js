const { Client, Pool } = require("pg");
require("dotenv").config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, PORT } =
  process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;
var config = {
  user: PGUSER, // default process.env.PGUSER || process.env.USER
  password: PGPASSWORD, //default process.env.PGPASSWORD
  host: PGHOST, // default process.env.PGHOST
  database: PGDATABASE, // default process.env.PGDATABASE || user
  port: 5334, // default process.env.PGPORT
  connectionString: URL, // e.g. postgres://user:password@host:5432/database
  // ssl: "require", // passed directly to node.TLSSocket, supports all tls.connect options
  // types?: any, // custom type parsers
  // statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
  // query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
  // application_name?: string, // The name of the application that created this Client instance
  // connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
  // idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
}
const client = new Client(config);
const pool = new Pool(config);
function getQueryDB(query,callback) {
  pool.query(query, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
}
// const sql = postgres({
//   URL,
//   ssl: "require",
//   transform: {
//     undefined: null,
//   },
// });
module.exports = {
  pool,client,getQueryDB,
  connectDB: async () => {
    try {
      client
        .connect()
        .then(() => console.log("connected"))
        .catch((err) => console.error("connection error", err.stack));
    } catch (error) {
      console.log(error);
    }
  },
  
};
