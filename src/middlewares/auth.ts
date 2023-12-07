import jwt, { JwtPayload } from 'jsonwebtoken'
import { readFileSync } from 'fs'
import { Request, Response, NextFunction } from 'express'
import { BusinessError } from '../controllers/error'

const privateKey = readFileSync('secret.key')

interface IJwtPayload extends JwtPayload {
    email: string
}

export function generateToken(email: string) {
    const token = jwt.sign({ email }, privateKey, {
        expiresIn: 60 * 60,
    })

    return `Bearer ${token}`
}

export function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers?.authorization

        if (!authHeader) {
            throw new BusinessError('jwt not found!', 403)
        }

        const [, token] = authHeader.split(' ')
        const decoded = jwt.verify(token, privateKey) as IJwtPayload

        req.body.bearer = decoded.email
    } catch (error: any) {
        res.status(error?.status || 403)
        return res.send({ message: error?.message })
    }
    next()
}
