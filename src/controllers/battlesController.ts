import { Request, Response } from 'express'

import { handleError } from './error'
import BattlesService from '../services/battlesService'

class BattlesController {
    public async read(req: Request, res: Response) {
        try {
            const { page } = req.query as any
            const battles = await BattlesService.read(page)

            res.send(battles)
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }
}

export default new BattlesController()
