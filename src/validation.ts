import * as Yup from 'yup';

const NAME_REGEX = /^[0-9A-Za-zА-Яа-яЇїЄєҐґІі'.-\s]+$/;
const EMAIL_REGEX =
  /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?){1,}$/;

const messageSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Max name length is 50')
    .matches(NAME_REGEX, 'Invalid name'),
  email: Yup.string()
    .required('Email is required')
    .min(3, 'Email must be at least 3 characters long')
    .max(50, 'Max email length is 50')
    .matches(EMAIL_REGEX, 'Invalid email'),
  message: Yup.string()
    .required('Message is required')
    .min(3, 'Message must be at least 3 characters long')
    .max(50, 'Max message length is 50'),
});

export { messageSchema };
