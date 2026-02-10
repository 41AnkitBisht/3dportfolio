import {
  finbox,
  internship,
  s2m,
  simpl,
  phonepe,
  riot,
  morphic,
  spencer,
  favicon,
} from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "UI Developer",
    company_name: "Phonepe",
    icon: phonepe,
    iconBg: "#5f249e",
    date: "July 2024 - Present",
    points: [
      "Led development of pincode web app increasing organic traffic by 15% and increasing CE by 10%",
      "Cut web view load times by 63% (4.5s to 1.5s)for help FAQ page.",
      "Server driven UI to facilitate widgets building on pincode app. ",
      " Open source contribution for inhouse console builder tool - Fabricator. ",
    ],
  },
  {
    title: "SSE (Svelte)",
    company_name: "Simpl",
    icon: simpl,
    iconBg: "#00d1c1",
    date: "Nov 2022 - May 2024",
    points: [
      " Reduced Sentry alerts by 20% through custom integration of open-source analytics tools. ",
      " Led frontend development for a web-based checkout application, improving user experience significantly. ",
      " Managed a diverse team of four developers, encouraging collaboration and efficient project delivery.",
      " Designed a central analytics tools interface to streamline data access for stakeholders and users. ",
      " Conducted code reviews to ensure high-quality software standards and adherence to best practices. ",
    ],
  },
  {
    title: "Software Developer (React.js)",
    company_name: "Finbox",
    icon: finbox,
    iconBg: "#021033",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Enhanced onboarding process by optimizing React projects and updating internal dashboards.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freadom(Stone2Milestones)",
    icon: s2m,
    iconBg: "#39a938",
    date: "Apr 2021 - Dec 2021",
    points: [
      "Built interactive quiz games with animations to facilitate learning experience for school kids. ",
      " Facilitated a dynamic learning environment that aids school children in understanding core concepts. ",
      "Conducted user testing sessions to gather feedback and improve the interactive gaming experience.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Internships",
    icon: internship,
    iconBg: "#fff",
    date: "Nov 2020 - Apr 2021",
    points: [
      " Developed a dashboard for a fintech startup using React.js, improving user engagement and retention.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/41AnkitBisht",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ankit-bisht-4442b4186",
  },
];

export const projects = [
  {
    iconUrl: riot,
    theme: "btn-back-red",
    name: "Valorant Themed Game",
    description:
      "Created a Valorant-inspired game using React and Tailwind CSS, featuring character selection and interactive gameplay elements.",
    link: "https://41ankitbisht.github.io/valentine/",
  },
  {
    iconUrl: morphic,
    theme: "btn-back-black",
    name: "Morphic Studio",
    description:
      'Worked on "Morphic", a versatile design system and component library built with React and Tailwind CSS, enhancing UI consistency and development efficiency across projects.',
    link: "https://morphic.com/",
  },
  {
    iconUrl: spencer,
    theme: "btn-back-red",
    name: "Spencers E-commerce Website",
    description:
      "Contributed to the development of Spencer's e-commerce website, implementing features and optimizing performance to enhance user experience and drive sales.",
    link: "https://www.spencers.in/",
  },
  {
    iconUrl: favicon,
    theme: "btn-back-pink",
    name: "Portfolio Website",
    description:
      "Created a responsive portfolio website showcasing projects, skills, and experience.",
    link: "https://github.com/41AnkitBisht/3dportfolio",
  },
];
