import { it, describe, beforeEach, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app'

import { HeroesRank } from '../src/enums/rank'
import { IHeroe } from '../src/interfaces/heroe'
import { ISignin, ISignup } from '../src/interfaces/authentication'
import { env } from '../src/env'

describe('Heroes routes', () => {
    let heroeMock: IHeroe

    beforeEach(() => {
        heroeMock = {
            name: 'Iron-Man',
            rank: HeroesRank.S,
            available: true,
            latitude: -23.676105964884176,
            longitude: -55.43210812419895,
        }
    })

    it('Should be able to create a heroe', async () => {
        const { statusCode, body } = await request(app)
            .post('/heroes')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        expect(statusCode).toEqual(200)
        expect(body.heroe).toBeTruthy()
    })

    it('Should reject the request for missing token', async () => {
        const { statusCode } = await request(app)
            .post('/heroes')
            .send(heroeMock)

        expect(statusCode).toEqual(403)
    })

    it('Should reject the request for invalid token', async () => {
        const { statusCode } = await request(app)
            .post('/heroes')
            .set('Authorization', 'Bearer ey23200a')
            .send(heroeMock)

        expect(statusCode).toEqual(403)
    })

    it('Should be able to read heroes list.', async () => {
        const { statusCode, body } = await request(app)
            .get('/heroes')
            .set('Authorization', env.APP_TOKEN)

        expect(statusCode).toEqual(200)
        expect(body).toBeTruthy()
    })

    it('Should respond an error due invalid page.', async () => {
        const { statusCode } = await request(app)
            .get('/heroes?page=0')
            .set('Authorization', env.APP_TOKEN)

        expect(statusCode).toEqual(500)
    })

    it('Should be able to update a heroe.', async () => {
        heroeMock.name = 'Jessica Jones'
        heroeMock.rank = HeroesRank.A
        const { statusCode, body } = await request(app)
            .put('/heroes/1')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        expect(statusCode).toEqual(200)
        expect(body.name).toEqual('Jessica Jones')
        expect(body.rank).toEqual(HeroesRank.A)
    })

    it('Should return an error due required properties.', async () => {
        heroeMock.name = null as any
        const { statusCode } = await request(app)
            .put('/heroes/1')
            .set('Authorization', env.APP_TOKEN)
            .send(heroeMock)

        expect(statusCode).toEqual(500)
    })

    it('Should be able to delete a heroe.', async () => {
        const { statusCode, body } = await request(app)
            .delete('/heroes/1')
            .set('Authorization', env.APP_TOKEN)

        expect(statusCode).toEqual(200)
        expect(body.status).toEqual(true)
    })
})
