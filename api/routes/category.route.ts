import express from 'express'

import { getAllCategories, createCategory, removeCategory } from '../controllers/category.controller'
import checkToken from '../middlewares/checkToken'
import protectedRoute from '../middlewares/protectedRoute'
import validateCategory from '../validates/category.validate'

const router = express.Router()

router.get('/', checkToken, protectedRoute, getAllCategories)
router.post('/', checkToken, protectedRoute, validateCategory, createCategory)
router.delete('/', checkToken, protectedRoute, removeCategory)

export default router
