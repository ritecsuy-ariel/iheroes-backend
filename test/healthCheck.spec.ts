import { it, describe, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app'

describe('HealthCheck', () => {
    it('Should be able to healthCheck', async () => {
        const { statusCode } = await request(app).get('/healthCheck')

        expect(statusCode).toEqual(200)
    })
})
