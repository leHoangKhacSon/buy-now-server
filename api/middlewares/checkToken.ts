import jwt from 'jsonwebtoken'

const checkToken = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization

    jwt.verify(token, process.env.SECRET_KEY, (error: any, payload: any) => {
      if (payload) {
        req.user = payload
        next()
      } else {
        res.status(401).send('Unauthorized')
      }
    })
  } catch (error) {
    res.status(401).send('No token provided')
  }
}

export default checkToken
