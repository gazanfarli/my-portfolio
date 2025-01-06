import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage3 from '../images/portfolio/admin-dashboard.png';
import porfolioImage2 from '../images/portfolio/headphones-ecommerce.png';
import porfolioImage4 from '../images/portfolio/my-portfolio.png';
import porfolioImage1 from '../images/portfolio/spacex-info.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TTimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Gazanfar's Portfolio Website",
  description: "Gazanfar's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Gazanfar.`,
  description: (
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a <strong className="text-stone-100">Software Engineer</strong>, currently working at&nbsp;
      <strong className="text-stone-100">International Bank of Azerbaijan</strong> helping build a modern, mobile-first
      web applications
    </p>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/18UCEWcYs3CPBxEYngDe_6wgkYs5Q_RqF/edit?usp=sharing&ouid=100359122208133355899&rtpof=true&sd=true',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: 'https://i.postimg.cc/gJH2ZCQM/IMG-2320.jpg',
  description: `I am very passionate about my work. I like to learn new things and put my knowledge into use. And i will take every opportunity to improve myself. Looking for a place where i can share my skills and be able to grow in terms of learning and gaining experience. As for me, there is no end of learning.`,
  aboutItems: [
    { label: 'Location', text: 'Baku, Azerbaijan', Icon: MapIcon },
    { label: 'Age', text: '23', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Azerbaijani / Caucasian', Icon: FlagIcon },
    { label: 'Interests', text: 'Fitness, Karate', Icon: SparklesIcon },
    {
      label: 'Study',
      text: 'The Academy of Public Administration Under the President of the Republic of Azerbaijan',
      Icon: AcademicCapIcon,
    },
    { label: 'Employment', text: 'International Bank of Azerbaijan', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Azerbaijani',
        level: 10,
      },
      {
        name: 'Turkish',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Chakra UI',
        level: 9,
      },
      {
        name: 'MUI',
        level: 9,
      },
      {
        name: 'Tailwind CSS',
        level: 7,
      },
      {
        name: 'Redux Toolkit',
        level: 7,
      },
      {
        name: 'Zustand',
        level: 7,
      },
      {
        name: 'Babel',
        level: 7,
      },
      {
        name: 'Webpack',
        level: 7,
      },
      {
        name: 'Microfrontends (Module Federation)',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node js',
        level: 8,
      },
      {
        name: 'Nest js',
        level: 8,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Spring Boot',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Github',
        level: 9,
      },
      {
        name: 'PL/SQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'Postman',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SpaceX Info',
    description: "Discover Space-X's groundbreaking rocket technology.",
    url: 'https://spacexinfo-az.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Headphones E-commerce',
    description: 'Experience immersive sound with our headphones',
    url: 'https://headphones-ecommerce-rho.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Admin Dashboard',
    description: 'Streamline your operations with our dashboard',
    url: 'https://admin-dashboard-brown-seven.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'My Portfolio',
    description: 'Showcasing my creative work and achievements',
    url: 'https://gazanfarli.vercel.app/',
    image: porfolioImage4,
  },
];

export const education: TTimelineItem[] = [
  {
    location: 'The Academy of Public Administration Under the President of the Respublic of Azerbaijan',
    title: "Master's in Mathematical and Information Security of Economic Activity",
    content: (
      <p>
        My focus during this Master's program has been on the intersection of information security and economics, where
        I explored topics like cybersecurity policies, economic risk management in digital environments, cryptography,
        and data protection strategies for secure economic activities. Additionally, I engaged in research projects
        related to securing public administration infrastructures and optimizing network protection.
      </p>
    ),
  },
  {
    location: 'Azerbaijan State Oil and Industry University',
    title: "Bachelor's in Computer Engineering",
    content: (
      <p>
        What I learnt in Computer Science: artificial intelligence, computer systems and networks, security, database
        systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software
        engineering and theory of computing.
      </p>
    ),
  },
];

export const experience: TTimelineItem[] = [
  {
    date: 'April 2023 - Present',
    location: 'International Bank of Azerbaijan',
    title: 'Software Engineer',
    content: (
      <div>
        <p>- Led front-end development using React and Chakra UI, ensuring top-notch user experiences</p>
        <p>
          - Built Bank and Tax Orders, Bank Transfers, SMS Notification processes, improving customer interaction and
          experience
        </p>
        <p>- Integrated Java microservices and implemented a Backend-for-Frontend (BFF) architecture</p>
        <p>- Maintained code quality with SonarQube and Jest, optimizing performance</p>
        <p>- Integrating data from various back-end services and databases</p>
        <p>- Managed version control and collaboration with Git and Gitlub</p>
      </div>
    ),
  },
  {
    date: 'September 2022 - March 2023',
    location: 'Algorithmics Global',
    title: 'Web Developer',
    content: (
      <div>
        <p>- Writing well designed, testable, efficient code by using best software development practices</p>
        <p>- Creating a website layout/user interfaces by using React</p>
        <p>- Cooperate with web designers to match visual design intent</p>
        <p>- Integrating data from various back-end services and databases</p>
      </div>
    ),
  },
  {
    date: 'April 2022 - September 2022',
    location: 'Yelo Bank',
    title: 'PL/SQL Developer',
    content: (
      <div>
        <p>- Develop SQL databases including back end data for web applications and data storage</p>
        <p>- Create and optimize SQL queries to sort, retrieve or store data</p>
        <p>- Create program views, functions and stored procedures</p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dave Gray',
      text: 'Keep striving for progress, not the perfection',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Elon Musk',
      text: "When something is important enough, you do it even if the odds are not in your favor. Life is too short for long-term grudges. Some people don't like change, but you need to embrace change if the alternative is disaster.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Antoine de Saint-Exupery',
      text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'gazanfarli.dev@gmail.com',
      href: 'mailto:gazanfarli.dev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Baku, Azerbaijan',
      href: 'https://www.google.com/maps/place/Bak%C4%B1,+Az%C9%99rbaycan/@40.3947695,49.714872,11z/data=!3m1!4b1!4m5!3m4!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924',
    },
    {
      type: ContactType.Instagram,
      text: '@qezenferlee',
      href: 'https://www.instagram.com/qezenferlee/',
    },
    {
      type: ContactType.Github,
      text: 'gazanfarli',
      href: 'https://github.com/gazanfarli',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/gazanfarli' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gazanfar-gazanfarli/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/qezenferlee/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/qznfr14' },
];
