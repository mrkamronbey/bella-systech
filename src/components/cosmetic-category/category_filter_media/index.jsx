import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Wrapper } from "../styled-index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css"
import "./style.css"
import CategoryFilterData from "./category_filter_data";
// import { CategoryGet } from "../../../../redux/category";
function CategeroyFilterMedia({ HandleClickClose ,data , companies }) {
  // const disptach = useDispatch();
  const {t} = useTranslation();
  // useEffect(() => {
  //   disptach(CategoryGet())
  // }, [])
  // const dataCategory = useSelector(state => state.category.categoryGet.data)
  const navigate = useNavigate();
  const HandleClickMore = (e) => {
    navigate(`/tour-category/${e.target.id}`);
    window.localStorage.setItem("CategoryId" , e.target.id)
    HandleClickClose();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <div className={styles.box}>

      <Accordion>
        <AccordionSummary
          style={{background:"white" , borderRadius : "20px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:"black"}}><span className={styles.Filter}>
          <i style={{fontSize:"16px" }} class='bx bx-filter-alt' ></i> {t("Category.3")}</span></Typography>
          
        </AccordionSummary>
        <AccordionDetails style={{background:"white"}}>
        <CategoryFilterData data={data}  companies={companies}/>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default CategeroyFilterMedia;
