import mongoose from 'mongoose'

import { IBattle } from '../interfaces/battle'
import { PaginatorHelper } from '../shared/paginatorHelper'

const battleSchema = new mongoose.Schema<IBattle>(
    {},
    { strict: false, timestamps: true },
)

const Battles = mongoose.model('battles', battleSchema)

class BattlesDTO {
    public async saveBattle(battle: IBattle): Promise<IBattle> {
        return Battles.create(battle)
    }

    public async findBattle(page = 1) {
        const paginatorHelper = new PaginatorHelper(page)

        return Battles.find()
            .skip(paginatorHelper.offset)
            .limit(paginatorHelper.limit)
    }
}

export default new BattlesDTO()
