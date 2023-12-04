import express from 'express'
import AuthenticationController from '../controllers/authenticationController'

const authenticationRouter = express.Router()

authenticationRouter.post('/auth/signup', AuthenticationController.signup)

authenticationRouter.post('/auth/signin', AuthenticationController.signin)

export { authenticationRouter }
