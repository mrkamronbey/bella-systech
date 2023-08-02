import React, {useEffect} from "react";
import NewsMoreComponent from "../../components/news-more";

function NewsMore() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NewsMoreComponent />
    </>
  );
}

export default NewsMore;
