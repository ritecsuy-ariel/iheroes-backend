import express from 'express'

import { authenticationRouter } from './authentication'
import { auth } from '../middlewares/auth'
import { heroesRouter } from './heroes'
import { occurrenceRouter } from './occurrence'
import { threatsRouter } from './threats'
import { battlesRouter } from './battles'

const router = express.Router()

router.use(authenticationRouter)
router.use(auth)
router.use(heroesRouter)
router.use(occurrenceRouter)
router.use(threatsRouter)
router.use(battlesRouter)

export { router }
