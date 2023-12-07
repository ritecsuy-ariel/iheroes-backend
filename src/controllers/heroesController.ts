import { Request, Response } from 'express'

import HeroesService from '../services/heroesService'
import { HeroesRank } from '../enums/rank'

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
            console.log(error)
            res.status(error?.status || 500)
            return res.send({
                message: error?.message || 'Internal server error.',
            })
        }
    }

    public async read(req: Request, res: Response) {
        try {
            const { page } = req.query as any
            const heroes = await HeroesService.read(page)

            res.send(heroes)
        } catch (error: any) {
            console.log(error)
            res.status(error?.status || 500)
            return res.send({
                message: error?.message || 'Internal server error.',
            })
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
            console.log(error)
            res.status(error?.status || 500)
            return res.send({
                message: error?.message || 'Internal server error.',
            })
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params as any
        const status = await HeroesService.delete(id)

        res.send({ status: status === 1 })
    }
}

export default new HeroesController()
