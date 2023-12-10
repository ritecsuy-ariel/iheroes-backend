import { Request, Response } from 'express'
import { scheduleJob } from 'node-schedule'
import { IOccurrence } from '../interfaces/occurrence'
import { handleError } from './error'
import OccurrenceService from '../services/occurrenceService'
import HeroesService from '../services/heroesService'

class OccurrenceController {
    public async create(req: Request, res: Response) {
        try {
            const occurrence = req.body as IOccurrence

            const battle = await OccurrenceService.create(occurrence)

            const startTime = new Date(Date.now() + battle.duration)

            scheduleJob(startTime, async () => {
                const heroes = battle.heroes.map((el) => el.id)

                const data: any = { available: true }
                await HeroesService.updateMany(data, heroes)
            })

            res.send({ battle })
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }
}

export default new OccurrenceController()
