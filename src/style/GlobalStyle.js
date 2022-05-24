import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
    margin: 0 auto;
    padding: 0;
}

body {
    box-sizing: border-box;
    background-color: black;
}
`;
// 위 코드 주석아님 !!! velog에서 색깔이 초록색일뿐

export default GlobalStyle;