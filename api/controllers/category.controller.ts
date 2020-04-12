import Category from '../models/category.model'

export const getAllCategories = async (req: any, res: any) => {
  try {
    const categories = await Category.find()

    if (categories) {
      res.status(200).json(categories)
      return
    }
    res.status(404).send('Not found')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const createCategory = async (req: any, res: any) => {
  try {
    const { name, image } = req.body
    const newCategory = new Category({ name, image })
    const result = await newCategory.save()

    if (result) {
      res.status(201).json(result)
      return
    }
    res.status(400).send('Created fail')
    return
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const removeCategory = async (req: any, res: any) => {
  try {
    const { id } = req.body
    const category = await Category.findOne({ _id: id })

    if (category) {
      await Category.deleteOne({ _id: id })
      res.status(200).send('Deleted')
    }
    res.status(404).send('Not found')
    return
  } catch (error) {
    res.status(400).send(error.message)
  }
}
