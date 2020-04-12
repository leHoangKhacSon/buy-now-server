import express from 'express'

import { index, register, login } from '../controllers/user.controller'
import { checkInfo } from '../validates/user.validate'
import checkToken from '../middlewares/checkToken'
import protectedRoute from '../middlewares/protectedRoute'

const router = express.Router()

router.get('/', checkToken, protectedRoute, index)

router.post('/register', checkInfo, register)
router.post('/login', checkInfo, login)

export default router
