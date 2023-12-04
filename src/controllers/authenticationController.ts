import { Request, Response } from 'express'

import AuthenticationService from '../services/authenticationService'
import { generateToken } from '../middlewares/auth'

class AuthenticationController {
    public async signup(req: Request, res: Response) {
        try {
            const user = await AuthenticationService.signup({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            const token = generateToken(user.email)

            res.send({ token })
        } catch (error: any) {
            res.status(error?.status || 500)
            res.send({ message: error?.message || 'Internal server error.' })
        }
    }

    public async signin(req: Request, res: Response) {
        try {
            const user = await AuthenticationService.signin({
                email: req.body.email,
                password: req.body.password,
            })

            const token = generateToken(user.email)

            res.send({ token })
        } catch (error: any) {
            res.status(error.status || 500)
            res.send({ message: error?.message || 'Internal server error.' })
        }
    }
}

export default new AuthenticationController()
