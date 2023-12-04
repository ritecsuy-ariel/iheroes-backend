import { ISignin, ISignup } from '../interfaces/authentication'
import { BusinessError } from '../controllers/error'

const data: ISignup[] = []

class AuthenticationService {
    public async signup(user: ISignup) {
        const exists = data.find((el) => el.email === user.email)

        if (exists) {
            throw new BusinessError('E-mail already in use.', 400)
        }

        data.push(user)

        return user
    }

    public async signin(user: ISignin) {
        const exists = data.find((el) => el.email === user.email)

        if (!exists) {
            throw new BusinessError('E-mail does not exist.', 400)
        }

        return exists
    }
}

export default new AuthenticationService()
