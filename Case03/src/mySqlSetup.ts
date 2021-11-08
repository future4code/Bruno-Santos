import { BaseDatabase } from "./data/BaseDatabase";

async function createTables() {
    try {
        await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS OLYMPIC_COMPETITION (
                id VARCHAR(255) PRIMARY KEY,
                competition VARCHAR(255) UNIQUE NOT NULL,
                athlete VARCHAR(255) UNIQUE NOT NULL,
                value VARCHAR(255) NOT NULL,
                unity VARCHAR(255) NOT NULL
            )
        `)

        console.log("MySql setup completed with sucess!!")
    } catch (error) {
        console.log(error)
    }
}

createTables()