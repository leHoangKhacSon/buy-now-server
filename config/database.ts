import mongoose from 'mongoose'

const checkConnection = () => {
  return (req: any, res: any, next: any) => {
    mongoose.connect(process.env.DATABASE_URL || process.env.MONGO_CLIENT_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    mongoose.set('useFindAndModify', false)
    mongoose.Promise = global.Promise
    mongoose.connection.on('error', error => {
      console.log(error.message)
    })
    next()
  }
}

export default checkConnection
