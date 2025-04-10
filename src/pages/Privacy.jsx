import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import PrivacyPolicyCanvas from '../components/canvas/PrivacyPolicy';

const Privacy = () => {
    return (
      <div className="mt-20">
        {/* 3D Canvas Section */}
        <div className="w-full h-[400px] md:h-[500px] mb-12">
          <PrivacyPolicyCanvas />
        </div>

        {/* Content Section with background */}
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
          <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Legal Information</p>
              <h2 className={styles.sectionHeadText}>Privacy Policy</h2>
            </motion.div>
          </div>
          
          <div className={`-mt-20 pb-14 ${styles.paddingX} mb-10`}>
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="bg-black-200 p-8 rounded-3xl"
            >
              {/* Data Collection */}
              <div className="space-y-2 mb-10">
                <h3 className="text-white text-[20px] font-bold">Data Collection</h3>
                <p>We collect the following personal information:</p>
                <ul className="list-disc pl-5">
                  <li>Contact information (name and email) - only if you fill out our contact form</li>
                </ul>
                <p>We do not automatically collect any personal data by default.</p>
              </div>

              {/* Data Usage */}
              <div className="space-y-2 mb-10">
                <h3 className="text-white text-[20px] font-bold">Data Usage</h3>
                <p>If you choose to provide your contact information through our contact form, it will only be used for:</p>
                <ul className="list-disc pl-5">
                  <li>Responding to your inquiry</li>
                  <li>Communication you have specifically requested</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="space-y-2">
                <h3 className="text-white text-[20px] font-bold">Data Protection</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal data.</p>
                <p>Last updated: {new Date().getFullYear()}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    );
};
  
export default SectionWrapper(Privacy, "privacy");