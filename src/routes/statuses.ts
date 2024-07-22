import express, { Request, Response } from 'express'
import URLS from '../constant/urls'
import db from '../models/index'
import { errorMessage, successMessage } from '../constant/responses'
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const model = db.statuses

// ? GET
router.get(URLS.status, async (req: Request, res: Response) => {
  try {
    const statuses = await model.findAll()
    res.json(successMessage.get('status', statuses))
  } catch (error: any) {
    res.status(400).json(errorMessage(error.message))
  }
})
router.post(URLS.status, async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const statusCreated = await model.create({ name, id: uuidv4() })
    res.json(successMessage.post('status', statusCreated))
  } catch (error: any) {
    res.status(400).json(errorMessage(error.message))
  }
})

export default router