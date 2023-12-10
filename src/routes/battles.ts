import express from 'express'

import BattlesController from '../controllers/battlesController'

const battlesRouter = express.Router()

battlesRouter.get('/battles', BattlesController.read)

export { battlesRouter }
