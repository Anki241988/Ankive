import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: true,
   
  },

   connectionTimeoutMillis: 5000
});

export default pool