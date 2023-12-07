'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('heroes', {
            id: {
                field: 'id',
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            rank: {
                type: Sequelize.DataTypes.CHAR(1),
                allowNull: false,
            },
            available: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
            },
            latitude: {
                // 53.51067545719607
                // 52.63679543492298
                // -23.676105964884176
                type: Sequelize.DataTypes.FLOAT(4, 16),
                allowNull: false,
            },
            longitude: {
                // -2.3606298311555145
                // 13.451787368150848
                // -55.43210812419895
                type: Sequelize.DataTypes.FLOAT(4, 16),
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
        await queryInterface.dropTable('heroes')
    },
}
