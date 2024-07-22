import express, { Request, Response } from 'express'
import URLS from '../constant/urls'
import db from '../models/index'
import { errorMessage, successMessage } from '../constant/responses'
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const model = db.doctors

// ? GET
router.get(URLS.doctor, async (req: Request, res: Response) => {
  try {
    const doctors = await model.findAll()
    res.json(successMessage.get('doctors', doctors))
  } catch (error: any) {
    res.status(400).json(errorMessage(error.message))
  }
})
router.post(URLS.doctor, async (req: Request, res: Response) => {
  const { name, last_name, specialities, phone_number, age, is_retired } = req.body
  try {
    const doctorCreated = await model.create({ name, last_name, specialities, phone_number, age, is_retired, id: uuidv4() })
    res.json(successMessage.post('doctor', doctorCreated))
  } catch (error: any) {
    res.status(400).json(errorMessage(error.message))
  }
})

export default router