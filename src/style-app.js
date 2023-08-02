import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 991px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const BigContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;
export const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Montserrat', sans-serif !important;
}

  html{
    scroll-behavior:smooth !important;
  }
    
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* background: #FAFAFA; */
    
  }

  /* ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #5A79E5; 
    border-radius: 10px;
  }
   
 
  ::-webkit-scrollbar-thumb {
    background: #03544c; 
    border-radius: 10px;
  }
  
  
  ::-webkit-scrollbar-thumb:hover {
    background: #03544c;
  } */
`;
