import type { Portfolio, TagColors } from "../types/portfolio";

const PROJECT_IMAGE_BASE = import.meta.env.BASE_URL;

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://pratik-70.github.io/Portfolio",
    pdf: `${PROJECT_IMAGE_BASE}resume.pdf`,
  },
  personal: {
    name: "Pratik Kumar",
    title: "DevOps and Cloud Engineer",
    headline: "JavaScript | Node.js | MERN Stack | Docker | Kubernetes | Terraform",
    avatar: {
      url: `${PROJECT_IMAGE_BASE}Profile.jpeg`,
      label: "Pratik Kumar",
    },
    summary:
      "I am an aspiring DevOps Engineer with hands-on experience in building and automating CI/CD pipelines, managing cloud infrastructure, and deploying containerized applications. I enjoy working at the intersection of development and operations to improve deployment speed, reliability, and scalability. I have practical exposure to tools such as AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, Git, and Linux, and have implemented end-to-end DevOps workflows through real-world projects. My focus is on infrastructure automation, continuous delivery, and maintaining production-ready environments. I am actively seeking opportunities where I can apply my DevOps skills, learn from experienced engineers, and contribute to building efficient and scalable systems.",
    hero: {
      summary:
      `Aspiring DevOps Engineer focused on CI/CD automation, cloud infrastructure, and containerized deployments.
   
    `,
    },
    contact: {
      email: "70812345pratik@gmail.com",
      phone: "+91-9431880420",
      location: "Phagwara, Punjab, India",
      website: "https://pratik-70.github.io/Portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/pratik70",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/pratik-70",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Built an end-to-end DevOps pipeline for a Zomato-like platform",
    "Developed full stack apps with Node.js, Express, MongoDB, HTML, and CSS",
    "Strong Java DSA foundation with desktop app development using Java Swing",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          level: 85,
          icon: "SiHtml5",
          category: "frontend",
          years: 2,
        },
        {
          name: "CSS",
          level: 82,
          icon: "SiCss3",
          category: "frontend",
          years: 2,
        },
        {
          name: "JavaScript",
          level: 84,
          icon: "SiJavascript",
          category: "frontend",
          years: 2,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 82,
          icon: "SiNodedotjs",
          category: "backend",
          years: 2,
        },
        {
          name: "Express.js",
          level: 80,
          icon: "SiExpress",
          category: "backend",
          years: 2,
        },
        {
          name: "Java",
          level: 83,
          icon: "SiJava",
          category: "backend",
          years: 3,
        },
        {
          name: "Python",
          level: 75,
          icon: "SiPython",
          category: "backend",
          years: 1,
        },
        {
          name: "C",
          level: 74,
          category: "backend",
          years: 2,
        },
        {
          name: "C++",
          level: 76,
          category: "backend",
          years: 2,
        },
        {
          name: "Shell Scripting",
          level: 72,
          category: "backend",
          years: 1,
        },
      ],
    },
    {
      title: "DevOps and Cloud",
      skills: [
        {
          name: "Docker",
          level: 80,
          icon: "SiDocker",
          category: "devops",
          years: 2,
        },
        {
          name: "Kubernetes",
          level: 76,
          icon: "SiKubernetes",
          category: "devops",
          years: 1,
        },
        {
          name: "Jenkins",
          level: 78,
          icon: "SiJenkins",
          category: "devops",
          years: 1,
        },
        {
          name: "Terraform",
          level: 78,
          icon: "SiTerraform",
          category: "devops",
          years: 1,
        },
        {
          name: "AWS",
          level: 74,
          icon: "SiAmazonaws",
          category: "devops",
          years: 1,
        },
        {
          name: "Linux",
          level: 77,
          category: "devops",
          years: 1,
        },
        {
          name: "CI/CD",
          level: 80,
          category: "devops",
          years: 1,
        },
      ],
    },
    {
      title: "Databases and Tools",
      skills: [
        {
          name: "MongoDB",
          level: 80,
          icon: "SiMongodb",
          category: "database",
          years: 2,
        },
        {
          name: "MySQL",
          level: 76,
          icon: "SiMysql",
          category: "database",
          years: 2,
        },
        {
          name: "Git",
          level: 84,
          icon: "SiGit",
          category: "tooling",
          years: 3,
        },
        {
          name: "GitHub",
          level: 84,
          icon: "SiGithub",
          category: "tooling",
          years: 3,
        },
        {
          name: "GitLab",
          level: 72,
          icon: "SiGitlab",
          category: "tooling",
          years: 1,
        },
        {
          name: "Node.js",
          level: 82,
          icon: "SiNodedotjs",
          category: "tooling",
          years: 2,
        },
      ],
    },
  ],
  experience: [
    {
      id: "training-cipher-school",
      title: "Data Structure and Algorithm using Java Programming",
      company: "Cipher School",
      date: "Jul 2025",
      summary:
        "Completed training focused on strong DSA foundations and practical Java problem solving.",
      bullets: [
        "Built understanding of arrays, linked lists, stacks, queues, trees, graphs, and recursion.",
        "Practiced coding exercises and real-time assignments to strengthen logical thinking.",
        "Improved structured problem solving through consistent hands-on implementation.",
      ],
      tech: ["Java", "DSA", "OOP"],
    },
  ],
  projects: [
    {
      id: "zomato-clone-devops",
      title: "Zomato Clone - End-to-End DevOps Pipeline",
      image: `${PROJECT_IMAGE_BASE}projects/zomato-clone-devops.svg`,
      video: `${PROJECT_IMAGE_BASE}projects/zomato_demo.mp4`,
      description:
        "Built a Zomato-like food delivery platform with a fully automated build, test, and deployment pipeline. Used Git, GitHub, Jenkins, Docker, Kubernetes orchestration, and Terraform for infrastructure automation. Reduced deployment time by around 70% and enabled stable, zero-downtime releases through automated rollouts.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pratik-70/FoodHub.git",
          icon: "SiGithub",
        },
        {
          label: "Live Demo Video",
          url: `${PROJECT_IMAGE_BASE}projects/zomato_demo.mp4`,
          icon: "FaPlayCircle",
        },
      ],
      tags: [
        "Git",
        "GitHub",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Linux",
        "CI/CD",
        "Terraform",
      ],
      date: "Nov 2025",
      isUnderDevelopment: false,
    },
    {
      id: "ai-task-manager",
      title: "AI-Powered Task Manager - Full Stack",
      image: `${PROJECT_IMAGE_BASE}projects/AI-powered.png`,
      description:
        "Developed a full stack task manager with AI-based smart suggestions for prioritizing and organizing tasks. Managed backend services with Node.js and Express, integrated MongoDB, and designed a responsive UI with HTML and CSS. Improved task organization efficiency by around 60% using real-time updates, authentication, and smooth CRUD operations.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pratik-70/ai-task-manager",
          icon: "SiGithub",
        },
      ],
      tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Full Stack"],
      date: "Sep 2025",
      isUnderDevelopment: false,
    },
    {
      id: "event-reminder",
      title: "Event Reminder System - Java DSA + Swing",
      image: `${PROJECT_IMAGE_BASE}projects/event_reminder_image.png`,
      description:
        "Created a desktop-based event reminder system for scheduling and managing events efficiently. Implemented Java Swing UI with DSA concepts such as arrays, lists, queues, and file handling for data persistence. Reduced missed reminders by around 50% through reliable scheduling and persistent notifications.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pratik-70/Event_Reminder_System.git",
          icon: "SiGithub",
        },
      ],
      tags: ["Java", "Java Swing", "OOP", "DSA", "File Handling"],
      date: "Jul 2025",
      isUnderDevelopment: false,
    },
    {
      id: "medical-appointment-website",
      title: "Medical Appointment Website",
      image: `${PROJECT_IMAGE_BASE}projects/hospital-website-template.jpg`,
      description:
        "Designed a medical appointment booking website to simplify patient scheduling and management. Engineered a responsive interface using HTML and CSS with JavaScript-based form validation and dynamic sections. Enabled faster appointment booking and reduced scheduling time by around 30%.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pratik-70/MEDAPPT.git",
          icon: "SiGithub",
        },
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      date: "Dec 2023",
      isUnderDevelopment: false,
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering (CGPA: 7.76)",
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: { start: "Aug 2023", present: true },
    },
    {
      degree: "Intermediate (Percentage: 75%)",
      school: "Bradford International School",
      location: "Patna, Bihar",
      date: { start: "Apr 2021", end: "Mar 2022" },
    },
    {
      degree: "Matriculation (Percentage: 87%)",
      school: "Shree Sai International",
      location: "Patna, Bihar",
      date: { start: "Apr 2019", end: "Mar 2020" },
    },
  ],
  certifications: [
    {
      name: "Data Structure and Algorithm using Java Programming",
      issuer: "Cipher School",
      date: "Jul 2025",
      image: `${PROJECT_IMAGE_BASE}certifications/image.png`,
      url: "https://www.cipherschools.com/certificate/preview?id=6886744eca64e035786b2822",
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "Sep 2024",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~87KECJXTGBMT/CERTIFICATE_LANDING_PAGE~87KECJXTGBMT.jpeg",
      url: "https://www.coursera.org/account/accomplishments/verify/87KECJXTGBMT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      name: "Python Fundamentals for Beginners",
      issuer: "Great Learning",
      date: "Dec 2023",
      image:
        "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/3796719/original/Pratik_kumar20231209-73-1cw2b3f.jpg",
      url: "https://www.mygreatlearning.com/certificate/SNPMGKAC?referrer_code=GL5V7YHSKVOX8",
    },
  ],
  extras: {
    trainings: [
      {
        id: "training-cipher-school",
        title: "Data Structure and Algorithm using Java Programming",
        provider: "Cipher School",
        date: "Jul 2025",
        image: `${PROJECT_IMAGE_BASE}certifications/image.png`,
        summary:
          "Completed intensive training focused on Java-based DSA concepts and practical problem solving through assignments.",
        skills: ["Java", "DSA", "OOP", "Problem Solving"],
      },
    ],
    hackathons: [
      {
        id: "hackathon-participation-1",
        name: "Capture The Flag (CTF) Cybersecurity Hackathon",
        date: "2025",
        image: `${PROJECT_IMAGE_BASE}projects/image.png`,
        result: "Participated as a cybersecurity CTF challenger",
        summary:
          "Participated in a cybersecurity CTF hackathon focused on solving real-world security challenges including web exploitation, cryptography, and network analysis under time constraints.",
        tech: ["CTF", "Cybersecurity", "Web Security", "Cryptography", "Network Security"],
      },
    ],
    volunteer: [
      {
        title: "Extra-Curricular Activities",
        bullets: [
          "Led my team to victory in the Red Mirchi 20-Over Cricket Tournament.",
          "Contributed to a community development initiative promoting women's empowerment through NGO collaboration.",
        ],
      },
    ],
    languages: [
      { name: "English", level: "Professional" },
      { name: "Hindi", level: "Native" },
    ],
    interests: [
      "Problem solving",
      "Team sports",
      "Community impact initiatives",
    ],
  },
};

export const tagColors: TagColors = {
  HTML: "bg-orange-100 text-orange-800",
  CSS: "bg-teal-100 text-teal-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  Java: "bg-red-100 text-red-800",
  "Java Swing": "bg-red-50 text-red-700",
  OOP: "bg-slate-100 text-slate-800",
  DSA: "bg-purple-300 text-purple-900",
  "File Handling": "bg-stone-100 text-stone-800",
  "Express.js": "bg-gray-100 text-gray-800",
  "Node.js": "bg-green-100 text-green-800",
  MongoDB: "bg-green-600 text-white",
  MySQL: "bg-blue-100 text-blue-800",
  Git: "bg-orange-200 text-orange-900",
  GitHub: "bg-zinc-200 text-zinc-900",
  GitLab: "bg-orange-100 text-orange-900",
  Jenkins: "bg-rose-100 text-rose-800",
  Docker: "bg-blue-100 text-blue-800",
  Kubernetes: "bg-indigo-100 text-indigo-800",
  Linux: "bg-zinc-100 text-zinc-800",
  "CI/CD": "bg-lime-100 text-lime-900",
  Terraform: "bg-purple-600 text-white",
  AWS: "bg-orange-500 text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
