import { lazy } from "react";
const Home = lazy(() => import("./../layouts/home/index"));
const About = lazy(() => import("./../layouts/about/index"));
const Contact = lazy(() => import("./../layouts/contact/index"));
const Category = lazy(() => import("./../layouts/category/index"));
const News = lazy(() => import("./../layouts/News/index"));
const NewsMore = lazy(() => import("./../layouts/News-More/index"));
const Product = lazy(() => import("./../layouts/product/index"));
const Benefits = lazy(() => import("./../layouts/benefits/index"));
const JoinUs = lazy(() => import("../layouts/joinus/index"));

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
    id: 4,
    path: "/category",
    component: <Category />,
  },
  {
    id: 5,
    path: "/news",
    component: <News />,
  },
  {
    id: 6,
    path: "/newsmore",
    component: <NewsMore />,
  },
  {
    id: 7,
    path: "/product",
    component: <Product />,
  },
  {
    id: 8,
    path: "/benefits",
    component: <Benefits />,
  },
  {
    id: 9,
    path: "/join",
    component: <JoinUs />,
  },
];
