import { lazy } from "react";

const Home = lazy(() => import("./../layouts/home/index"));
const About = lazy(() => import("./../layouts/about/index"));
const Contact = lazy(() => import("./../layouts/contact/index"));
const Category = lazy(() => import("./../layouts/category/index"))
const Product = lazy(() => import("./../layouts/product/index"))
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
    id: 3,
    path: "/product",
    component: <Product />,
  },
];
