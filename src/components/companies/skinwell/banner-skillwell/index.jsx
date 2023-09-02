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

const BannerSkillWell = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4]
    return (
        <>
            <div className={styles.banner_section}>
                <WrapperContainer>
                    <div className={styles.banner_big_wrapp}>
                        <div className={styles.banner_row_wrap}>
                            <Row className={styles.banner_row}>
                                <Col lg={6} md={12} sm={12} xs={12} className={styles.banner_col}>
                                    <div className={styles.banner_content_wrap}>
                                        <Reveal>
                                            <h4 className={styles.banner_title}>
                                                Почему Skinwell Bio-Cellulose Mask?
                                            </h4>
                                        </Reveal>
                                        <ul className={styles.banner_ul}>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Способствует хорошему проникновению активной сыворотки
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Имеет высокий охлаждающий эффект

                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Натуральная
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Материал играет активную роль в стимулировании регенеративных процессов
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Заметный лифтинг-эффект
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        При наложении маски на лицо, очень мягкое и комфортное ощущение
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.banner_item_p}>
                                                        Не повреждается во время использования
                                                    </p>
                                                </Reveal>
                                            </li>
                                        </ul>

                                        <div className={styles.btn_group}>
                                            <CommonButton className={styles.left_btn}>
                                                <NavLink to="#">
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
                                        <ImageAnimation src={BannerSkinWell} style={{
                                            width: "100%",
                                            aspectRatio: 16 / 9
                                        }} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default BannerSkillWell