import express from 'express'

import { getAllProducts, getProduct, createProduct, removeProduct } from '../controllers/product.controller'
import checkToken from '../middlewares/checkToken'
import protectedRoute from '../middlewares/protectedRoute'
import validateProduct from '../validates/product.validate'

const router = express.Router()

router.get('/', checkToken, protectedRoute, getAllProducts)
router.get('/:id', checkToken, protectedRoute, getProduct)
router.post('/', checkToken, protectedRoute, validateProduct, createProduct)
router.delete('/', checkToken, protectedRoute, removeProduct)

export default router
