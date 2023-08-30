import React from "react";
import { useTranslation } from "react-i18next";
import HomeHero from "../../common/hero";
import styles from "./style.module.css";
import { Row, Col } from "react-grid-system";
import CategoryProduct from "./products";
import CategoryFilter from "./category_filter";
import CategeroyFilterMedia from "./category_filter_media";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AparatGet } from "../../redux/aparat";
import { CompanyGet } from "../../redux/company";
import {PereparatGet} from "../../redux/pereparat"
import {PereparatCategoryGet} from "../../redux/pereparat-category"
const CategoryPereparatComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PereparatCategoryGet())
  }, [])
    const data = useSelector(state => state.pereparatcategory.PereparatCategoryGet.data)
    const dataproduct = useSelector(state => state.pereparat.PereparatGet.data)
    console.log(dataproduct);
    useEffect(() => {
      dispatch(CompanyGet())
    }, [])
    useEffect(() => {
      dispatch(PereparatGet())
    }, [])
    
      const companies = useSelector(state => state.company.CompanyGet.data)
  return (
    <>
      <HomeHero title={t("Category.0")} className={styles.Wrapper} Contact />
      <div className={styles.Container}>
        <Row>
          <Col lg={3}>
            <CategoryFilter data={data} companies={companies}/>
            <CategeroyFilterMedia data={data} />
          </Col>
          <Col lg={9}>
            <CategoryProduct  dataproduct={dataproduct}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CategoryPereparatComponent;
