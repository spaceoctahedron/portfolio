import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Media Section */}
      {experience.media && (
        <div className="mt-4">
          {experience.media.type === 'image' ? (
            <div>
              <img
                src={experience.media.url}
                alt={experience.media.alt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              {experience.media.caption && (
                <p className="text-gray-400 text-sm mt-2 italic">
                  {experience.media.caption}
                </p>
              )}
            </div>
          ) : experience.media.type === 'video' ? (
            <div className="relative pt-[56.25%] my-4 rounded-lg overflow-hidden"> {/* 16:9 aspect ratio */}
              <video
                controls
                className="absolute top-0 left-0 w-full h-full"
                poster={experience.media.poster}
              >
                <source src={experience.media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {experience.media.caption && (
                <p className="text-gray-400 text-sm mt-2 italic">
                  {experience.media.caption}
                </p>
              )}
            </div>
          ) : experience.media.type === 'youtube' ? (
            <div className="relative pt-[56.25%] my-4 rounded-lg overflow-hidden"> {/* 16:9 aspect ratio */}
              <iframe
                src={`https://www.youtube.com/embed/${experience.media.videoId}`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={experience.media.alt}
              ></iframe>
              {experience.media.caption && (
                <p className="text-gray-400 text-sm mt-2 italic">
                  {experience.media.caption}
                </p>
              )}
            </div>
          ) : null}
        </div>
      )}

     
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technology Readiness Level
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Milestones
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "company");