import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import CommonCard from '../../../common/card'
import { Col, Row } from 'react-grid-system'

import CardImg from '../../../assets/card/cardimg1.png'
import { useTranslation } from 'react-i18next'

const HomeOurCosmetics = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3]
    return (
        <>
            <div className={styles.home_our_cosmetics_section}>
                <WrapperContainer>
                    <h4 className={styles.home_cosmetics_title}>{t("Card.2")}</h4>
                    <Row className={styles.home_cosmetics_row}>
                        {
                            arr.map(() => (
                                <Col className={styles.home_cosmetics_col} lg={4} md={12} sm={12}>
                                    <CommonCard
                                        src={CardImg}
                                        card_title="Краткая информация"
                                        card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        card_btn_text1={t("Card.0")}
                                        card_btn_text2={t("Card.1")}
                                        toDetails="#"
                                        toOrder="#"
                                        isBtn={true}
                                        isTitle={true}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default HomeOurCosmetics