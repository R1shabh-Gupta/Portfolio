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
  IH,
  meru,
  GG,
  knowitnow,
  cinevault,
  threejs,
  KB,
  HS,
  MK,
} from '../assets';

export const navLinks = [
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
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'WordPress Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UX UI Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Godhuli Group',
    icon: GG,
    iconBg: '#475569',
    date: 'April 2023 - May 2023',
    points: [
      'Developed an e-commerce website from scratch, including designing and implementing the frontend and backend functionalities.',
      'Integrated payment gateways using Razorpay and PayU to facilitate secure and seamless online transactions for customers.',
      'Conducted regular website maintenance and performed updates to ensure the website’s smooth operation, security, and optimal performance.',
    ],
  },
  {
    title: 'Web Developer and Member',
    company_name: 'Innovation Hub',
    icon: IH,
    iconBg: '#475569',
    date: 'October 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborated closely with the SEO team to implement and manage SEO strategies forimproved website visibility and organic traffic',
      'Ensuring cross-browser interoperability and responsive design implementation.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Meru Accounting',
    icon: meru,
    iconBg: '#475569',
    date: 'April 2023 - Present',
    points: [
      'Managed web-pages across 5 domains, including creating new pages and updating content and design of existing pages.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Conducted regular audits of webpages to identify and resolve any technical issues, such as broken links or page errors.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Rishabh exceeded all expectations as an intern, showcasing exceptional dedication, talent, and a remarkable work ethic. Highly recommended!',
    name: 'Harnish Shah',
    designation: 'Co-Founder',
    company: 'Meru Accounting',
    image: HS,
  },
  {
    testimonial:
      'I have had the pleasure of working with Rishabh as an intern and I can confidently say that he is the best.',
    name: 'Kartik Bhatneria',
    designation: "PGP'24",
    company: 'IIM-Indore',
    image: KB,
  },
  {
    testimonial:
      'Rishabh disproved my belief that a website could ever be as visually captivating as our own product.',
    name: 'M Kumar',
    designation: 'CEO',
    company: 'Godhuli Group',
    image: MK,
  },
];

const projects = [
  {
    name: 'CineVault',
    description:
      'A one-stop destination for all your entertainment queries, making your viewing choices easier than ever. Dive into a world of cinematic knowledge with CineVault. Your go-to destination for entertainment information.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'tmdb api',
        color: 'green-text-gradient',
      },
    ],
    image: cinevault,
    source_code_link: 'https://github.com/R1shabh-Gupta/CineVault',
  },
  {
    name: 'Know It Now',
    description:
      "Engage and learn with our dynamic quiz web app. Harnessing OpenAI's real-time question generation, explore topics through interactive quizzes. A seamless full-stack solution for knowledge seekers.",
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
    image: knowitnow,
    source_code_link: 'https://github.com/R1shabh-Gupta/Know-It-Now',
  },
];

export { services, technologies, experiences, testimonials, projects };
