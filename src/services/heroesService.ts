import { IHeroe } from '../interfaces/heroe'

class HeroesService {
    public async create(heroe: IHeroe): Promise<IHeroe> {
        return {} as IHeroe
    }

    public async read(page: number): Promise<IHeroe[]> {
        return []
    }

    public async update(heroe: IHeroe): Promise<IHeroe> {
        return {} as IHeroe
    }

    public async delete(id: number): Promise<boolean> {
        if (id) {
            return true
        }

        return false
    }
}

export default new HeroesService()
