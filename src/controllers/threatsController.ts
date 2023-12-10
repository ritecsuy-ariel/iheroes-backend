import { Request, Response } from 'express'

import { handleError } from './error'
import threatsService from '../services/threatsService'

class ThreatsController {
    public async read(req: Request, res: Response) {
        try {
            const { page } = req.query as any
            const threats = await threatsService.read(page)

            res.send(threats)
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }
}

export default new ThreatsController()
