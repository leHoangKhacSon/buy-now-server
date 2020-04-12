import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'

import checkConnection from './database'
import apiUserRoute from '../api/routes/user.route'
import apiRestaurantRoute from '../api/routes/restaurant.route'
import apiProductRoute from '../api/routes/product.route'
import apiCategoryRoute from '../api/routes/category.route'

dotenv.config()

const app = express()

app.use(checkConnection())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/users', apiUserRoute)
app.use('/restaurants', apiRestaurantRoute)
app.use('/products', apiProductRoute)
app.use('/categories', apiCategoryRoute)

export default app
