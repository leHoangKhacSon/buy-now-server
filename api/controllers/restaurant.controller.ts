import _ from 'lodash'

import Restaurants from '../models/restaurants.model'

export const getAllRestaurant = async (req: any, res: any) => {
  try {
    const { category } = req.query
    if (category) {
      const restaurants = await Restaurants.find()
      const result = _.filter(restaurants, ({ categories }: any) => _.indexOf(categories, category) !== -1)
      if (result.length) {
        res.status(200).json(result)
        return
      }
      res.status(404).send('Not found')
      return
    }
    const restaurants = await Restaurants.find()
    res.status(200).json(restaurants)
    return
  } catch (error) {
    res.status(404).send(error.message)
    return
  }
}

export const getRestaurantById = async (req: any, res: any) => {
  try {
    const { id } = req.body
    const restaurant = await Restaurants.findOne({ id })
    if (restaurant) {
      res.status(200).json(restaurant)
      return
    }
    res.status(404).send('Not found')
    return
  } catch (error) {
    res.status(400).send(error.message)
    return
  }
}

export const createRestaurant = async (req: any, res: any) => {
  try {
    const {
      user: { userId },
    } = req
    if (userId) {
      const { name, address, image, description, status, openTime, categories } = req.body
      const newRestaurant = new Restaurants({
        name,
        address,
        image,
        description,
        status,
        openTime,
        categories,
        userId,
      })

      const saveRestaurant = await newRestaurant.save()

      if (saveRestaurant) {
        res.status(201).send(saveRestaurant)
        return
      }
      res.status(400).send('Saved fail')
      return
    }
    res.status(404).send('Not found')
    return
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const removeRestaurant = async (req: any, res: any) => {
  try {
    const { id } = req.body
    const restaurant = await Restaurants.find({ id })

    if (restaurant) {
      Restaurants.deleteOne({ id })
      return
    }
    res.status(404).send('Not found')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
