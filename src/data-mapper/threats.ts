import { ThreatsRank } from '../enums/rank'
import { IThreatModel } from '../interfaces/threat'
import { ThreatsModel } from '../models/threatsModel'

class Threat {
    public name: string

    public rank: ThreatsRank

    public status: boolean

    public latitude: number

    public longitude: number

    constructor(
        data = {
            name: '',
            rank: ThreatsRank.Wolf,
            status: false,
            latitude: 0,
            longitude: 0,
        },
    ) {
        this.name = data.name
        this.rank = data.rank
        this.status = data.status
        this.latitude = data.latitude
        this.longitude = data.longitude
    }

    public async save() {
        const threat = ThreatsModel.build({
            name: this.name,
            rank: this.rank,
            status: this.status,
            latitude: this.latitude,
            longitude: this.longitude,
        })

        await threat.save()

        return threat.dataValues as IThreatModel
    }
}

export { Threat }
