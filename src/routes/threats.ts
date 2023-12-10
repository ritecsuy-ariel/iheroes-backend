import express from 'express'

import ThreatsController from '../controllers/threatsController'

const threatsRouter = express.Router()

threatsRouter.get('/threats', ThreatsController.read)

export { threatsRouter }
