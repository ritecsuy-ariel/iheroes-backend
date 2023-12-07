import { HeroesRank } from '../enums/rank'
import { HeroesModel } from '../models/heroesModel'
import { IHeroe } from '../interfaces/heroe'

class Heroe {
    public name: string

    public rank: HeroesRank

    public available: boolean

    public latitude: number

    public longitude: number

    constructor(
        data = {
            name: '',
            rank: HeroesRank.C,
            available: true,
            latitude: 0,
            longitude: 0,
        },
    ) {
        this.name = data.name
        this.rank = data.rank
        this.available = data.available
        this.latitude = data.latitude
        this.longitude = data.longitude
    }

    public async save() {
        const heroe = HeroesModel.build({
            name: this.name,
            rank: this.rank,
            available: this.available,
            latitude: this.latitude,
            longitude: this.longitude,
        })

        await heroe.save()

        return heroe.dataValues as IHeroe
    }
}

export { Heroe }
