import { createGlobalStyle } from 'styled-components';
import { setColor } from './Theme';
export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: 'Iropke Batang';
  font-style: normal;
  font-weight: 400;
  src: url(//cdn.jsdelivr.net/font-iropke-batang/1.2/IropkeBatangM.eot);
  src: url(//cdn.jsdelivr.net/font-iropke-batang/1.2/IropkeBatangM.eot?#iefix) format('embedded-opentype'),
       url(//cdn.jsdelivr.net/font-iropke-batang/1.2/IropkeBatangM.woff) format('woff'),
       url(//cdn.jsdelivr.net/font-iropke-batang/1.2/IropkeBatangM.ttf) format('truetype');
}

@font-face {
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
${
  '' /* body::-webkit-scrollbar {
width: 13px;
}
body::-webkit-scrollbar-track {
background:yellow;

}
body::-webkit-scrollbar-thumb {
background-color: red;
border-radius: 20px;
} */
}
 html {
   font-size:100%;
   box-sizing: border-box;
  -webkit-box-sizing: inherit;
 }
 *, *::before, *::after {
     font-family: 'Iropke Batang', sans-serif;
     -webkit-box-sizing: inherit;
     box-sizing:inherit;
   
   }

a, a:visited {
  text-decoration:none;
  color: ${setColor.grayishBlue};
}
body{
  margin:0;
  padding: 0;
  line-Height: 1.3;
  font-size:1.125rem;
  top:0;
  bottom:0;
  left:0;
  right:0;

}






`;
