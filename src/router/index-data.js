import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"));
const About = lazy(() => import("./../layouts/About/index"));
const Contact = lazy(() => import("./../layouts/Contact/index"));
const Category = lazy(() => import("./../layouts/category/index"));
const News = lazy(() => import("./../layouts/News/index"));
const NewsMore = lazy(() => import("./../layouts/News-More/index"));

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
  {
    id: 3,
    path: "/category",
    component: <Category />,
  },
  {
    id: 4,
    path: "/news",
    component: <News />,
  },
  {
    id: 5,
    path: "/newsmore",
    component: <NewsMore />,
  },
];
