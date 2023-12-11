import * as dotenv from "dotenv";

dotenv.config();

export const dbHost = process.env.DBHOST;
export const dbPort = Number(process.env.DBPORT) || 3306;
export const dbUser = process.env.DBUSER;
export const dbPassword = process.env.DBPASSWORD;
export const database = process.env.DATABASE