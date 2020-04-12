import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  openTime: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

const Restaurants = mongoose.model('Restaurants', restaurantSchema, 'restaurants')

export default Restaurants
