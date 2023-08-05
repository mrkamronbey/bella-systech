import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"));
const About = lazy(() => import("./../layouts/About/index"));
const Contact = lazy(() => import("./../layouts/Contact/index"));
const Category = lazy(() => import("./../layouts/category/index"))
const Product = lazy(() => import("./../layouts/product/index"))
const Product2 = lazy(() => import("./../layouts/product2/index"))
const Bialog = lazy(() => import("./../layouts/companies/bialob/index"))
const LutronicCompaines = lazy(() => import("./../layouts/companies/lutronic/index"))
const Lasemd = lazy(() => import("./../layouts/companies/lasemd/index"))
const Histolab = lazy(() => import("./../layouts/companies/histolab/index"))
const UltraFormer = lazy(() => import("./../layouts/companies/ultrafarm/index"))
const Skinwell = lazy(() => import("./../layouts/companies/skinwell/index"))
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
  {
    id: 3,
    path: "/product2",
    component: <Product2 />,
  },
  {
    id: 3,
    path: "/companies/bialog",
    component: <Bialog />,
  },
  {
    id: 3,
    path: "/companies/lutronic",
    component: <LutronicCompaines />,
  },
  {
    id: 3,
    path: "/companies/lasemd",
    component: <Lasemd />,
  },
  {
    id: 3,
    path: "/companies/histolab",
    component: <Histolab />,
  },
  {
    id: 3,
    path: "/companies/ultraformer",
    component: <UltraFormer />,
  },
  {
    id: 3,
    path: "/companies/skinwell",
    component: <Skinwell />,
  },
];
