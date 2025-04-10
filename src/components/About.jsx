import React from 'react';
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full purple-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>
          About
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Vision
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] text-left"
      >
      Space Octahedron® aspires to bring humanity to the next level of aerial robotics. 
      </motion.p>
      <motion.div>
        <h2 className={`${styles.sectionHeadText}`}>
          Mission
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] text-left"
      >
      Space Octahedron® exists to create innovative drone solutions for industrial customers, support sustainable infrastructure, stimulate scientific progress, and contribute to social prosperity. 
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");