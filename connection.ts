import { Pool } from "pg";

export const connection = new Pool({
  user : "postgres",
  host : "localhost",
  database: "postgres",
  password: "1234",
  port: 5432
});