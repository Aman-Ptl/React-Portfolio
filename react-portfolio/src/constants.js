// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import MMMUT from './assets/education_logo/mmmut_logo.png';
import JNV from './assets/education_logo/jnv_logo.png';
import JNV1 from './assets/education_logo/jnv_logo1.png';

// Project Section Logo's
import restaurantApp from './assets/work_logo/restaurant.png';
import gymApp from './assets/work_logo/gym.png';
import frontend from './assets/work_logo/frontend.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: MMMUT,
      college: "Madan Mohan Malaviya University of Technology, Gorakhpur",
      date: "Nov 2022 - May 2026",
      grade: "7.2 CGPA",
      desc: "Final Year B.Tech Student | Information Technology, Currently I am pursuing B.Tech in Information Technology from Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. Passionate about web development, problem-solving, and learning new technologies.",
      degree: "Btech in Information Technology Branch",
    },
    {
      id: 1,
      img: JNV,
      school: "Jawahar Navodaya Vidyalay, Ayodhya",
      date: "Apr 2019 - Mar 2020",
      grade: "88.8%",
      desc: " I completed my Class 12 education from Jawahar Navodaya Vidyalaya (JNV), Ayodhya, under the CBSE board, with a focus on Physics, Chemistry, and Mathematics (PCM) along with Computer Science",
      degree: "Class-12th",
    },
    {
      id: 2,
      img: JNV1,
      school: "Jawahar Navodaya Vidyalay, Ayodhya",
      date: "Apr 2017 - March 2018",
      grade: "82.4%",
      desc: "I completed my class 10 education from Jawahar Navodaya Vidyalaya (JNV), Ayodhya, under the CBSE board, where I studied Maths, Science, and Social Science.",
      degree: "Class-10th",
    },
  ];
  export const projects = [
    {
      id: 0,
      title: "Restaurant Aplication",
      description:
        "A full-featured MERN Stack-based Restaurant Web App, Mobile-friendly and optimized interface using Tailwind CSS and React.",
      image: restaurantApp,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Axios","Node.js", "Express.js","MongoDB"],
      github: "https://github.com/Aman-Ptl/Restaurant-app",
      webapp: "https://vercel.com/aman-patel-s-projects/restaurant-app",
    },
    {
      id: 1,
      title: "Gym application",
      description:
        "A fully responsive web-based Gym Application System using modern React & Tailwind CSS for a responsive experience across all devices.",
      image: gymApp,
      tags: ["React JS", "Node.js", "Express", "HTML", "CSS", "JavaScript","react-router-dom","vite","react-toastify","lucide-react","Axios","cors","dotenv","nodemailer"],
      github: "https://github.com/Aman-Ptl/GYM_Application",
      webapp: "https://vercel.com/aman-patel-s-projects/gym-application",
    },
    {
      id: 2,
      title: "React frontend page",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: frontend,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aman-Ptl/frontend-project",
      webapp: "https://vercel.com/aman-patel-s-projects/frontend-project",
    },
  ];