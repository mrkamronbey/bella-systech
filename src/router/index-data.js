import { lazy } from "react";

const Home = lazy(() => import("./../layouts/home/index"));
const About = lazy(() => import("./../layouts/about/index"));
const Contact = lazy(() => import("./../layouts/contact/index"));

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    path: "/contact",
    component: <Contact />,
  },
];
