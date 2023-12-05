import { Sequelize, Options } from 'sequelize'
import { env } from '../env'

const databaseOptions: Options = {
    dialect: env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    // logging: (...msg) => console.log(msg),
    logging: false,
}

const sequelize = new Sequelize(databaseOptions)

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database: ', error)
    }
}

export const database = {
    connect,
    sequelize,
}
