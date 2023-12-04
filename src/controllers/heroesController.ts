import { Request, Response } from 'express'

import HeroesService from '../services/heroesService'
import { IHeroe } from '../interfaces/heroe'

class HeroesController {
    public async create(req: Request, res: Response) {
        const heroe = await HeroesService.create({} as IHeroe)

        res.send(heroe)
    }

    public async read(req: Request, res: Response) {
        const heroes = await HeroesService.read(1)

        res.send(heroes)
    }

    public async update(req: Request, res: Response) {
        const heroe = await HeroesService.update({} as IHeroe)

        res.send(heroe)
    }

    public async delete(req: Request, res: Response) {
        const status = await HeroesService.delete(1)

        res.send(status)
    }
}

export default new HeroesController()
