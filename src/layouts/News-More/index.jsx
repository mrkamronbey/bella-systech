import React, { useEffect } from "react";
import NewsMoreComponent from "../../components/news-more";
import { Helmet, HelmetProvider } from "react-helmet-async";

function NewsMore() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News Details</title>
          <meta name='description' content="News details" />
          <link rel="cononical" href="/newsmore" />
        </Helmet>
        <NewsMoreComponent />
      </HelmetProvider>

    </>
  );
}

export default NewsMore;
