import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: ; */
  /* @media only screen and (max-width: 991px) {
    display: none;
  } */
  .ant-select {
    color: #656565 !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 100% !important;
  }
  .ant-select-selector {
    padding: 0 5px !important;
    color: #656565 !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: 100% !important;
  }

  .svgs {
    display: none;
    margin-right: 6px;
  }
  .ant-select-arrow {
    color: #656565 !important;
    /* margin-right: 20px !important; */
    margin-top: -5px !important;
  }
  select {
    background-color: transparent;
    color: white;
    padding: 2px 3px;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 38px;
    color: #000000;
  }
  select option {
    color: black;
  }
  a {
    background: #ffd700;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
    padding-top: 18px;
    padding-bottom: 19px;
    padding-left: 41px;
    padding-right: 31px;
    text-decoration: none;
  }
  button {
    display: none;
  }
  .bx-globe {
    font-size: 20px;
    color: #656565;
  }

  @media only screen and (max-width: 991px) {
    .bx-globe {
      display: none;
    }
    .svgs {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 6px;
    }
    .ant-select-selector {
      width: 100% !important;
      padding: 0 !important;
      color: #000 !important;
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 600 !important;
      line-height: 130% !important;
    }

    .ant-select-selection-item {
      color: #000 !important;
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 500 !important;
    }

    .ant-select-arrow {
      color: #000 !important;
    }
  }

  @media only screen and (max-width: 1024px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
  }
  @media only screen and (max-width: 872px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
    button {
      display: block;
      background-color: transparent;
      border: none;
    }
  }
  @media only screen and (max-width: 449px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 10px;
      padding-right: 9px;
      font-size: 18px;
    }
    select {
      background-color: transparent;
      color: white;
      padding: 3px 5px;
      border: none;
      cursor: pointer;
      outline: none;
    }
  }
`;
