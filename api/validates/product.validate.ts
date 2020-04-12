import _ from 'lodash'

const validateProduct = async (req: any, res: any, next: any) => {
  try {
    const { name, image, restaurantId, price, categories } = req.body
    let errors: any = []
    if (_.isEmpty(_.trim(name)) || !name) {
      errors.push('name not empty')
    }
    if (_.isEmpty(_.trim(image)) || !image) {
      errors.push('image not empty')
    }
    if (_.isEmpty(_.trim(restaurantId)) || !restaurantId) {
      errors.push('restaurantId not empty')
    }
    if (_.isEmpty(_.trim(price)) || !price) {
      errors.push('price not empty')
    }
    if (_.isEmpty(_.trim(categories)) || !categories) {
      errors.push('categories not empty')
    }

    if (!!errors.length) {
      res.status(400).json(errors)
      return
    }
    next()
  } catch (error) {
    res.status(400).send(error.message)
    return
  }
}

export default validateProduct
