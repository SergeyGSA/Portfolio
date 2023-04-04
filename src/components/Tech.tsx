import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { SectionWrapper } from '../hoc'
import { ITechnologiesItem, technologies } from '../constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { ICardProps } from '@/types'
import { styles } from '@/styles/styles'

const TechCard: React.FC<ICardProps> = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-full shadow-card"
      >
        <div
          data-options={{
            max: 40,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-full py-5 px-12 w-[196px] min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I worked with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology: ITechnologiesItem, index: number) => (
          <div key={technology.title}>
            <TechCard index={index} {...technology} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
