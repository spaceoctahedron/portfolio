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
        "Basic principles observed and recorded",
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
        "Development of the first prototype of the electric motor",
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
        "The TE-Series electric motors by Space Octahedron® set new benchmarks for heavy drones, marking a breakthrough in aerial robotics.",
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
        "Engineered for smart city logistics, DELTA-01’s advanced propulsion and energy system delivers exceptional speed, range, and payload capacity.",
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
        "The GAIA-01 security drone leads the field with unmatched 12-hour endurance, powered by Space Octahedron®’s innovative energy system.",
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
      id: "social-media-0",
      icon: "M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.207 11.385c.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.728-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.086 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.304 3.495.996.108-.776.418-1.304.76-1.604-2.665-.305-5.467-1.335-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 013.003-.404 11.45 11.45 0 013.003.404c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.877.118 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.104.814 2.225 0 1.606-.015 2.903-.015 3.297 0 .32.218.694.825.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z",
      name: "GitHub",
      url: "https://spaceoctahedron.github.io/portfolio/"
    },
    {
      id: "social-media-1",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/space-octahedron-gmbh/",
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
      id: "social-media-7",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
      name: "Website",
      url: "https://www.spaceoctahedron.com",
    }
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
    rightsText: "All rights reserved.",
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