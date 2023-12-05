import { DataTypes } from 'sequelize'
import { database } from '../database'

export const UserModel = database.sequelize.define(
    'users',
    {
        id: {
            field: 'id',
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: false,
    },
)
