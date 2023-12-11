import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { dbHost, dbPassword, dbUser, database } from "../../dotenv.ts";

const connection = await mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: database
});

export const db: MySql2Database = drizzle(connection);

await migrate(db, { migrationsFolder: './src/db/migrations' });