import { it, describe, beforeEach, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app'
import { ISignin, ISignup } from '../src/interfaces/authentication'

describe('Authentication routes', () => {
    let signup: ISignup
    let signin: ISignin

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
})
