import { nanoid } from 'nanoid';
import Resume from '../../public/Resume.pdf'

// HEAD DATA
export const headData = {
  title: 'Alex Caires | Portfolio', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio website', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: Resume // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'work.jpg',
    title: 'FreeHand',
    info: 'FreeHand is a simple 1 page project I built using react,styled components, react icons, react router dom and a few others react components. Its a fully responsive webpage.',
    info2: '',
    url: 'https://free-hand.vercel.app/',
    repo: 'https://github.com/AleexCaires/FreeHand', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuizGame.png',
    title: 'Quiz Game',
    info: 'This is a simple Quiz application built with React and Typescript, we get the random questions from Trivia API.',
    info2: 'Next steps on this project will be adding a leaderboard, and add a difficulty selector.(WIP) ',
    url: 'https://jogo-da-perguntinha.vercel.app/',
    repo: 'https://github.com/AleexCaires/Quiz-Game', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you want to know more about',
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

