import { Sequelize, Options } from 'sequelize'
import { env } from '../env'
import mongoose from 'mongoose'

const postgresOptions: Options = {
    dialect: env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    // logging: (...msg) => console.log(msg),
    logging: false,
}

const sequelize = new Sequelize(postgresOptions)

async function postgresConnect() {
    try {
        await sequelize.authenticate()
        console.log('\x1b[36mPostgres connection has been established.\x1b[37m')
        return true
    } catch (error) {
        console.error(
            '\x1b[31mUnable to connect to the postgres  database: \x1b[37m',
            error,
        )
        return false
    }
}
async function mongodbConnect() {
    try {
        await mongoose.connect(env.MONGODB_CONNECT, {
            dbName: env.MONGODB_NAME,
        })
        console.log('\x1b[36mMongoDB Connection has been established.\x1b[37m')
        return true
    } catch (error) {
        console.error(
            '\x1b[31Unable to connect to the mongodb database: \x1b[37m',
            error,
        )
        return false
    }
}

export const database = {
    postgresConnect,
    mongodbConnect,
    sequelize,
}
