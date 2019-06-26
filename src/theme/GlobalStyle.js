import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

*,*::before, *::after{
box-sizing:border-box;
}
html{
    /* 1 rem to 10px */
    font-size: 62.5%  
}

body{
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
}

`;
export default GlobalStyle;
