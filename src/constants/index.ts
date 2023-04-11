import { StaticImageData } from 'next/image'
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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  angular,
  mssql,
  carrent,
  jobit,
  tripguide,
  testimonials_1,
  testimonials_2,
  testimonials_3,
  exadel,
  freelancehunt,
  infopulse,
} from '../assets'

export interface INavLink {
  id: string
  title: string
}
export const navLinks: Array<INavLink> = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export interface IService {
  title: string
  icon: StaticImageData
}

const services: Array<IService> = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

export interface ITechnologiesItem {
  title: string
  icon: StaticImageData
}

const technologies: Array<ITechnologiesItem> = [
  {
    title: 'HTML 5',
    icon: html,
  },
  {
    title: 'CSS 3',
    icon: css,
  },
  {
    title: 'JavaScript',
    icon: javascript,
  },
  {
    title: 'TypeScript',
    icon: typescript,
  },
  {
    title: 'Angular',
    icon: angular,
  },
  {
    title: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    title: 'React JS',
    icon: reactjs,
  },
  {
    title: 'Node JS',
    icon: nodejs,
  },
  {
    title: 'MongoDB',
    icon: mongodb,
  },
  {
    title: 'Git',
    icon: git,
  },
  {
    title: 'Figma',
    icon: figma,
  },
  {
    title: 'Docker',
    icon: docker,
  },
  {
    title: 'MS SQL',
    icon: mssql,
  },
]

export interface IExperienceItem {
  title: string
  company_name: string
  icon: StaticImageData
  iconBg: string
  date: string
  points: Array<string>
}

const experiences: Array<IExperienceItem> = [
  {
    title: 'Angular Developer',
    company_name: 'Exadel',
    icon: exadel,
    iconBg: '#E6DEDD',
    date: 'Jun 2021 - Aug 2021',
    points: [
      'Developing a web application using Angular and other related technologies.',
      'Collaborating with cross-functional teams including, product managers, and other developers to create high-quality product.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Freelance',
    icon: freelancehunt,
    iconBg: '#383E56',
    date: 'Aug 2021 - Oct 2022',
    points: [
      'Developing and maintaining a web application with CRM using Angular and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Angular Developer',
    company_name: 'Infopulse',
    icon: infopulse,
    iconBg: '#E6DEDD',
    date: 'Oct 2022 - Present',
    points: [
      'Developing and maintaining a web application with CRM using Angular and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
]

export interface ITestimonial {
  testimonial: string
  name: string
  designation: string
  company: string
  image: StaticImageData
}

const testimonials: Array<ITestimonial> = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: testimonials_1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: testimonials_2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: testimonials_3,
  },
]

export interface ITag {
  name: string
  color: string
}
export interface IProject {
  name: string
  description: string
  tags: Array<ITag>
  image: StaticImageData
  source_code_link: string
}

const projects: Array<IProject> = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
