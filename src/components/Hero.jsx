import { motion } from 'framer-motion';

import { styles } from '../styles';
import { Model3DCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-[#8b76e9] rotate-45 diamond-flip-pulse" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Introduction </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Space Octahedron® is a German company with a global outreach that 
          develops, manufactures, and distributes drone technologies 
          as well as provides drone services to industrial customers.
          </p>
        </div>
      </div>
      
      <Model3DCanvas />

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-4 h-3 bg-[#8b76e9] clip-triangle rounded-lg"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero