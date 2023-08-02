import React from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Counter from "./counter";



const BenefitsCount = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.benefits_count_section}>
        <WrapperContainer>
          <div className={styles.count_row_wrap}>
            <div className={styles.statistics}>
              <Counter />
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default BenefitsCount;
