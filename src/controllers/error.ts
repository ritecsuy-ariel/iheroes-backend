import { Request, Response } from 'express'

export class BusinessError extends Error {
    public message: string
    public status: number

    constructor(message = '', status = 500) {
        super()
        this.message = message
        this.status = status
    }
}

export async function handleError(req: Request, res: Response, error: any) {
    console.log(error)
    res.status(error?.status || 500)
    return res.send({
        message: error?.message,
    })
}
