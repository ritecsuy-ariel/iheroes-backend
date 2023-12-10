import { ThreatsRank } from '../enums/rank'

export interface IThreat {
    name: string
    rank: ThreatsRank
    status: boolean
    latitude: number
    longitude: number
}

export interface IThreatModel {
    id: number
    name: string
    rank: number
    status: boolean
    latitude: number
    longitude: number
    created_at: Date
}
