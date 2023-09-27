import React from 'react'
import { Col, Row } from 'react-grid-system'
import styles from './style.module.css'
import Reveal from '../../../../utils/reveal/reveal'
import ImageAnimation from '../../../../common/image/index'
import CommonButton from "../../../../common/button/index"
import { WrapperContainer } from '../../../../style-app'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import BannerSkinWell from '../../../../assets/banner/skinwell-img.png'

const BannerSkillWell = ({ filterCompany }) => {
    const { t } = useTranslation()
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <>
            <div className={styles.banner_section}>
                <WrapperContainer>
                    <div className={styles.banner_big_wrapp}>
                        <div className={styles.banner_row_wrap}>
                            <Row className={styles.banner_row}>
                                {
                                    filterCompany.map(elem => elem.pereparat.map(item => (
                                        <>
                                            <Col lg={6} md={12} sm={12} xs={12} className={styles.banner_col}>
                                                <div className={styles.banner_content_wrap}>
                                                    <Reveal>
                                                        <h4 className={styles.banner_title}>
                                                            {
                                                                LanguValue() == 'uz' ? item.name_uz : LanguValue() == 'ru' ? item.name_ru : LanguValue() == 'en' ? item.name_en : item.name_ru
                                                            }
                                                        </h4>
                                                    </Reveal>
                                                    <ul className={styles.banner_ul}>
                                                        <li>
                                                            <Reveal>
                                                                <p className={styles.banner_item_p}>
                                                                    {
                                                                        LanguValue() == 'uz' ?
                                                                            `${item.description_uz.slice(0, 200)}...` :
                                                                            LanguValue() == 'ru' ?
                                                                                `${item.description_ru.slice(0, 200)}...` :
                                                                                LanguValue() == 'en' ?
                                                                                    `${item.description_en.slice(0, 200)}...` : `${item.description_ru.slice(0, 200)}...`
                                                                    }
                                                                </p>
                                                            </Reveal>
                                                        </li>
                                                    </ul>

                                                    <div className={styles.btn_group}>
                                                        <CommonButton className={styles.left_btn}>
                                                            <NavLink to={`/product2/${item.id}`}>
                                                                {t("Card.0")}
                                                            </NavLink>
                                                        </CommonButton>
                                                        <CommonButton className={styles.right_btn}>
                                                            <NavLink to="/contact">
                                                                {t("Card.1")}
                                                            </NavLink>
                                                        </CommonButton>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className={styles.banner_col}>
                                                <div className={styles.banner_img_wrapp}>
                                                    <ImageAnimation src={item.image1} style={{
                                                        width: "100%",
                                                        aspectRatio: 3 / 4
                                                    }} />
                                                </div>
                                            </Col>
                                        </>
                                    )))
                                }
                            </Row>
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default BannerSkillWell