export class PaginatorHelper {
    public limit = 10

    public offset: number

    constructor(page: number) {
        this.offset = page * this.limit - this.limit
    }
}
