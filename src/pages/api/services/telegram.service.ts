import axios from 'axios'

import { IFormData } from '@/types'
import { CustomApiError } from '../exceptions/api-error'

export default async function telegramService(data: IFormData) {
  const TG_SEND_MESSAGE_URL = `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`

  let message = `<b>Повідомлення з сайту!</b>\n`

  message += `<u><b>Ім'я: </b></u> ${data.name}\n`
  message += `<u><b>Ел. пошта: </b></u> ${data.email}\n`
  message += `<u><b>Повідомлення: </b></u> ${data.message}\n`

  try {
    await axios.post(TG_SEND_MESSAGE_URL, {
      chat_id: process.env.TG_CHAT_ID,
      text: message,
      parse_mode: 'html',
    })
  } catch (error: any) {
    throw new CustomApiError(400, error)
  }
}
