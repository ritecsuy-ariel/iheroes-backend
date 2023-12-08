import express from 'express'

import OccurrenceController from '../controllers/occurrenceController'

const occurrenceRouter = express.Router()

occurrenceRouter.post('/occurrence', OccurrenceController.create)

export { occurrenceRouter }
