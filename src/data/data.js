import Project1 from "../assets/projects/project1.png"
import Project2 from "../assets/projects/project2.png"
import Project3 from "../assets/projects/project3.png"
import Project4 from "../assets/projects/project4.png"

import Service1 from "../assets/services/data-science.png"
import Service2 from "../assets/services/development.png"
import Service3 from "../assets/services/ui-ux.png"



export const projects = [
  {
    id: 1,
    img: Project1,
    alt: 'Project 1',
    category: 'UI/UX DESIGN',
    title: 'Project I',
  },
  {
    id: 2,
    img: Project2,
    alt: 'Project 2',
    category: 'UI/UX DESIGN / DEVELOPMENT / DATA SCIENCE',
    title: 'Project II',
  },
  {
    id: 3,
    img: Project3,
    alt: 'Project 3',
    category: 'UI/UX DESIGN',
    title: 'Project III',
  },
  {
    id: 4,
    img: Project4,
    alt: 'Project 4',
    category: 'UI/UX DESIGN / DEVELOPMENT',
    title: 'Project IV',
  },
];

export const services = [
  {
    id: 1,
    img: Service1,
    category: 'UI/UX',
    alt: "ui ux",
    description: 'We design interfaces that enhance beauty and usability, ensuring every click feels natural. Our focus is creating experiences that connect emotionally and guide users effortlessly.',
  },
  {
    id: 2,
    img: Service2,
    category: 'Development',
    alt: "development",
    description: 'From frontend to backend, we build robust, reliable, and scalable digital solutions. Our goal is to turn your ideas into high-performance web applications.',
  },
  {
    id: 3,
    img: Service3,
    category: 'Data Science',
    alt: "data science",
    description: 'We uncover patterns in your data to bring meaningful growth. Combining smart logic and deep learning helps you see what truly matters.',
  },
];
