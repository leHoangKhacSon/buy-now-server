import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
})

const User = mongoose.model('User', userSchema, 'users')

export default User
