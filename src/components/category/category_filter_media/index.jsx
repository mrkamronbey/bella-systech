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
// import { CategoryGet } from "../../../../redux/category";
function CategeroyFilterMedia({ HandleClickClose }) {
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
          <Typography style={{color:"black"}}>{t("Header.0")}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{background:"white"}}>
          <ul style={{ overflowX: "scroll" , margin:"0" }}>
          <div className={styles.checkbox}> 
        <input type="radio" id="age1" name="age" value="30" />
        <label for="age1">Эстетические лазеры</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2">Контурная пластика и скульптурирование тела</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age3" name="age" value="100" />
        <label for="age3">Технологии для лица</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age4" name="age" value="100" />
        <label for="age4">Портативные устройства</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age5" name="age" value="100" />
        <label for="age5">Многофункциональные платформы</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age6" name="age" value="100" />
        <label for="age6">Уход за кожей</label>
      </div>
      <p className={styles.Title}>{t("Category.2")}</p>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand1" name="brend" value="30" />
        <label for="brand1">Classys Lutronic</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand2" name="brend" value="60" />
        <label for="brand2">Histolab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand3" name="brend" value="100" />
        <label for="brand3">Skinwell</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand4" name="brend" value="100" />
        <label for="brand4">Bnv bio lab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand4" name="brend" value="100" />
        <label for="brand4">Juvelook</label>
      </div>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default CategeroyFilterMedia;
