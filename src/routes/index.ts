import express from 'express'

import { heroesRouter } from './heroes'
import { authenticationRouter } from './authentication'
import { auth } from '../middlewares/auth'

const router = express.Router()

router.use(authenticationRouter)
router.use(auth)
router.use(heroesRouter)

export { router }
