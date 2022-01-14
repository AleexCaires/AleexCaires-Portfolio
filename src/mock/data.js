import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'work.jpg',
    title: 'FreeHand',
    info: 'FreeHand is a simple 1 page project ive built using react,styled components, react icons, react router dom and a few others react components. Its a fully responsive webpage.',
    info2: '',
    url: 'https://free-hand.vercel.app/',
    repo: 'https://github.com/AleexCaires/FreeHand', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'work.jpg',
    title: 'FreeHand',
    info: 'FreeHand is a simple 1 page project ive built using react,styled components, react icons, react router dom and a few others react components. Its a fully responsive webpage.',
    info2: '',
    url: 'https://free-hand.vercel.app/',
    repo: 'https://github.com/AleexCaires/FreeHand', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tiagoaleex@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/TiiagoAleex',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/AlexDesigns',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-caires-b7b39b174/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AleexCaires',
    },
  ],

};

