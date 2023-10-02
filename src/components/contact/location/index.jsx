import React from "react";
import { WrapperContainer } from "../../../style-app";
import styled from "./style.module.css";

function Location({ t }) {
  return (
    <>
      <div className={styled.location_wrapper_section}>
        <WrapperContainer>
          <div className={styled.location_section}>
            <div className={styled.our_location_box}>
              <div>
                <h3 className={styled.our_location_text}>{t("Contact.1")}</h3>
                <p className={styled.our_location_subtext}>{t("Contact.2")}</p>
              </div>
              <div>
                <h3>Наш телефон:</h3>
                <p>+998 71 231 99 08</p>
                <p>+998 90 735 55 44</p>
                <p>+998 97 781 99 88</p>

              </div>
              <div>
                <h3>{t("Contact.3")}</h3>
                <p className={styled.email}>info@bella-systech.uz</p>
              </div>
              <div>
                <h3>{t("Contact.4")}</h3>
                <ul>
                  <li>
                    <div className={styled.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_81_1593)">
                          <path
                            d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_81_1593">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>@bella-systech</p>
                  </li>
                  <li>
                    <div className={styled.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_81_1598)">
                          <path
                            d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_81_1598">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>@bella-systech</p>
                  </li>
                  <li>
                    {" "}
                    <div className={styled.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_81_1610)">
                          <path
                            d="M3 9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H17C18.0609 5 19.0783 5.42143 19.8284 6.17157C20.5786 6.92172 21 7.93913 21 9V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H7C5.93913 19 4.92172 18.5786 4.17157 17.8284C3.42143 17.0783 3 16.0609 3 15V9Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 9L15 12L10 15V9Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_81_1610">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>@bella-systech</p>
                  </li>
                  <li>
                    <div className={styled.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_81_1603)">
                          <path
                            d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 7.5V7.51"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_81_1603">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>@bella-systech</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </WrapperContainer>
        <button>
          <a href="https://www.google.com/maps/place/%D0%90%D0%B9%D0%B1%D0%B5%D0%BA+%D0%A1%D0%B8%D1%82%D0%B8/@41.2951181,69.2726002,17.86z/data=!4m14!1m7!3m6!1s0x38aef5d290444809:0x272e0bcf798f813c!2sBella-Systech+Uzbekistan!8m2!3d41.2950615!4d69.2739976!16s%2Fg%2F11s20vmmxj!3m5!1s0x38ae8b8d9cfd0b8f:0x383f21aa516f1ce6!8m2!3d41.2963491!4d69.2729266!16s%2Fg%2F11rvlr941w?entry=ttu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g clip-path="url(#clip0_99_14135)">
                <path
                  d="M21 7V7.01167"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9997 15.1667L16.9163 9.33335C16.5233 8.62289 16.3223 7.82216 16.3334 7.01027C16.3446 6.19839 16.5673 5.40346 16.9797 4.70402C17.392 4.00457 17.9798 3.42483 18.6848 3.02206C19.3898 2.61929 20.1877 2.40744 20.9997 2.40744C21.8116 2.40744 22.6095 2.61929 23.3146 3.02206C24.0196 3.42483 24.6073 4.00457 25.0197 4.70402C25.4321 5.40346 25.6548 6.19839 25.6659 7.01027C25.677 7.82216 25.4761 8.62289 25.083 9.33335L20.9997 15.1667Z"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 5.54166L10.5 4.66666L3.5 8.16666V23.3333L10.5 19.8333L17.5 23.3333L24.5 19.8333V17.5"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 4.66666V19.8333"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 17.5V23.3333"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_99_14135">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>{t("Contact.6")}</span>
          </a>
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.2327872725232!2d69.27260023435!3d41.29511807753941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d290444809%3A0x272e0bcf798f813c!2sBella-Systech%20Uzbekistan!5e0!3m2!1sru!2s!4v1690722507257!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Location;
