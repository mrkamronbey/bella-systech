import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"));
const About = lazy(() => import("./../layouts/About/index"));
const Contact = lazy(() => import("./../layouts/Contact/index"));
const Category = lazy(() => import("./../layouts/category/index"));
const Product = lazy(() => import("./../layouts/product/index"));
const Product2 = lazy(() => import("./../layouts/product2/index"));
const Bialog = lazy(() => import("./../layouts/companies/bialob/index"));
const LutronicCompaines = lazy(() =>
  import("./../layouts/companies/lutronic/index")
);
const Lasemd = lazy(() => import("./../layouts/companies/lasemd/index"));
const Histolab = lazy(() => import("./../layouts/companies/histolab/index"));
const UltraFormer = lazy(() =>
  import("./../layouts/companies/ultrafarm/index")
);
const Classys = lazy(() => import("../layouts/companies/classys/index"));
const Skinwell = lazy(() => import("./../layouts/companies/skinwell/index"));
const News = lazy(() => import("./../layouts/News/index"));
const NewsMore = lazy(() => import("./../layouts/News-More/index"));
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
    path: "/product2",
    component: <Product2 />,
  },
  {
    id: 9,
    path: "/companies/bialob",
    component: <Bialog />,
  },
  {
    id: 10,
    path: "/companies/lutronic",
    component: <LutronicCompaines />,
  },
  {
    id: 11,
    path: "/companies/lasemd",
    component: <Lasemd />,
  },
  {
    id: 12,
    path: "/companies/histolab",
    component: <Histolab />,
  },
  {
    id: 13,
    path: "/companies/ultraformer",
    component: <UltraFormer />,
  },
  {
    id: 14,
    path: "/companies/skinwell",
    component: <Skinwell />,
  },
  {
    id: 15,
    path: "/companies/classys",
    component: <Classys />,
  },
  {
    id: 16,
    path: "/benefits",
    component: <Benefits />,
  },
  {
    id: 17,
    path: "/join",
    component: <JoinUs />,
  },
];
