export class BusinessError extends Error {
    public message: string
    public status: number

    constructor(message = '', status = 500) {
        super()
        this.message = message
        this.status = status
    }
}
