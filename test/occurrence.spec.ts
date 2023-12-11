import { it, describe, expect, beforeEach } from 'vitest'
import request from 'supertest'

import app from '../src/app'
import { IOccurrence } from '../src/interfaces/occurrence'
import { HeroesRank } from '../src/enums/rank'
import { env } from '../src/env'

describe('Occurrence Controller', () => {
    let occurrence: IOccurrence
    let heroeMock: any

    beforeEach(() => {
        occurrence = {
            location: [
                {
                    lat: -5.82698775917404,
                    lng: -35.12383578405787,
                },
            ],
            dangerLevel: 'Wolf' as any,
            monsterName: 'HansLada',
            monster: {
                name: 'HansLada',
                url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Hans_Landa_IB_2009.jpg/225px-Hans_Landa_IB_2009.jpg',
                description:
                    'StandartenführerHansLandaisafictionalcharacterandthemainantagonistinthe2009QuentinTarantinofilmInglouriousBasterds.HeisportrayedbyAustrianactorChristophWaltz.',
            },
        }

        heroeMock = {
            name: 'Iron-Man',
            rank: HeroesRank.C,
            available: true,
            latitude: -23.676105964884176,
            longitude: -55.43210812419895,
        }
    })

    it('Should be able to create an threat occurrence', async () => {
        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.threat).toBeTruthy()
    })

    it('Should be able to create resolve Wolf threat occurrence', async () => {
        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.heroes.length).greaterThan(0)
    })

    it('Should be able to create resolve Tiger threat occurrence', async () => {
        heroeMock.rank = HeroesRank.B
        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        occurrence.dangerLevel = 'Tiger' as any
        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.heroes.length).greaterThan(0)
    })

    it('Should be able to create resolve Dragon threat occurrence', async () => {
        heroeMock.rank = HeroesRank.A
        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        occurrence.dangerLevel = 'Dragon' as any
        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.heroes.length).greaterThan(0)
    })

    it('Should be able to create resolve God threat occurrence', async () => {
        heroeMock.rank = HeroesRank.S
        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        occurrence.dangerLevel = 'God' as any
        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.heroes.length).greaterThan(0)
    })

    it('Should be able to send two down levels heroes to an threat occurrence', async () => {
        heroeMock = {
            name: 'Star-lord',
            rank: HeroesRank.A,
            available: true,
            latitude: -70.67610596488417,
            longitude: 44.43210812419895,
        }

        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        heroeMock = {
            name: 'Flash',
            rank: HeroesRank.A,
            available: true,
            latitude: -85.67610596488417,
            longitude: 41.43210812419895,
        }

        await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        occurrence.dangerLevel = 'God' as any
        occurrence.location = [
            {
                lat: -90.8269877591742,
                lng: 50.12383578405787,
            },
        ]

        const { statusCode, body } = await request(app)
            .post('/occurrence')
            .set('Authorization', env.APP_TOKEN)
            .send(occurrence)

        expect(statusCode).toEqual(200)
        expect(body.battle.heroes.length).greaterThan(1)
    })
})
