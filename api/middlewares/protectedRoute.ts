const protectedRoute = async (req: any, res: any, next: any) => {
  if (req.user) {
    return next()
  }

  res.status(401).send('Unauthorized')
}

export default protectedRoute
