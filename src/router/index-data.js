import { lazy } from "react";

const Home = lazy(() => import("../layouts/home/index"));
const About = lazy(() => import("./../layouts/about/index"));
const Contact = lazy(() => import("./../layouts/contact/index"));
const Category = lazy(() => import("./../layouts/category/index"));
const Product = lazy(() => import("./../layouts/product/index"));
const Product2 = lazy(() => import("./../layouts/product2/index"));
const Bialog = lazy(() => import("./../layouts/companies/bialob/index"));
const CategoryPereparat = lazy(() => import("./../layouts/category/index"))
const LutronicCompaines = lazy(() => import("./../layouts/companies/lutronic/index")
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
    id: 4,
    path: "/category-pereparat",
    component: <CategoryPereparat />,
  },
  {
    id: 5,
    path: "/news",
    component: <News />,
  },
  {
    id: 6,
    path: "/newsmore/:id",
    component: <NewsMore />,
  },
  {
    id: 7,
    path: "/product/:id",
    component: <Product />,
  },
  {
    id: 8,
    path: "/product2/:id",
    component: <Product2 />,
  },
  {
    id: 9,
    path: "/companies/:name",
    component: <Bialog />,
  },
  {
    id: 10,
    path: "/companies/:name",
    component: <LutronicCompaines />,
  },
  {
    id: 11,
    path: "/companies/:name",
    component: <Lasemd />,
  },
  {
    id: 12,
    path: "/companies/:name",
    component: <Histolab />,
  },
  {
    id: 13,
    path: "/companies/:name",
    component: <UltraFormer />,
  },
  {
    id: 14,
    path: "/companies/:name",
    component: <Skinwell />,
  },
  {
    id: 15,
    path: "/companies/:name",
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
