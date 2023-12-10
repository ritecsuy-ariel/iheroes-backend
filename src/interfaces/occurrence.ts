import { ThreatsRank } from '../enums/rank'

interface ILocation {
    lat: number
    lng: number
}

interface IMonster {
    name: string
    url: string
    description: string
}

export interface IOccurrence {
    location: ILocation[]
    dangerLevel: ThreatsRank
    monsterName: string
    monster: IMonster
}
