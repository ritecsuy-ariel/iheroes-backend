import { Op } from 'sequelize'
import { Heroe } from '../data-mapper/heroes'
import { IHeroe } from '../interfaces/heroe'
import { HeroesModel } from '../models/heroesModel'
import { PaginatorHelper } from '../shared/paginatorHelper'

class HeroesService {
    public async create(data: IHeroe): Promise<IHeroe> {
        const heroe = new Heroe(data)

        const savedHeroe = await heroe.save()

        return savedHeroe
    }

    public async read(page = 1, available = true): Promise<IHeroe[]> {
        const paginatorHelper = new PaginatorHelper(page)

        const heroes = await HeroesModel.findAll({
            where: {
                available,
            },
            limit: paginatorHelper.limit,
            offset: paginatorHelper.offset,
            order: [['id', 'ASC']],
        })

        return heroes as any
    }

    public async update(data: IHeroe, id: number): Promise<IHeroe> {
        await HeroesModel.update(data, {
            where: {
                id,
            },
        })

        return HeroesModel.findOne({
            where: {
                id,
            },
        }) as any
    }

    public async updateMany(data: IHeroe, ids: number[]): Promise<void> {
        await HeroesModel.update(data, {
            where: {
                id: {
                    [Op.in]: ids,
                },
            },
        })
    }

    public async delete(id: number): Promise<number> {
        return HeroesModel.destroy({
            where: {
                id,
            },
        })
    }
}

export default new HeroesService()
