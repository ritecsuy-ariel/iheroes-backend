import battleSchema from '../schemas/battleSchema'
import { IBattle } from '../interfaces/battle'

class BattlesService {
    public async read(page = 1): Promise<IBattle[]> {
        const battles: any[] = await battleSchema.findBattle(page)

        return battles as IBattle[]
    }
}

export default new BattlesService()
