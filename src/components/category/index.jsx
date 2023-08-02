import React from "react";
import { useTranslation } from "react-i18next";
import HomeHero from "../../common/hero";
import styles from "./style.module.css";
import { Row, Col } from "react-grid-system";
import CategoryProduct from "./products";
import CategoryFilter from "./category_filter";
import CategeroyFilterMedia from "./category_filter_media";
const CategoryComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <HomeHero title={t("Category.0")} className={styles.Wrapper} Contact />
      <div className={styles.Container}>
        <Row>
          <Col lg={3}>
            <CategoryFilter />
            <CategeroyFilterMedia />
          </Col>
          <Col lg={9}>
            <CategoryProduct />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CategoryComponent;
