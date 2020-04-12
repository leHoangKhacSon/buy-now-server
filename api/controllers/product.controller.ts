import Product from '../models/product.model'

export const getAllProducts = async (req: any, res: any) => {
  try {
    const { restaurantId } = req.query
    if (!restaurantId) {
      res.status(400).send('Not have product')
    }

    const products = await Product.find({ restaurantId })

    if (products && !!products.length) {
      res.status(200).json(products)
      return
    }
    res.status(401).send('Not found')
    return
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const getProduct = async (req: any, res: any) => {
  try {
    const { id } = req.body
    const product = await Product.findOne({ _id: id })

    if (product) {
      res.status(200).json(product)
      return
    }
    res.status(404).send('Not found')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const createProduct = async (req: any, res: any) => {
  try {
    const { userId } = req
    const { name, image, price, categories, restaurantId } = req.body

    const newProduct = new Product({
      name,
      image,
      price,
      restaurantId,
      categories,
    })
    const result = await newProduct.save()

    if (result) {
      res.status(201).json(result)
      return
    }
    res.status(400).send('Created fail')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const removeProduct = async (req: any, res: any) => {
  try {
    const { id } = req.body
    const product = await Product.findOne({ _id: id })

    if (product) {
      await Product.deleteOne({ _id: id })
      res.status(200)
      return
    }
    res.status(404).send('Not found')
    return
  } catch (error) {
    res.status(400).send(error.message)
  }
}
