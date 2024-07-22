import express, { Request, Response } from 'express'
import URLS from '../constant/urls'
import db from '../models/index'
import { errorMessage, successMessage } from '../constant/responses'
const router = express.Router()
const model = db.statuses

// ? GET
router.get(URLS.status, async (req: Request, res: Response) => {
  try {
    const statuses = await model.findAll()
    res.json({
      data: statuses,
      message: successMessage.get('statuses'),
      status: 200,
      ok: true
    })
  } catch (error: any) {
    res.status(400).json({
      message: errorMessage(error.message),
      status: 400,
      ok: false
    })
  }
})

export default router