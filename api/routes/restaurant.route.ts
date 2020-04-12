import express from 'express'

import { getAllRestaurant, getRestaurantById, createRestaurant } from '../controllers/restaurant.controller'
import checkToken from '../middlewares/checkToken'
import protectedRoute from '../middlewares/protectedRoute'
import validateRestaurant from '../validates/restaurant.validate'

const router = express.Router()

router.get('/', getAllRestaurant)
router.get('/:id', getRestaurantById)
router.post('/', checkToken, protectedRoute, validateRestaurant, createRestaurant)

export default router
