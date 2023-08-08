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
  meta,
  starbucks,
  tesla,
  shopify,
  stanislaw,
  carrent,
  jobit,
  tripguide,
  threejs,
  country,
  paradise,
  gamers,
  todoApp,
  clock,
  memory,
  weather,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Teacher",
    company_name: "Primary school and secondary school",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2010 - August 2019",
    points: [
      "Teaching children and young people.",
      "Collaborating with parents of children and young people.",
      "Collaborating with teachers and the local community.",
      "Organizing leisure time for children and teenagers.",
    ],
  },
  {
    title: "Personal data administrator",
    company_name: "Marriage Center",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2019 - February 2020",
    points: [
      "Patient data managment.",
      "Collaborating with psychologists and psychotherapists.",
      "Managing the dates of therapy meetings.",
      "Summary of daily income and expenses of company.",
      "Training of new employees.",
    ],
  },
  {
    title: "Editor",
    company_name: "Publishing House of Saint Stanislaus",
    icon: stanislaw,
    iconBg: "#383E56",
    date: "February 2020 - present",
    points: [
      "Editing texts for textbooks.",
      "Collaborating with editors, text authors, cartoonists, illustrators, proofreaders and typesetters.",
      "Taking care of the high quality of texts for textbooks.",
      "Writing texts, correcting them.",
      "Graphic design preparation.",
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
    name: "Country search",
    description:
      "Web-based platform that allows users to search countries and basic information about this.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: country,
    source_link: "https://ewelinamaniecka.github.io/country-search-new/",
    source_code_link: "https://ewelinamaniecka.github.io/country-search-new/",
  },
  {
    name: "Web tropical paradise",
    description:
      "Web Page with information, contact and advertisement some company.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: paradise,
    source_link: "https://ewelinamaniecka.github.io/tropical-paradise/",
    source_code_link: "https://ewelinamaniecka.github.io/tropical-paradise/",
  },
  {
    name: "Web Page for gammers",
    description: "Web Page built in bootstrap 5.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap 5",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gamers,
    source_link: "https://ewelinamaniecka.github.io/bootstrap-page/",
    source_code_link: "https://ewelinamaniecka.github.io/bootstrap-page/",
  },
  // {
  //   name: "Space X",
  //   description: "Web application with information about space travel.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_link: "https://ewelinamaniecka.github.io/space-x/",
  //   source_code_link: "https://ewelinamaniecka.github.io/space-x/",
  // },
  {
    name: "Todo App",
    description:
      "Basic application when we can add (delete and change) something that we should do.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_link: "https://ewelinamaniecka.github.io/todo-app-tasks/",
    source_code_link: "https://ewelinamaniecka.github.io/todo-app-tasks/",
  },
  {
    name: "Digital clock",
    description: "Web Page with digital clock with many colours.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: clock,
    source_link: "https://ewelinamaniecka.github.io/digital-clock/",
    source_code_link: "https://ewelinamaniecka.github.io/digital-clock/",
  },
  {
    name: "Memory game",
    description: "Memory game built in React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: memory,
    source_link: "https://ewelinamaniecka.github.io/memory-game-react/",
    source_code_link: "https://ewelinamaniecka.github.io/memory-game-react/",
  },
  {
    name: "WeatherApp",
    description: "Basic weather application.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_link: "https://ewelinamaniecka.github.io/weather-app-basic-version/",
    source_code_link:
      "https://ewelinamaniecka.github.io/weather-app-basic-version/",
  },
];

export { services, technologies, experiences, testimonials, projects };
