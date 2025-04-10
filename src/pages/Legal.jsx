import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
// import { ParagraphSymbolScene } from '../components/canvas/ParagraphSymbol'
import LegalNoticeCanvas from '../components/canvas/LegalNotice';

const Legal = () => {
  return (
    <div className="mt-20">
      {/* 3D Canvas Section */}
      <div className="w-full h-[400px] md:h-[500px] mb-12">
        <LegalNoticeCanvas />
      </div>

      {/* Content Section with background */}
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Legal Information</p>
            <h2 className={styles.sectionHeadText}>Legal Notice</h2>
          </motion.div>
        </div>
        
        <div className={`-mt-20 pb-14 ${styles.paddingX} mb-10`}>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="bg-black-200 p-8 rounded-3xl"
          >
            {/* Corporate Information */}
            <div className="space-y-2 mb-10">
              <h3 className="text-white text-[20px] font-bold">Corporate Information</h3>
              <p>Company: Space Octahedron GmbH</p>
              <p>Headquarters: Berlin</p>
              <p>Commercial register: Amtsgericht Charlottenburg, HRB 240478 B</p>
              <p>Managing director: Younousse Tamekloe</p>
              <p>VAT-ID: DE352373571</p>
            </div>

            {/* Content Responsibility */}
            <div className="space-y-2 mb-10">
              <h3 className="text-white text-[20px] font-bold">Content Responsibility</h3>
              <p>Younousse Tamekloe</p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-white text-[20px] font-bold">Contact</h3>
              <p>Tel.: +49 30 9404 6789</p>
              <p>E-Mail: info[at]spaceoctahedron.com</p>
              <p>
                OpenPGP key:{" "}
                <a 
                  href="https://keys.openpgp.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://keys.openpgp.org/
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Legal, "legal");