import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'

import { UserModel } from '../models/users'

class User {
    public id: string

    public name: string

    public email: string

    private password: string

    private password_hash: string

    constructor(
        data = {
            name: '',
            email: '',
            password: '',
            password_hash: '',
        },
    ) {
        this.id = randomUUID()
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.password_hash = data.password_hash
    }

    public async hash() {
        this.password_hash = await bcrypt.hash(this.password, 6)
    }

    public async save() {
        const model = {
            id: this.id,
            name: this.name,
            email: this.email,
            password_hash: this.password_hash,
        }

        const userModel = UserModel.build(model)

        await userModel.save()

        delete userModel.dataValues.password_hash

        return userModel.dataValues
    }
}

export { User }
