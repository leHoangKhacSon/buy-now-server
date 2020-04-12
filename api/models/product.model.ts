import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  }
})

const Product = mongoose.model('Product', productSchema, 'products')

export default Product
