import { ApiError } from 'next/dist/server/api-utils';
import { ValidationError } from 'yup';

export class CustomApiError extends ApiError {
  validationError: ValidationError;

  constructor(statusCode: number, validationError: ValidationError) {
    super(statusCode, validationError.message);
    this.validationError = validationError;
  }
}
