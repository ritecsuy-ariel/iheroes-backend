'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                field: 'id',
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                field: 'email',
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                field: 'password_hash',
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                field: 'created_at',
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.DataTypes.NOW,
            },
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users')
    },
}
