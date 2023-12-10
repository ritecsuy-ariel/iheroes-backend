import { Threat } from '../data-mapper/threats'
import { IThreat, IThreatModel } from '../interfaces/threat'
import { ThreatsModel } from '../models/threatsModel'
import { PaginatorHelper } from '../shared/paginatorHelper'

class ThreatsService {
    public async create(data: IThreat): Promise<IThreatModel> {
        const threat = new Threat(data)

        const saveThreat = await threat.save()

        return saveThreat
    }

    public async read(page = 1) {
        const paginatorHelper = new PaginatorHelper(page)

        const threats: any[] = await ThreatsModel.findAll({
            where: {
                status: false,
            },
            limit: paginatorHelper.limit,
            offset: paginatorHelper.offset,
            order: [['id', 'ASC']],
        })

        return threats as IThreatModel[]
    }
}

export default new ThreatsService()
