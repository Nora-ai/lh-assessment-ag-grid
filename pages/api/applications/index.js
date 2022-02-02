import dbConnect from '../../../utils/dbConnect'
import Application from '../../../models/Application'
//import Cohort from '../../../models/Cohort'
//import Product from '../../../models/Product'

dbConnect();

export default async function AppRequests(req, res) {
  const { method } =  req

  switch(method) {
    case 'GET':
      try {
        const applications = await Application.find({})//.populate('cohort').populate('products')
    
        res.status(200).json({ success: true, data: applications })
      } catch(error) {
        //console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const application = await Application.create(req.body)

        res.status(201).json({ success: true, data: application })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
