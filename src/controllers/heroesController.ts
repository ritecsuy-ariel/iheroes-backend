import { Request, Response } from 'express'

import HeroesService from '../services/heroesService'
import { HeroesRank } from '../enums/rank'
import { handleError } from './error'

class HeroesController {
    public async create(req: Request, res: Response) {
        try {
            const help = {
                name: req.body.name,
                rank: req.body.rank as HeroesRank,
                available: true,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }

            const heroe = await HeroesService.create(help)

            res.send({ heroe })
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }

    public async read(req: Request, res: Response) {
        try {
            const { page, available } = req.query as any
            const heroes = await HeroesService.read(page, available)

            res.send(heroes)
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params as any
            const help = {
                name: req.body.name,
                rank: req.body.rank as HeroesRank,
                available: true,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }

            const heroe = await HeroesService.update(help, id)

            res.send(heroe)
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params as any
            const status = await HeroesService.delete(id)

            res.send({ status: status === 1 })
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }
}

export default new HeroesController()
