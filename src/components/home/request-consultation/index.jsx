import React, { useRef } from "react";
import styles from "./style.module.css";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import "./style.css";
import Reveal from "../../../utils/reveal/reveal";
// import { useDispatch } from "react-redux";
// import { PostContact } from "../../redux/contact";

const RequestConsultation = () => {
  const { t } = useTranslation();
  const name = useRef();
  const phone_number = useRef();
  const email = useRef();
  // const dispatch = useDispatch();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    // await dispatch(PostContact({ 
    //     name: name.current.value,
    //     phone_number : phone_number.current.value,
    //     email : email.current.value
    //  }));
    window.location.reload()
  };
  return (
    <>
      <div className={styles.request_consultation_section} id="form">
        <div className={styles.Container}>
          <Row className={styles.request_row}>
            <Col className={styles.request_col} lg={6} md={12} sm={12}>
              <Reveal>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi soluta consectetur distinctio vero quia perspiciatis aperiam fugit totam nulla quibusdam quam, iusto explicabo dicta maiores voluptas optio repellendus eos provident deserunt? Aspernatur sunt nemo, necessitatibus ea dolorum sequi id dolore molestias adipisci cupiditate exercitationem reiciendis omnis, expedita fugiat saepe. Atque ipsam odit minima reiciendis, qui veritatis maxime omnis nobis obcaecati ipsa rerum perferendis iste tempore nostrum quod repellendus quis cupiditate asperiores dolores! Quam molestias atque, consectetur vero repellat quibusdam aperiam non dicta hic harum. Vitae amet, fugit ipsum autem excepturi velit rerum. Architecto voluptatem error debitis, atque labore libero?</span>
              </Reveal>
            </Col>
            <Col className={styles.request_col} lg={6} md={12} sm={12}>
              <Reveal>
                <h3 className={styles.request_col_title}>{t("Form.0")}</h3>
              </Reveal>
              <Reveal>
                <form className="request_form" onSubmit={HandleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder={t("Form.1")}
                      ref={name}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("Form.2")}
                      ref={phone_number}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("Form.3")}
                      ref={email}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  <button style={{ cursor: "pointer" }} type="submit">{t("Form.4")}</button>
                </form>
              </Reveal>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RequestConsultation;
