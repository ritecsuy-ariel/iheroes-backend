import { Request, Response } from 'express'
import { IOccurrence } from '../interfaces/occurrence'

class OccurrenceController {
    public async create(req: Request, res: Response) {
        try {
            console.log('An occurrence is being resolved')
            const occurrence = req.body as IOccurrence
            console.log(occurrence)
            // find heroes
            // create battle
            // schedule battle end
            // respond socket.io
            res.send({ status: true }).status(200)
        } catch (error: any) {
            console.log(error)
            res.status(error?.status || 500)
            return res.send({
                message: error?.message || 'Internal server error.',
            })
        }
    }
}

export default new OccurrenceController()
