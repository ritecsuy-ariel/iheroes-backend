import jwt from 'jsonwebtoken'
import { readFileSync } from 'fs'
import { Request, Response, NextFunction } from 'express'

const privateKey = readFileSync('secret.key')

export function generateToken(email: string) {
    const token = jwt.sign({ email }, privateKey, {
        expiresIn: 60 * 60,
    })

    return `Bearer ${token}`
}

export function auth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
        throw new Error('Token Invalido')
    }

    const decoded = jwt.verify(req.headers.authorization, privateKey)

    console.log(decoded)

    next()
}
