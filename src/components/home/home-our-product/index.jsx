import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import CommonCard from '../../../common/card'
import { Col, Row } from 'react-grid-system'

import CardImg from '../../../assets/card/cardimg.png'
import { useTranslation } from 'react-i18next'

const HomeOurProduct = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.home_our_product_section}>
                <WrapperContainer>
                    <h4>{t("Card.2")}</h4>
                    <Row className={styles.home_our_row}>
                        <Col className={styles.home_our_col} lg={4}>
                            <CommonCard
                                src={CardImg}
                                card_title="Краткая информация"
                                card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                card_btn_text1={t("Card.0")}
                                card_btn_text2={t("Card.1")}
                            />
                        </Col>
                        <Col className={styles.home_our_col} lg={4}>
                            <CommonCard
                                src={CardImg}
                                card_title="Краткая информация"
                                card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                card_btn_text1={t("Card.0")}
                                card_btn_text2={t("Card.1")}
                            />
                        </Col>
                        <Col className={styles.home_our_col} lg={4}>
                            <CommonCard
                                src={CardImg}
                                card_title="Краткая информация"
                                card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                card_btn_text1={t("Card.0")}
                                card_btn_text2={t("Card.1")}
                            />
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default HomeOurProduct