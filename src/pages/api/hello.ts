import type { NextApiRequest, NextApiResponse } from 'next'

import validationService from './services/validation.service'
import telegramService from './services/telegram.service'

interface IData {
  success: boolean
}

interface IError {
  type: string
  error?: unknown
}

export default async function formHandler(
  req: NextApiRequest,
  res: NextApiResponse<IData | IError>,
) {
  const { body } = req

  if (req.method !== 'POST') {
    res.status(405).json({ type: 'Method not allowed' })
    return
  }

  try {
    const validMessage = await validationService(body)
    await telegramService(validMessage)

    res.status(200).json({ success: true })
  } catch (error: any) {
    res.status(400).json({ type: 'Validation error', error })
  }
}
