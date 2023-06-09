import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Formik, Form, ErrorMessage, Field } from 'formik'

import { styles } from '@/styles/styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { messageSchema } from '@/validation'

interface IForm {
  name: string
  email: string
  message: string
}

const API_URL = `http://localhost:3000/api/hello`

const Contact: React.FC = () => {
  const initialValues: IForm = {
    name: '',
    email: '',
    message: '',
  }

  const [messageLength, setMessageLength] = useState<number>(0)

  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (
    values: IForm,
    { resetForm }: { resetForm: () => void },
  ): Promise<void> => {
    setLoading(true)

    const trimmedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim()]),
    )

    await axios
      .post(API_URL, trimmedValues)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err))

    setLoading(false)
    resetForm()
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={messageSchema}
        >
          {(formikProps) => (
            <Form>
              <label className="flex flex-col mt-10">
                <span className="text-white font-medium mb-4">Your Name</span>
                <Field
                  name="name"
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <ErrorMessage
                name="name"
                component="span"
                className="flex text-red-700 font-bold mt-1"
              />

              <label className="flex flex-col mt-10">
                <span className="text-white font-medium mb-4">Your Email</span>
                <Field
                  name="email"
                  placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <ErrorMessage
                name="email"
                component="span"
                className="flex text-red-700 font-bold mt-1"
              />

              <label className="flex flex-col mt-10">
                <span className="text-white font-medium mb-4">Your Message</span>
                <Field
                  as="textarea"
                  rows={7}
                  maxLength="2000"
                  name="message"
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6  mb-1 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    formikProps.setFieldValue('message', event.target.value)
                    setMessageLength(event.target.value.length)
                  }}
                />
              </label>
              <ErrorMessage
                name="message"
                component="span"
                className="flex text-red-700 font-bold"
              />
              <span className="text-secondary text-sm font-light">
                {!formikProps.errors.message ? `Symbols used ${messageLength}/2000` : null}
              </span>

              <div>
                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-10"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
