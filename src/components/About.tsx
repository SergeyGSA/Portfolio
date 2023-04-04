import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

import { styles } from '@/styles/styles'
import { IService, services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

interface IServiceCardProps {
  title: string
  index: number
  icon: StaticImageData
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{
            max: 40,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&#39;m a software developer with experience in TypeScript and JavaScript, frameworks like
        Angular, React and Node.Js. I&#39;m a quick learner and like to create efficient, scalable
        and user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service: IService, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
