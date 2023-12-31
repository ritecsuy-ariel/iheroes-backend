'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('heroes', [
            {
                name: 'Iron-Man',
                rank: 4,
                available: true,
                latitude: -7.676105964884176,
                longitude: -16.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Black-Panther',
                rank: 4,
                available: true,
                latitude: -2.173105924884176,
                longitude: 51.83230512419895,
                created_at: new Date(),
            },
            {
                name: 'Spider-Man',
                rank: 4,
                available: true,
                latitude: 27.176105964884176,
                longitude: 6.23210812419895,
                created_at: new Date(),
            },
            {
                name: 'Jean Grey',
                rank: 4,
                available: true,
                latitude: 32.27610596488417,
                longitude: 1.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Wolverine',
                rank: 4,
                available: true,
                latitude: 33.67610596488417,
                longitude: -6.42340812419895,
                created_at: new Date(),
            },
            {
                name: 'Superman',
                rank: 4,
                available: true,
                latitude: 65.67610596488417,
                longitude: -14.42340812419895,
                created_at: new Date(),
            },
            {
                name: 'Batman',
                rank: 4,
                available: true,
                latitude: 51.67610596488417,
                longitude: 4.42340812419895,
                created_at: new Date(),
            },
            {
                name: 'Black Widow',
                rank: 3,
                available: true,
                latitude: 91.27610596488417,
                longitude: -33.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Star-Lord',
                rank: 3,
                available: true,
                latitude: 86.47620596488417,
                longitude: -16.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Moon Knight',
                rank: 3,
                available: true,
                latitude: 23.676105964884176,
                longitude: -1.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Winter Soldier',
                rank: 3,
                available: true,
                latitude: -51.67610596488417,
                longitude: 78.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Capitain America',
                rank: 3,
                available: true,
                latitude: 2.676105964884176,
                longitude: 16.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Flash',
                rank: 3,
                available: true,
                latitude: 21.676105964884176,
                longitude: 9.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Robin',
                rank: 2,
                available: true,
                latitude: 87.27105964884176,
                longitude: 67.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Miles Morales',
                rank: 2,
                available: true,
                latitude: -12.676105964884176,
                longitude: 41.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Valkyrie',
                rank: 2,
                available: true,
                latitude: -7.676105964884176,
                longitude: -16.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Ant-Man',
                rank: 2,
                available: true,
                latitude: 12.676105964884176,
                longitude: 31.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Cyclops',
                rank: 2,
                available: true,
                latitude: 92.67610596488417,
                longitude: -78.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Doctor Strange',
                rank: 2,
                available: true,
                latitude: 10.67610596488417,
                longitude: -24.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Green Lantern',
                rank: 2,
                available: true,
                latitude: -44.67610596488417,
                longitude: 76.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Professor X',
                rank: 2,
                available: true,
                latitude: 1.67610596488417,
                longitude: 2.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Human Torch',
                rank: 2,
                available: true,
                latitude: 44.27610596488417,
                longitude: -30.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Nightwing',
                rank: 1,
                available: true,
                latitude: 10.67610596488417,
                longitude: -2.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Ghost Rider',
                rank: 1,
                available: true,
                latitude: -59.67610596488417,
                longitude: 60.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Daredevil',
                rank: 1,
                available: true,
                latitude: -39.67610596488417,
                longitude: -14.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Rorschach',
                rank: 1,
                available: true,
                latitude: 40.67610596488417,
                longitude: 90.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'The Comedian',
                rank: 1,
                available: true,
                latitude: -4.67610596488417,
                longitude: -92.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Hawkeye',
                rank: 1,
                available: true,
                latitude: -4.67610596488417,
                longitude: 32.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Alex Wilder',
                rank: 1,
                available: true,
                latitude: 23.67610596488417,
                longitude: -12.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Invisible Woman',
                rank: 1,
                available: true,
                latitude: -33.67610596488417,
                longitude: -42.43210812419895,
                created_at: new Date(),
            },
            {
                name: 'Swordsman',
                rank: 1,
                available: true,
                latitude: -81.67610596488417,
                longitude: 2.43210812419895,
                created_at: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('heroes', null, {})
    },
}
