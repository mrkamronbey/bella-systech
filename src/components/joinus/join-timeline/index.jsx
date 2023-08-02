import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import TimelineObserver from "react-timeline-animation";
// import Timeline from "./timeline";
import { fireConfetti } from "../confetti";
import "./styles.css";
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import Reveal from '../../../utils/reveal/reveal'
import { motion } from "framer-motion";

const Timeline = ({ setObserver, callback }) => {
    const { t } = useTranslation()
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");
    const [message5, setMessage5] = useState("");
    const [message6, setMessage6] = useState("");
    const [message7, setMessage7] = useState("");
    const [message8, setMessage8] = useState("");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);
    const timeline7 = useRef(null);
    const timeline8 = useRef(null);

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);
    const circle7 = useRef(null);
    const circle8 = useRef(null);

    const someCallback1 = () => {
        setMessage1(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_left_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.1")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.2")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
        callback();
    };

    const someCallback2 = () => {
        setMessage2(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_right_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.3")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.4")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
    };

    const someCallback3 = () => {
        setMessage3(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_left_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.5")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.6")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
    };

    const someCallback4 = () => {
        setMessage4(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_right_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.7")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.8")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
    };

    const someCallback5 = () => {
        setMessage5(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_left_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.9")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.10")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );

    };

    const someCallback6 = () => {
        setMessage6(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_right_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.11")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.12")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
    };

    const someCallback7 = () => {
        setMessage7(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_left_wrapp}>
                    <Reveal>
                        <h4 className={styles.timeline_title}>{t("Cooperation.13")}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.timeline_text}>
                            {t("Cooperation.14")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
    };

    const someCallback8 = () => {
        setMessage8(
            <>
                <motion.div
                    transition={{ delay: 0.2, duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.message_bottom_wrapp}>
                    <Reveal>
                        <p className={styles.timeline_text_bottom}>
                            {t("Cooperation.15")}
                        </p>
                    </Reveal>
                </motion.div>
            </>
        );
        fireConfetti();
    };

    useEffect(() => {
        setObserver(timeline1.current);
        setObserver(timeline2.current);
        setObserver(timeline3.current);
        setObserver(timeline4.current);
        setObserver(timeline5.current);
        setObserver(timeline6.current);
        setObserver(timeline7.current);
        setObserver(timeline8.current);

        setObserver(circle1.current, someCallback1);
        setObserver(circle2.current, someCallback2);
        setObserver(circle3.current, someCallback3);
        setObserver(circle4.current, someCallback4);
        setObserver(circle5.current, someCallback5);
        setObserver(circle6.current, someCallback6);
        setObserver(circle7.current, someCallback7);
        setObserver(circle8.current, someCallback8);
    }, []);

    return (
        <div className='timeline_big_wrapp'>
            <div className="wrapper">
                <div className="circleWrapper">
                    <div id="circle1" ref={circle1} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_301_17710)">
                                <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 10.6V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V10.6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 10.6V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V10.6" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_17710">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message1">
                        {message1}
                    </div>
                </div>
                <div id="timeline1" ref={timeline1} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle2" ref={circle2} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_301_17688)">
                                <path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 20H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 20H17" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 16V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 16V20" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 16V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 16V20" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 10H9L11 13L13 7L14 10H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 10H9L11 13L13 7L14 10H17" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_17688">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message2">{message2}</div>
                </div>
                <div id="timeline2" ref={timeline2} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle3" ref={circle3} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_301_17702)">
                                <path d="M3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12H8C8.26522 12 8.51957 12.1054 8.70711 12.2929C8.89464 12.4804 9 12.7348 9 13V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12H8C8.26522 12 8.51957 12.1054 8.70711 12.2929C8.89464 12.4804 9 12.7348 9 13V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V13Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H10C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H10C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V9Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H16C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H16C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V5Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 20H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 20H18" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_17702">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message3">{message3}</div>
                </div>
                <div id="timeline3" ref={timeline3} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle4" ref={circle4} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7C6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057L12.7931 7.79289L14.2073 9.20711L10.5201 12.8943L9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z" fill="white" />
                            <path d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7C6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057L12.7931 7.79289L14.2073 9.20711L10.5201 12.8943L9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z" fill="white" fill-opacity="0.1" />
                        </svg>
                    </div>
                    <div className="message message4">{message4}</div>
                </div>
                <div id="timeline4" ref={timeline4} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle5" ref={circle5} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_301_17714)">
                                <path d="M3 21H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 21H21" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 9H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 9H14" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 7V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 7V11" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_17714">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message5">{message5}</div>
                </div>
                <div id="timeline5" ref={timeline5} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle6" ref={circle6} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_302_17721)">
                                <path d="M14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 18C7 17.4696 6.78929 16.9609 6.41421 16.5858C6.03914 16.2107 5.53043 16 5 16C4.46957 16 3.96086 16.2107 3.58579 16.5858C3.21071 16.9609 3 17.4696 3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20C5.53043 20 6.03914 19.7893 6.41421 19.4142C6.78929 19.0391 7 18.5304 7 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 18C7 17.4696 6.78929 16.9609 6.41421 16.5858C6.03914 16.2107 5.53043 16 5 16C4.46957 16 3.96086 16.2107 3.58579 16.5858C3.21071 16.9609 3 17.4696 3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20C5.53043 20 6.03914 19.7893 6.41421 19.4142C6.78929 19.0391 7 18.5304 7 18Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 18C21 17.4696 20.7893 16.9609 20.4142 16.5858C20.0391 16.2107 19.5304 16 19 16C18.4696 16 17.9609 16.2107 17.5858 16.5858C17.2107 16.9609 17 17.4696 17 18C17 18.5304 17.2107 19.0391 17.5858 19.4142C17.9609 19.7893 18.4696 20 19 20C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 18C21 17.4696 20.7893 16.9609 20.4142 16.5858C20.0391 16.2107 19.5304 16 19 16C18.4696 16 17.9609 16.2107 17.5858 16.5858C17.2107 16.9609 17 17.4696 17 18C17 18.5304 17.2107 19.0391 17.5858 19.4142C17.9609 19.7893 18.4696 20 19 20C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 18H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 18H17" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 16L13 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 16L13 8" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 8L6 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 8L6 16" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_302_17721">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message6">{message6}</div>
                </div>
                <div id="timeline6" ref={timeline6} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle7" ref={circle7} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_302_17729)">
                                <path d="M12 4V7M8 4V10M16 4V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 4V7M8 4V10M16 4V10" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_302_17729">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="message message7">{message7}</div>
                </div>
                <div id="timeline7" ref={timeline7} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle8" ref={circle8} className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z" fill="white" />
                            <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z" fill="white" fill-opacity="0.1" />
                        </svg>
                    </div>
                    <div className="message message8">
                        <div className={styles.message_wrapp}>
                            <h4>{message8}</h4>
                        </div>
                    </div>
                </div>
                <div id="timeline8" ref={timeline8} className="timeline" />
            </div>
        </div>
    );
};



const JoinTimeline = () => {
    const [message, setMessage] = useState("");

    const onCallback = () => {
        console.log("awesome");
    };

    return (
        <>
            <div className={styles.join_section}>
                <WrapperContainer>
                    <div className={styles.timeline_wrapp}>
                        <TimelineObserver
                            initialColor="#e5e5e5"
                            fillColor="#DF2027"
                            handleObserve={(setObserver) => (
                                <Timeline
                                    callback={onCallback}
                                    className="timeline"
                                    setObserver={setObserver}
                                />
                            )}
                        />
                        <div className="stub2">{message}</div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    );
}

export default JoinTimeline