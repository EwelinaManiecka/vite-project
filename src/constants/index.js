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
    title: "O mnie",
  },
  {
    id: "work",
    title: "Praca",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Pedagog",
    icon: web,
  },
  {
    title: "Logoterapeuta",
    icon: mobile,
  },
  {
    title: "Redaktor",
    icon: backend,
  },
  {
    title: "Specjalista ds. social mediów",
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
  //   name: "SQL",
  //   icon: sql,
  // },
];

const experiences = [
  {
    title: "Specjalista ds. social mediów",
    company_name: "DeimosSoftware",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Wrzesień 2024 - obecnie",
    points: [
      "Tworzenie artykułów oraz (info)grakik na social media.",
      "Wrzucanie artykułów na bloga przez Strapi.",
      "Tworzenie video oraz umieszczanie na odpowiednich platformach.",
      "Dbanie o wizerunek firmy w social mediach.",
    ],
  },
    {
    title: "Programista",
    company_name: "DeimosSoftware",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Lipiec 2023 - sierpień 2024",
    points: [
      "Programowanie aplikacji webowej w technologiach: React.js, Python, SQL, Next.js,JavaScript oraz innych technolgii.",
      "Współpraca z zespołem - z programistami, grafikami, projekt managerem przy tworzeniu wysokiej jakości produktu.",
      "Implementowanie stron responsywnych.",
      "Uczestnictwo w code reviews oraz dawanie feedbacku.",
    ],
  },
    {
    title: "Nauczyciel",
    company_name: "Szkoła podstawowa",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Kwiecień 2024 - sierpień 2025",
    points: [
      "Nauczanie języka obcego.",
      "Uczestnictwo w radach pedagogicznych i szkoleniach wewnątrzszkolnych.",
      "Kontakt z uczniami i rodzicami za pośrednictwem dziennika elektronicznego.",
      "Dbanie o bezpieczeństwo uczniów i jakość nauczania.",
    ],
  },
  {
    title: "Redaktor i manager projektu",
    company_name: "Wydawnictwo św. Stanisława BM",
    icon: stanislaw,
    iconBg: "#383E56",
    date: "Luty 2020 - grudzień 2023",
    points: [
      "Edycja tekstów, współpraca z innymi osobami, odpowiedzialność za projekt i współpracowników.",
      "Współpraca z redaktorami, autorami tekstów, korektorami, rysownikami oraz składaczami.",
      "Utrzymywanie wysokiej jakości podręczników.",
      "Pisanie tekstów i korekta.",
      "Przygotowanie podręczników do druku.",
    ],
  },
  {
    title: "Administrator RODO",
    company_name: "Klinika Małżeńska",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Grudzień 2019 - luty 2020",
    points: [
      "Dbanie o bezpieczeństwo danych pacjentów oraz terapeutówPatient data managment.",
      "Wsółpraca z psychologami i psychoterapeutami.",
      "Potwierdzanie oraz anulowanie sesji terapeutycznych.",
      "Podsumowanie finansowe z dnia, tygodnia oraz miesiąca.",
      "Szkolenie nowych pracowników.",
    ],
  },
  {
    title: "Nauczyciel",
    company_name: "Szkoła podstawowa, liceum, technikum",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Luty 2010 - sierpień 2019",
    points: [
      "Nauczanie dzieci i młodzieży.",
      "Współpraca z rodzicami oraz z gronem pedagogicznym.",
      "Współpraca ze środowiskiem lokalnym.",
      "Organizowanie czasu dzieci i młodzieży.",
    ],
  },
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
    name: "Country search/Wyszukiwarka krajów",
    description:
      "Podstawowa aplikacja/platforma do wyszukiwania krajów i podstawowych informacji o nich.",
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
    name: "Web tropical paradise/Strona 'tropikalny raj' ",
    description:
      "Strona internetowa z informacjami, kontaktem i reklamą firmy.",
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
    name: "Web Page for gammers/Strona dla graczy",
    description: "Strona internetowa zbudowana na Bootstrap 5.",
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
    name: "Todo App/Aplikacja 'do zrobieia'",
    description:
      "Podstawowa aplikacja, w której możesz dodać, usunąć, zmienić coś, co masz do zrobieia.",
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
    name: "Digital clock/Zegar cyfrowy",
    description: "Strona internetowa z zegarem cyfrowym o wielu kolorach.",
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
    name: "Memory game/Gra pamięciowa",
    description: "Gra pamięciowa zbudowana na React.js",
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
    name: "WeatherApp/Aplikacja pogodowa",
    description: "Podstawowa aplikacja pogodowa",
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
