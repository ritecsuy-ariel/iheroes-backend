import express from 'express'

import { heroesRouter } from './heroes'
import { authenticationRouter } from './authentication'

const router = express.Router()

router.use(heroesRouter)
router.use(authenticationRouter)

export { router }
