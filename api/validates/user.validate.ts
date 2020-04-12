export const checkInfo = (req: any, res: any, next: any) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(410).json({
      message: 'Email or password not provider',
    })
    return
  }

  if (email.trim().length < 6 || password.trim().length < 6) {
    res.status(410).json({
      message: 'Email and password at least 6 characters',
    })
    return
  }

  next()
}
