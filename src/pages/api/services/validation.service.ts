import { IFormData } from '@/types'
import { messageSchema } from '@/validation'
import { CustomApiError } from '../exceptions/api-error'

export default async function validationService(data: IFormData) {
  try {
    const validMessage = await messageSchema.validate(data)
    return validMessage
  } catch (error: any) {
    throw new CustomApiError(400, error.errors[0])
  }
}
