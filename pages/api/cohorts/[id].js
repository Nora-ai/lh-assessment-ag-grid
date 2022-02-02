import dbConnect from '../../../utils/dbConnect'
import Cohort from '../../../models/Cohort'

dbConnect();

export default async function CohortRequestById(req, res) {
  const { 
     query: { id },
     method 
  } = req

  switch(method) {
      case 'GET':
          try {
            const cohort = await Cohort.findById(id).populate('name')

            if (!cohort) {
                return res.status(400).json({ success: false})
            }

            res.status(200).json({ success: true, data: cohort })
          } catch (error) {
            res.status(400).json({ success: false})
          }
        break
    case 'PUT':
        try {
            const cohort = await Cohort.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            })

            if (!cohort) {
                return res.status(400).json({ success: false })
            }
            res.status(200).json({ success: true, data: cohort})
        } catch(error) {
            res.status(400).json({ success: false })
        }
        break
    case 'DELETE':
        try {
            const deletedCohort = await Cohort.deleteOne({ _id: id})

            if(!deletedCohort) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ success: true, data: {}})
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
    default:
        res.status(400).json({ success: false })
        break
  }
}