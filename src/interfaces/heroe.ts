import { HeroesRank } from '../enums/rank'

export interface IHeroe {
    name: string
    rank: HeroesRank
    available: boolean
    latitude: number
    longitude: number
}

export interface IHeroeModel {
    id: number
    name: string
    rank: number
    available: boolean
    latitude: number
    longitude: number
    created_at: Date
}
