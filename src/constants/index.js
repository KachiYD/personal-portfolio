import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    java,
    absolute,
    ashtead,
    dalhousie,
    quicstu,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextlevelfood,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Engineer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Health & Wellness Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Quic Stu",
      icon: quicstu,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Worked in a three-member team, delivering a full stack application in three months.",
        "Employed a diverse tech stack including Next.js, React, Tailwind CSS, and Express.js to create a responsive and user-friendly application.",
        "Implemented Firebase and Firestore for real-time data handling and integrated Algolia for efficient search functionality.",
        "Partnered closely with the design team to ensure seamless implementation of UI/UX changes, enhancing the overall user experience.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Absolute Software",
      icon: absolute,
      iconBg: "#E6DEDD",
      date: "July 2022 - April 2023",
      points: [
        "Developed innovative solutions using multi-threading with Python, reducing data retrieval time by 50%.",
        "Performed data analysis using SQL and MongoDB, generating detailed reports from 1000+ company records.",
        "Collaborated on debugging and maintaining backend Java code with Product Development team, improving client satisfaction.",
      ],
    },
    {
      title: "Internal Application Developer",
      company_name: "Ashtead Technology",
      icon: ashtead,
      iconBg: "#383E56",
      date: "Jan 2021 - Aug 2021",
      points: [
        "Utilized Python scripting for precise measurements on 3D models, enhancing daily analytics and workflow.",
        "Reduced 3D model processing time by 90% through technical solutions, saving over 100 processing hours per model.",
        "Automated photogrammetry processes using Python scripts, increasing efficiency by 30%.",
      ],
    },
    {
      title: "Web Developer Team Lead",
      company_name: "Everybyte Digital Products (Dalhousie University)",
      icon: dalhousie,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - Aug 2020",
      points: [
        "Led a five-member team in designing and developing a web application with efficient workflow coordination.",
        "Engineered a robust proof-of-concept website facilitating student interactions and resource sharing, leveraging foundational web development skills including HTML, CSS, and JavaScript.",
        "Ensured effective communication, tracked progress, and resolved merge conflicts to maintain high functionality.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NextLevel Food",
      description:
        "Web-based platform that allows users to browse and share fooc recipes, as well as join a community of food lovers.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nextlevelfood,
      source_code_link: "https://github.com/KachiYD/foodies-app",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  