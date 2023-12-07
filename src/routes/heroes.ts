import express from 'express'

import HeroesController from '../controllers/heroesController'

const heroesRouter = express.Router()

heroesRouter.post('/heroes', HeroesController.create)
heroesRouter.get('/heroes', HeroesController.read)
heroesRouter.put('/heroes/:id', HeroesController.update)
heroesRouter.delete('/heroes/:id', HeroesController.delete)

export { heroesRouter }
