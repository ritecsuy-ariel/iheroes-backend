import { Request, Response } from 'express'

import AuthenticationService from '../services/authenticationService'
import { generateToken } from '../middlewares/auth'
import { handleError } from './error'

class AuthenticationController {
    public async signup(req: Request, res: Response) {
        try {
            const user = await AuthenticationService.signup({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            const token = generateToken(req.body.email)

            return res.send({ token, user })
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }

    public async signin(req: Request, res: Response) {
        try {
            const user = await AuthenticationService.signin({
                email: req.body.email,
                password: req.body.password,
            })

            const token = generateToken(req.body.email)

            res.send({ token, user })
        } catch (error: any) {
            return handleError(req, res, error)
        }
    }
}

export default new AuthenticationController()
