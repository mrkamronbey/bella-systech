import React, { useState } from "react";
import styles from "./style.module.css";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import "./style.css";
import Reveal from "../../../utils/reveal/reveal";
import { PostContact, GetContact } from "../../../redux/contact/index";
import { Button, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const RequestConsultation = () => {
  const { t } = useTranslation();
  const [names, setNames] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);
  const [disableds, setDisableds] = useState(true);

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const contactPost = useSelector((state) => state.contact);
  const contactGet = useSelector((state) => state.contact.GetContact?.Data);
  console.log(contactGet)
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
      style: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "500"
      },
    });
    contactPost.postContact.Success == true ?
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: t("Contact.7"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
      }, 2500) : setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: t("Contact.7"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
      }, 2500)
  }
  const dispatch = useDispatch()
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(PostContact({
      name: names,
      phone_number: phone,
      email: mail
    }));
    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    openMessage()
  };

  console.log({
    name: names,
    phone_number: phone,
    email: mail
  })

  useEffect(() => {
    !names || !phone || !mail ? setDisableds(true) : setDisableds(false);
  }, [mail]);
  return (
    <>
      <div className={styles.request_consultation_section} id="form">
        <div className={styles.Container}>
          <Row className={styles.request_row}>
            <Col className={styles.request_col} lg={6} md={12} sm={12}>
              <Reveal>
                <span>{t("Form.5")}</span>
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
                      onChange={(e) => setNames(e.currentTarget.value)}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("Form.2")}
                      onChange={(e) => setPhone(e.currentTarget.value)}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("Form.3")}
                      onChange={(e) => setMail(e.currentTarget.value)}
                      required
                    />
                    <i class="bx bxs-check-circle"></i>
                    {/* <i class='bx bxs-x-circle'></i> */}
                  </div>
                  {contextHolder}
                  <button disabled={disableds}
                    // onClick={openMessage} 
                    style={{ cursor: "pointer" }} type="submit">{t("Form.4")}</button>
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
