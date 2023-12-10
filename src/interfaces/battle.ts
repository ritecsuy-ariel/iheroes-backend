import { IHeroeModel } from './heroe'
import { IThreat } from './threat'

export interface IBattle {
    duration: number
    heroes: IHeroeModel[]
    threat: IThreat
}
