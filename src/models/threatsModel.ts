import { DataTypes } from 'sequelize'
import { database } from '../database'

export const ThreatsModel = database.sequelize.define(
    'threats',
    {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        rank: DataTypes.CHAR,
        status: DataTypes.BOOLEAN,
        latitude: DataTypes.NUMBER,
        longitude: DataTypes.NUMBER,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: false,
    },
)
