import dbConnect from '../../../utils/dbConnect'
import Cohort from '../../../models/Cohort'

dbConnect();

export default async function CohortRequests(req, res) {
  const { method } =  req

  switch(method) {
    case 'GET':
      try {
        const cohorts = await Cohort.find({})

        res.status(200).json({ success: true, data: cohorts })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
  
    case 'POST':
      try {
        const cohort = await Cohort.create(req.body)

        res.status(201).json({ success: true, data: cohort })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
