import { it, describe, expect, beforeAll } from 'vitest'
import request from 'supertest'
import app from '../src/app'

describe('HealthCheck', () => {
    beforeAll(() => {
        process.env.NODE_ENV = 'test'
    })

    it('Should be able to healthCheck', async () => {
        const { statusCode } = await request(app).get('/healthCheck')

        expect(statusCode).toEqual(200)
    })
})
