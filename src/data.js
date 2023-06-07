// import './assets'
const projects = [
  {
    id: 1,
    name: "Mobile Ordering App",
    description:
      "A mobile web app that allows users to order items by adding or removing them into a cart with checkout and feedback ratings functionality. Built with JavaScript, HTML, CSS, and Figma",
    href: "https://jimmysdiner.netlify.app/",
    image: "./assets/images/orderingApp.png",
  },
  {
    id: 2,
    name: "Quizzical",
    description:
      "A web app that pulls 5 random trivia questions from a database and displays them as a brief quiz. The app will score the user when they complete all questions and submit their result. Built with ReactJs, JavaScript, HTML, CSS, Vite, and API integration",
    image: "./assets/images/quizzical.png",
    href: "https://quiizzical.netlify.app",
  },
  {
    id: 3,
    name: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate provident fugit. Adipisci quos quia, dolore ab modi non quo repudiandae soluta quaerat sed.",
    image: "./assets/images/converter.png",
    href: " https://aconverter.netlify.app",
  },
  {
    id: 4,
    name: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate provident fugit. Adipisci quos quia, dolore ab modi non quo repudiandae soluta quaerat sed.",
    image: "./assets/images/intro-bg.jpeg",
  },
  {
    id: 5,
    name: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate provident fugit. Adipisci quos quia, dolore ab modi non quo repudiandae soluta quaerat sed.",
    image: "./assets/images/hero1.jpg",
  },
  {
    id: 6,
    name: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate provident fugit. Adipisci quos quia, dolore ab modi non quo repudiandae soluta quaerat sed.",
    image: "./assets/images/hero1.jpg",
  },
];

const links = [
  {
    id: 1,
    link: "Home",
    to: ".",
  },
  {
    id: 2,
    link: "About",
    to: "about",
  },
  {
    id: 3,
    link: "Blog",
    to: "blog",
  },
  {
    id: 4,
    link: "Projects",
    to: "project",
  },
  {
    id: 5,
    link: "Contact",
    to: "contact",
  },
];

export { links, projects };
