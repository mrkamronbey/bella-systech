import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import styles from "./styled.module.css";
import Reveal from "../../../../utils/reveal/reveal";

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <section className="counter_hero">
        <Row className={styles.benefits_hero_count_row}>
          <Col className={styles.benefits_hero_count_col} lg={3} md={3} sm={12} sx={12}>
            <div className={styles.count_wrap}>
              <strong className="strong" data-number="18">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={18}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span>+</span>
              </strong>
              <Reveal>
                <span className="text_span">{t("Benefits.2")}</span>
              </Reveal>
            </div>
          </Col>
          <Col className={styles.benefits_hero_count_col} lg={3} md={3} sm={12} sx={12}>
            <div className={styles.count_wrap}>
              <strong className="strong" data-number="180">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={180}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span>+</span>
              </strong>
              <Reveal>
                <span className="text_span">{t("Benefits.3")}</span>
              </Reveal>
            </div>
          </Col>
          <Col className={styles.benefits_hero_count_col} lg={3} md={3} sm={12} sx={12}>
            <div className={styles.count_wrap}>
              <strong className="strong" data-number="80">
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={80}
                >
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span>+</span>
              </strong>
              <Reveal>
                <span className="text_span">{t("Benefits.4")}</span>
              </Reveal>
            </div>
          </Col>
          <Col className={styles.benefits_hero_count_col} lg={3} md={3} sm={12} sx={12}>
            <div className={styles.count_wrap}>
              <strong className="strong" data-number="28">
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={28}
                >
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span>+</span>
              </strong>
              <Reveal>
                <span className="text_span">{t("Benefits.5")}</span>
              </Reveal>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Counter;
