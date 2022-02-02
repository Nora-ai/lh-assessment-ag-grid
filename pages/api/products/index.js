import dbConnect from '../../../utils/dbConnect'
import Product from '../../../models/Product'

dbConnect();

export default async function ProductRequests(req, res) {
  const { method } =  req

  switch(method) {
    case 'GET':
      try {
        const products = await Product.find({})

        res.status(200).json({ success: true, data: products })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    case 'GET/ID':
      try {
        const { _id } = req.params
        const product = await Product.findById(_id)
        if (product) {
        return res.status(201).json({ success: true, data: product })
        }
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const product = await Product.create(req.body)

        res.status(201).json({ success: true, data: product })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
