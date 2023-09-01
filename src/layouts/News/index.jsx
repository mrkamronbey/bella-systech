import React, { useEffect } from "react";
import NewsComponent from "../../components/news";
import { Helmet, HelmetProvider } from "react-helmet-async";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News</title>
          <meta name='description' content="Lastest news" />
          <link rel="cononical" href="/news" />
        </Helmet>
        <NewsComponent />
      </HelmetProvider>
    </>
  );
}

export default News;
