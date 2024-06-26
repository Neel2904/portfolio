'use client';
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.90)
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.05 * index }
    })
  }

  return (
    <section 
      id="skills"
      ref={ref} 
      className='mb-28 max-w-[53rem] scroll-mt-40 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li 
            key={index} 
            className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            custom={index}
            initial="initial"
            whileInView="animate"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills