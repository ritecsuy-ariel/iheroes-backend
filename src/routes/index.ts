import express from 'express'

import { authenticationRouter } from './authentication'
import { occurrenceRouter } from './occurrence'
import { auth } from '../middlewares/auth'
import { heroesRouter } from './heroes'

const router = express.Router()

router.use(authenticationRouter)
router.use(occurrenceRouter)
router.use(auth)
router.use(heroesRouter)

export { router }
