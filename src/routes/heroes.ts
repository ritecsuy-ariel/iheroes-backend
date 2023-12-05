import express from 'express'

import HeroesController from '../controllers/heroesController'

const heroesRouter = express.Router()

heroesRouter.post('/heroes', HeroesController.create)
heroesRouter.get('/heroes', HeroesController.read)
heroesRouter.put('/heroes', HeroesController.update)
heroesRouter.delete('/heroes', HeroesController.delete)

export { heroesRouter }
