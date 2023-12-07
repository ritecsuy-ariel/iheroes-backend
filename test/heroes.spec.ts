import { it, describe, beforeEach, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { execSync } from 'node:child_process'

import app from '../src/app'
import { HeroesRank } from '../src/enums/rank'
import { IHeroe } from '../src/interfaces/heroe'
import { ISignin, ISignup } from '../src/interfaces/authentication'

describe('Heroes routes', () => {
    let heroeMock: IHeroe
    let signup: ISignup
    let signin: ISignin

    // beforeAll(() => {
    //     process.env.NODE_ENV = 'test'
    //     execSync(
    //         'npx sequelize-cli db:migrate --name 20231205174035-create-users.js',
    //     )

    //     execSync(
    //         'npx sequelize-cli db:migrate --name 20231206000802-create-heroes.js',
    //     )
    // })

    beforeEach(() => {
        signup = {
            name: 'Joana Doe',
            email: 'joanadoe@example.com',
            password: '754321',
        }

        signin = {
            email: 'joanadoe@example.com',
            password: '754321',
        }

        heroeMock = {
            name: 'Iron-Man',
            rank: HeroesRank.S,
            available: true,
            latitude: -23.676105964884176,
            longitude: -55.43210812419895,
        }
    })

    // afterAll(() => {
    //     execSync(
    //         'npx sequelize-cli db:migrate:undoq --name 20231205174035-create-users.js',
    //     )

    //     execSync(
    //         'npx sequelize-cli db:migrate:undo --name 20231206000802-create-heroes.js',
    //     )
    // })

    it('Should be able to create a heroe', async () => {
        const signupResponse = await request(app)
            .post('/auth/signup')
            .send(signup)

        const { token } = signupResponse.body

        const { statusCode, body } = await request(app)
            .post('/heroes')
            .set('Authorization', token)
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
})
