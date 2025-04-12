import {
    mobile,
    backend,
    creator,
    web,

    dpma,

    spaceoctahedron,
    ceoyounoussetamekloe,
    benchtest,
    flighttest,
    emotor,
    deliverydrone,
    securitydrone,

    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "company",
      title: "Company",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Industrial Customers",
      icon: web,
    },
    {
      title: "Sustainable Infrastructure",
      icon: mobile,
    },
    {
      title: "Scientific Progress",
      icon: backend,
    },
    {
      title: "Social Prosperity",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Basic Principles",
      company_name: "TRL 1",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "March 2020",
      points: [
        "Basic principles observed and recorded.",
      ],
    },
    {
      title: "Technological Concept",
      company_name: "TRL 2",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "August 2020",
      points: [
        "Formulation of the technological concept `Digital Drone Design and Production`",
      ],
    },
    {
      title: "Experimental Proof-of-Concept",
      company_name: "TRL 3",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
        "Development of the first prototype of the electric motor.",
      ],
    },
    {
      title: "Company Formation",
      company_name: "",
      icon: dpma,
      iconBg: "#E6DEDD",
      date: "March 2022",
      points: [
        "Foundation of Space Octahedron GmbH in Berlin",
        "Trademark registration Space Octahedron®",
      ],
    },
    {
      title: "Validation in the Laboratory",
      company_name: "TRL 4",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "October 2023",
      points: [
        "Validation of the electric motor in the laboratory",
      ],
      media: {
        type: "youtube", // "image", "video", or "youtube"
        videoId: "I9gtUkAsyuk", 
        url: "", // For direct video or image files
        alt: "Validation in the Relevant Environment",
        caption: "Flight Test of the Electric Motor",
        poster: benchtest 
      }
    },
    {
      title: "Validation in the Relevant Environment",
      company_name: "TRL 5",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "January 2024",
      points: [
        "Electric motor flight test",
      ],
      media: {
        type: "youtube", // "image", "video", or "youtube"
        videoId: "vtj2rbL4IDA", // Only for YouTube
        url: "", // For direct video or image files
        alt: "Validation in the Relevant Environment",
        caption: "Flight Test of the Electric Motor",
        poster: flighttest // Optional for videos
      }
    },
    {
      title: "Patenting the Electric Motor",
      company_name: "",
      icon: spaceoctahedron,
      iconBg: "#E6DEDD",
      date: "2025",
      points: [
        "Pursuing patents and certifications for the electric motor",
      ],
    },
  ];

 
  
  const testimonials = [
    {
      testimonial:
        "Space architect redefining aerial robotics through disruptive innovation.",
      name: "Younousse Tamekloe",
      designation: "CEO",
      company: "Space Octahedron®",
      image: ceoyounoussetamekloe,
    },
  ];
  
  const projects = [
    {
      name: "Electric Motor",
      description:
        "The electric motor developed by Space Octahedron® redefines the technological standards for heavy drones, representing a revolutionary innovation in the field of aerial robotics.",
      tags: [
        {
          name: "power",
          color: "blue-text-gradient",
        },
        {
          name: "torque",
          color: "purple-text-gradient",
        },
        {
          name: "speed",
          color: "pink-text-gradient",
        },
      ],
      image: emotor,
      source_code_link: "https://spaceoctahedron.com/",
    },
    {
      name: "Delivery Drone",
      description:
        "Designed to be an indispensable part of the smart city delivery ecosystem, its advanced technology of propulsion and energy supply enables DELTA-01 to attain outstanding speed, range, and payload.",
      tags: [
        {
          name: "speed",
          color: "blue-text-gradient",
        },
        {
          name: "range",
          color: "purple-text-gradient",
        },
        {
          name: "payload",
          color: "pink-text-gradient",
        },
      ],
      image: deliverydrone,
      source_code_link: "https://spaceoctahedron.com/",
    },
    {
      name: "Security Drone",
      description:
        "The security drone, GAIA-01, stands out from the competition thanks to its unrivaled endurance (12 hours of flight), attributed to the innovative energy supply system developed by Space Octahedron®.",
      tags: [
        {
          name: "endurance",
          color: "blue-text-gradient",
        },
        {
          name: "speed",
          color: "purple-text-gradient",
        },
        {
          name: "power",
          color: "pink-text-gradient",
        },
      ],
      image: securitydrone,
      source_code_link: "https://spaceoctahedron.com/",
    },
  ];
  
  const socialMedia = [
    {
      id: "social-media-1",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/space-octahedron-gmbh/",
    },
    {
      id: "social-media-2",
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      name: "Twitter",
      url: "https://twitter.com/spaceoctahedron/",
    },
      {
    id: "social-media-3",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    name: "Instagram",
    url: "https://www.instagram.com/spaceoctahedron/",
  },
  {
    id: "social-media-4",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.644c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z",
    name: "Facebook",
    url: "https://facebook.com/spaceoctahedron",
  },
  {
    id: "social-media-5",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    name: "YouTube",
    url: "https://www.youtube.com/@spaceoctahedron",
  },
  {
    id: "social-media-6",
    icon: "M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z",
    name: "Vimeo",
    url: "https://vimeo.com/spaceoctahedron",
  },
  ];
  
  const footerLinks = [
    {
      id: "legal-notice",
      title: "Legal Notice",
      url: "/legal",
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      url: "/privacy",
    },
  ];
  
  const footerInfo = {
    companyName: "Space Octahedron",
    copyright: "© 2025 Space Octahedron®",
    rightsText: "All rights reserved",
  };

  
  export { 
    services, 
    experiences, 
    testimonials, 
    projects,
    socialMedia,
    footerLinks,
    footerInfo 
  };