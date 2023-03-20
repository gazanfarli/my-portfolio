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
  TimelineItem,
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
  name: `I'm Gazanfar Gazanfarli.`,
  description: (
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Baku based <strong className="text-stone-100">Front End Developer</strong>, currently working
        at <strong className="text-stone-100">Algorithmics Global</strong> helping build a modern, mobile-first 
        web applications
      </p>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1mI1vQX_eI19RYllDexztGz94O7bfKqN8/view?usp=sharing',
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
  profileImageSrc: 'https://i.postimg.cc/9RdTLFb3/profile-Photo.jpg',
  description: `I am very passionate about my work. I like to learn new things and put my knowledge into use. And i will take every opportunity to improve myself. Looking for a place where i can share my skills and be able to grow in terms of learning and gaining experience. As for me, there is no end of learning.`,
  aboutItems: [
    {label: 'Location', text: 'Baku, Azerbaijan', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Azerbaijani / Caucasian', Icon: FlagIcon},
    {label: 'Interests', text: 'Fitness, Karate', Icon: SparklesIcon},
    {label: 'Study', text: 'Azerbaijan State Oil and Industry University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Algorithmics Global', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
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
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Redux Toolkit',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
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
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
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
    description: 'Discover Space-X\'s groundbreaking rocket technology.',
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

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2022 - Ongoing',
    location: 'The Academy of Public Administration Under the President of the Respublic of Azerbaijan',
    title: 'Mathematical and Information Security of Economic Activity',
    content: <p>Ongoing</p>,
  },
  {
    date: 'September 2018 - January 2022',
    location: 'Azerbaijan State Oil and Industry University',
    title: "BSc in Computer Engineering",
    content: <p>What I learnt in Computer Science: artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering and theory of computing.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
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
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'qznfrli.2001@gmail.com',
      href: 'mailto:qznfrli.2001@gmail.com',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/gazanfarli'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gazanfar-gazanfarli-a843021aa/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/qezenferlee/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/qznfr14'},
];
