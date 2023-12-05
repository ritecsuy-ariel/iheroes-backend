import { it, describe, beforeEach, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { execSync } from 'node:child_process'

import app from '../src/app'
import { ISignin, ISignup } from '../src/interfaces/authentication'

describe('Authentication routes', () => {
    let signup: ISignup
    let signin: ISignin

    beforeAll(() => {
        process.env.NODE_ENV = 'test'
        execSync('npx sequelize-cli db:migrate:undo')
        execSync('npx sequelize-cli db:migrate')
    })

    beforeEach(async () => {
        signup = {
            name: 'Ariel Evangelista',
            email: 'ariel.evangelista@outlook.com',
            password: '1234',
        }

        signin = {
            email: 'ariel.evangelista@outlook.com',
            password: '1234',
        }
    })

    afterAll(() => {
        execSync('npx sequelize-cli db:migrate:undo')
    })

    it('Should be able to signup', async () => {
        const { statusCode } = await request(app)
            .post('/auth/signup')
            .send(signup)

        expect(statusCode).toEqual(200)
    })

    it('Should response that email already exist', async () => {
        const { body, statusCode } = await request(app)
            .post('/auth/signup')
            .send(signup)

        expect(statusCode).toEqual(400)
        expect(body.message).toEqual('E-mail already in use.')
    })

    it('Should be able to signin', async () => {
        const { statusCode } = await request(app)
            .post('/auth/signin')
            .send(signin)

        expect(statusCode).toEqual(200)
    })

    it('Should respond that email does not exist', async () => {
        signup.email = 'foo'
        const { body, statusCode } = await request(app)
            .post('/auth/signin')
            .send(signup)

        expect(statusCode).toEqual(400)
        expect(body.message).toEqual('E-mail does not exist.')
    })

    it('Should respond that password does not match', async () => {
        signup.password = 'foo'
        const { body, statusCode } = await request(app)
            .post('/auth/signin')
            .send(signup)

        expect(statusCode).toEqual(401)
        expect(body.message).toEqual('Password does not match.')
    })
})
