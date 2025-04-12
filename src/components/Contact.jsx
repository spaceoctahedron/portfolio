import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [state, handleSubmit] = useForm("manevyyg");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Check if GDPR consent is given
    if (!gdprConsent) {
      alert("Please agree to the GDPR terms before submitting.");
      return;
    }

    // Handle the form submission with Formspree
    handleSubmit(e);
  };

  // Show success message when form is successfully submitted
  if (state.succeeded) {
    return (
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <div className="mt-12 text-white text-lg">
            <p>Thank you. We will get back to you as soon as possible.</p>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={onSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Provide your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500" />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Provide your e-mail"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Provide your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
          </label>

          <label className="flex items-center gap-4">
            <input
              type="checkbox"
              name="gdpr-consent"
              checked={gdprConsent}
              onChange={() => setGdprConsent(!gdprConsent)}
              className="w-5 h-5 accent-[#915eff]"
              required
            />
            <span className="text-white text-sm">
              GDPR Agreement *<br />
              I consent to having this website store my submitted information so they can respond to my inquiry.
            </span>
            <ValidationError prefix="GDPR Consent" field="gdpr-consent" errors={state.errors} className="text-red-500" />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");