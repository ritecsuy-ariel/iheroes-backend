import { it, describe, expect, beforeAll } from 'vitest'
import request from 'supertest'
import app from '../src/app'
import { env } from '../src/env'

describe('Threats Controller', () => {
    beforeAll(() => {
        process.env.NODE_ENV = 'test'
    })

    it('Should be able to read unresolved threats', async () => {
        const { statusCode } = await request(app)
            .get('/threats')
            .set('Authorization', env.APP_TOKEN)

        expect(statusCode).toEqual(200)
    })

    it('Should be return error due invalid page', async () => {
        const { statusCode } = await request(app)
            .get('/threats?page=0')
            .set('Authorization', env.APP_TOKEN)

        expect(statusCode).toEqual(500)
    })
})
