import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/user.model'
import { UserType } from '../../types/user.type'

export const index = async (req: any, res: any) => {
  const users = await User.find()
  res.json(users)
}

export const register = async (req: any, res: any) => {
  const { email, password, phone, avatar }: UserType = req.body
  const findUser = await User.findOne({ email })
  // check user in database
  if (findUser) {
    res.status(401).send('Email existed')
    return
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  const newUser: any = new User({
    email,
    password: hashPassword,
    phone,
    avatar,
  })

  try {
    const saveNewUser = await newUser.save()
    const token = jwt.sign({ userId: saveNewUser.id }, process.env.SECRET_KEY)
    res.status(201).send({
      userId: saveNewUser.id,
      token,
    })
  } catch (error) {
    res.status(401).send(error.message)
  }
}

export const login = async (req: any, res: any) => {
  const { email, password } = req.body
  try {
    const user: any = await User.findOne({ email })

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password)
      if (checkPassword) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY)
        res.status(200).json({
          userId: user._id,
          token,
        })
        return
      }
      res.status(400).send('Password wrong')
      return
    }
    res.status(404).send('Not found account')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
