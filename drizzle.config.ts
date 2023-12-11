import { Config } from 'drizzle-kit';

export default {
    schema: "./src/db/schemas/*{.ts, .js}",
    out: "./src/db/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "teste"
    }
} satisfies Config