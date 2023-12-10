import { Op } from 'sequelize'

import BattlesDTO from '../schemas/battleSchema'
import ThreatsService from './threatsService'
import HeroesService from './heroesService'
import { HeroesModel } from '../models/heroesModel'
import { IOccurrence } from '../interfaces/occurrence'
import { IThreat } from '../interfaces/threat'
import { IHeroeModel } from '../interfaces/heroe'
import { ThreatsRank } from '../enums/rank'
import { IBattle } from '../interfaces/battle'

interface IHeroesDistance {
    heroe: IHeroeModel
    distance: number
}

class OccurrenceService {
    public async create(occurrence: IOccurrence): Promise<IBattle> {
        const heroes = await HeroesModel.findAll({
            where: {
                available: true,
                rank: {
                    [Op.in]: [
                        Number(ThreatsRank[occurrence.dangerLevel]) - 1,
                        ThreatsRank[occurrence.dangerLevel],
                    ],
                },
            },
        })

        const threat = {
            name: occurrence.monsterName,
            rank: ThreatsRank[occurrence.dangerLevel] as any,
            status: false,
            latitude: occurrence.location[0].lat,
            longitude: occurrence.location[0].lng,
        } as IThreat

        if (heroes.length <= 0) {
            await ThreatsService.create(threat)
            return {
                duration: 0,
                heroes: [],
                threat,
            }
        }

        const heroesDistance = this.getHeroesDistance(heroes, occurrence)

        const heroesToFight = this.selectHeroes(heroesDistance, occurrence)

        const duration = this.getDurationInMilliseconds(occurrence)

        const battle = {
            duration,
            heroes: heroesToFight,
            threat,
        }

        const ids = battle.heroes.map((el) => el.id)

        const data: any = { available: false }
        await HeroesService.updateMany(data, ids)

        return BattlesDTO.saveBattle(battle)
    }

    private getHeroesDistance(
        heroes: any[],
        occurrence: IOccurrence,
    ): IHeroesDistance[] {
        const heroesDistance: any[] = []
        heroes.forEach((heroe) => {
            let x = occurrence.location[0].lat - heroe.dataValues.latitude
            let y = occurrence.location[0].lng - heroe.dataValues.longitude
            x = x < 0 ? x * -1 : x
            y = y < 0 ? y * -1 : y
            const distance = x + y

            heroesDistance.push({
                heroe: heroe.dataValues,
                distance,
            })
        })

        return this.sortDistance(heroesDistance)
    }

    private sortDistance(heroes: any[]): IHeroesDistance[] {
        const ordered = []

        while (heroes.length > 0) {
            let minimum = [5000, 0]
            heroes.forEach((el, i) => {
                if (el.distance < minimum[0]) {
                    minimum = [el.distance, i]
                }
            })

            ordered.push(heroes[minimum[1]])
            heroes.splice(minimum[1], 1)
        }

        return ordered
    }

    private selectHeroes(
        heroesDistance: IHeroesDistance[],
        occurrence: IOccurrence,
    ): IHeroeModel[] {
        if (
            Number(ThreatsRank[occurrence.dangerLevel]) >
            heroesDistance[0].heroe.rank
        ) {
            if (
                Number(ThreatsRank[occurrence.dangerLevel]) >
                heroesDistance[1].heroe.rank
            ) {
                return [heroesDistance[0].heroe, heroesDistance[1].heroe]
            } else {
                return [heroesDistance[1].heroe]
            }
        } else {
            return [heroesDistance[0].heroe]
        }
    }

    private getDurationInMilliseconds(occurrence: IOccurrence): number {
        let duration = 0

        function getRandomInt(min: number, max: number) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        switch (Number(ThreatsRank[occurrence.dangerLevel])) {
            case ThreatsRank.God:
                duration = 1000 * 60 * getRandomInt(5, 10)
                break
            case ThreatsRank.Dragon:
                duration = 1000 * 60 * getRandomInt(2, 5)
                break
            case ThreatsRank.Tiger:
                duration = 1000 * getRandomInt(10, 20)
                break
            case ThreatsRank.Wolf:
                duration = 1000 * getRandomInt(1, 2)
                break
        }

        return duration
    }
}

export default new OccurrenceService()
