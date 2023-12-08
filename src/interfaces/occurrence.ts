interface ILocation {
    lat: string
    lng: string
}

interface IMonster {
    name: string
    url: string
    description: string
}

export interface IOccurrence {
    location: ILocation[]
    dangerLevel: string
    monsterName: string
    monster: IMonster
}
