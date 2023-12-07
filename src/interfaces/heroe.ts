import { HeroesRank } from '../enums/rank'

export interface IHeroe {
    name: string
    rank: HeroesRank
    available: boolean
    latitude: number
    longitude: number
}
