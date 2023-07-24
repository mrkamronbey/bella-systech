import React from 'react'
import './style.css'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from 'swiper/modules';
import CommonButton from '../../../common/button';
import Reveal from '../../../utils/reveal/reveal';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import BannerImg from '../../../assets/banner'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useTranslation } from 'react-i18next';

const HomeHeroSlider = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.home_hero_section}>
                {/* <WrapperContainer> */}
                <Swiper
                    // grabCursor={true}
                    effect={'creative'}
                    navigation={true}
                    shadow={true}
                    loop={true}
                    speed={850}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            origin: 'left center',
                            translate: ['-5%', 0, -200],
                            rotate: [0, 100, 0],
                        },
                        next: {
                            origin: 'right center',
                            translate: ['5%', 0, -200],
                            rotate: [0, -100, 0],
                        },
                    }}
                    modules={[Navigation, EffectCreative]}
                    className="mySwiper6"
                >
                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/01.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 1</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/02.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 2</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/03.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 3</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/04.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 4</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/05.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 5</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti facere earum deleniti adipisci in accusamus ea minus quia nesciunt, nostrum doloribus ullam autem dolorum eos ducimus eum laboriosam, iste consectetur corporis doloremque distinctio reiciendis? Veritatis corporis, dolor necessitatibus facilis cumque quisquam vitae ex officiis, dolorum dolores praesentium! Ipsam quas officia facilis. Facere molestias autem atque labore, soluta nam vel ipsum nemo asperiores sint ex doloremque dolor reiciendis debitis harum at in molestiae voluptatem eos? Labore animi dolorem expedita accusantium, atque quis inventore unde tempora aliquam. Cupiditate incidunt tempore maxime ut nisi aperiam quasi et expedita maiores inventore, ipsam optio obcaecati laborum laudantium odio numquam. Fugit soluta hic porro eos culpa aliquam iusto repellat, nihil accusamus? Pariatur sapiente, eius, aperiam, corporis eaque nemo fugit deleniti ex id porro quibusdam tenetur. Culpa praesentium deleniti, velit, expedita provident nihil nostrum repellendus, quisquam blanditiis dicta quo. Deserunt saepe inventore quae veritatis modi, sapiente iste! Ab id officia ipsam modi temporibus delectus. Quia accusantium ab tempora pariatur molestiae, deleniti explicabo sapiente blanditiis earum odit magnam alias nesciunt nemo at error repellat amet obcaecati maiores, quidem voluptatem sed suscipit? Minima sapiente aliquam eveniet asperiores tempora vel tempore animi nesciunt repellendus? Ipsa debitis illum mollitia magni officiis atque sapiente fuga eaque. Tempore soluta animi alias corrupti itaque fuga impedit, cum, officia rem cumque quia numquam quos dolores perferendis id sed minus deleniti voluptatem tenetur? Quibusdam voluptatibus assumenda modi eius quidem, ratione doloremque explicabo veritatis dicta minima distinctio doloribus porro expedita maiores perspiciatis? Ex explicabo, sunt aliquid voluptates beatae magnam! Eligendi iusto amet deserunt totam magnam quaerat consequatur distinctio. Deserunt quibusdam sed non enim doloribus necessitatibus. Delectus sit tempora velit praesentium quos ab tempore, corrupti facere. Perferendis labore repellat omnis adipisci, dolores illo hic quis illum saepe explicabo accusantium culpa nam soluta facere rem totam quod possimus! Tenetur amet, odio explicabo sunt dolor accusamus commodi quos voluptates non. Earum numquam laboriosam laudantium ratione dolor neque explicabo provident sint, ipsam eaque. Distinctio, veritatis? Officiis, facere soluta reprehenderit illum quae iusto delectus amet doloribus voluptas adipisci eos. Quam eaque ea nisi fugit ad iusto laudantium explicabo, quibusdam voluptate odio consequuntur rem ratione. Earum laboriosam sed maiores, incidunt, molestiae voluptas unde reiciendis iure similique doloremque voluptates inventore dignissimos, ut quod veritatis quibusdam ipsum quia error vero fugiat? Libero quo unde repellendus, at asperiores, a dolorem reprehenderit sint quisquam, quasi recusandae voluptatibus animi architecto nobis. Quisquam unde molestias sapiente ex, assumenda, autem vel porro natus dolor delectus aspernatur! Perferendis fugiat quo beatae quaerat. Quasi cumque quidem at cum modi similique quisquam eius autem nesciunt! Laborum distinctio, eveniet possimus aperiam, sint quo tempore repudiandae nulla molestiae amet dolorem necessitatibus? Consequuntur iure, molestias natus non ratione perferendis quisquam architecto voluptas delectus, neque, inventore dolorem? Fugiat ex repellat consectetur? Quisquam voluptate, dicta eum, tempora doloribus fugiat veniam optio eaque molestias deserunt, nostrum vero quibusdam id nihil dolorum cupiditate. Voluptate alias atque tenetur beatae tempora totam sit? Asperiores cum modi sit doloremque necessitatibus animi? Sunt aperiam libero eligendi architecto. Repellat harum quaerat vitae consequatur qui molestias, voluptatem esse impedit ipsum eligendi est illo deleniti quisquam iure, accusantium maiores. Quaerat, odit perferendis? Quas, aliquid itaque magnam amet quam voluptatibus velit quos distinctio odit fugiat doloremque asperiores nostrum nulla a ea beatae recusandae cum accusamus tenetur molestias aliquam perferendis non nihil. Ea aperiam beatae temporibus cum, magni a ut excepturi, soluta quam sint harum autem cumque porro dolor aspernatur. Nostrum tempora fuga quisquam expedita quis mollitia cupiditate pariatur eveniet quaerat sunt quia repellat necessitatibus libero dolorum provident aliquid, excepturi blanditiis tempore ipsam ab! Dicta asperiores aperiam unde, dolorem dolore possimus officiis tempora quam, commodi et ad quae dolores corrupti cupiditate minima quos voluptatum eligendi quisquam. Dignissimos at ex, architecto ducimus esse quae voluptatibus, explicabo repellendus dolores voluptatum tempora eveniet nam error? Natus explicabo earum officia quis at dolorem consequuntur enim sapiente quidem. Repellat deserunt quis enim eaque ipsam, quasi odio possimus at quidem qui reiciendis, sequi debitis itaque. Impedit dolorum repellendus soluta distinctio, veritatis blanditiis accusantium officiis odio delectus reiciendis eveniet aliquid voluptate voluptatem magnam consectetur magni iusto molestias consequatur. Error quas natus voluptatibus quis reiciendis nihil velit quaerat. Molestias blanditiis autem veniam. Placeat hic ea aliquid, quaerat ipsum architecto. Nostrum officia nam doloribus eligendi numquam ullam molestiae, a ipsam dolorem, aperiam libero ratione aspernatur. Delectus maxime sunt magnam debitis, consequatur culpa ullam blanditiis sapiente, soluta doloremque accusamus quisquam, illo sequi molestias ipsa praesentium obcaecati? Tempora rem maiores voluptates praesentium nisi ducimus fugit quisquam repudiandae quidem eos molestias, aut iusto illo beatae eveniet recusandae laudantium, labore quod facere enim! Id sunt, atque dolores, in fuga ex nulla amet architecto, laborum veniam earum tempora itaque nam repellat numquam cum magnam tenetur vel doloribus similique officia provident eveniet possimus! Esse consequuntur, veniam voluptatum distinctio sed animi voluptas quae vel quia dolore repellendus voluptates numquam inventore aperiam quisquam fugit atque, harum magnam. Beatae est quasi tenetur, vitae aliquid fuga consectetur quibusdam sed voluptas optio cumque deserunt, rem suscipit voluptatum? Iure voluptatem nesciunt dignissimos tempore aliquam ullam iste soluta, totam amet sit delectus velit esse quos quam quas corporis, incidunt dolorem impedit ut. Alias accusantium nisi, voluptas modi quisquam et. Numquam quas deleniti tempora. Culpa exercitationem, asperiores cumque aspernatur, vero, nostrum ipsam iste voluptatum excepturi possimus autem nisi. Dignissimos vitae quam excepturi officia veritatis nemo nulla recusandae, asperiores, hic debitis numquam assumenda est a blanditiis maxime consequuntur? Saepe, sunt deserunt. Deserunt ex esse distinctio voluptates ab iste nostrum inventore quaerat consectetur voluptatibus, ipsam quibusdam amet nemo officiis nulla, similique sit hic quas minus? Quas explicabo facere libero perferendis itaque provident sequi recusandae ab dicta sapiente voluptas accusantium, soluta, porro aliquid quod dolorum architecto suscipit nisi nostrum unde repellendus aut, nemo ad? Quae doloremque ullam consequuntur praesentium alias quas pariatur quod unde temporibus. Blanditiis recusandae officia temporibus voluptatum nisi voluptates placeat eius molestiae atque, mollitia neque inventore, cumque voluptas consequatur eligendi illo laboriosam ullam voluptatibus. Aperiam impedit ea sequi ullam nihil, nemo modi fuga cum, nam adipisci necessitatibus, doloribus recusandae minus. Blanditiis fugit doloribus ut facilis sint! Deserunt hic necessitatibus in consequuntur!</p>
                {/* </WrapperContainer> */}
            </div>
        </>
    )
}

export default HomeHeroSlider