import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

 * {
     font-family: 'MapoGoldenPier', sans-serif;
     margin: 0;
     padding: 0;
    
 }
 /* CSS Custom Properties Definitions */

:root {
  --maxWidth-none: "none";
  --maxWidth-xs: 20rem;
  --maxWidth-sm: 24rem;
  --maxWidth-md: 28rem;
  --maxWidth-lg: 32rem;
  --maxWidth-xl: 36rem;
  --maxWidth-2xl: 42rem;
  --maxWidth-3xl: 48rem;
  --maxWidth-4xl: 56rem;
  --maxWidth-full: "100%";
  --maxWidth-wrapper: var(--maxWidth-2xl);
  --spacing-px: "1px";
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",
    Times, serif;
  --font-body: var(--fontFamily-serif);
  --font-heading: var(--fontFamily-sans);
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;
  --fontSize-root: 16px;
  --lineHeight-none: 1;
  --lineHeight-tight: 1.1;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;
  /* 1.200 Minor Third Type Scale */
  --fontSize-0: 0.833rem;
  --fontSize-1: 1rem;
  --fontSize-2: 1.2rem;
  --fontSize-3: 1.44rem;
  --fontSize-4: 1.728rem;
  --fontSize-5: 2.074rem;
  --fontSize-6: 2.488rem;
  --fontSize-7: 2.986rem;
  --color-primary: #005b99;
  --color-text: #2e353f;
  --color-text-light: #4f5969;
  --color-heading: #1a202c;
  --color-heading-black: black;
  --color-accent: #d1dce5;
}

/* HTML elements */

*,
:after,
:before {
  box-sizing: border-box;
}

html {
  line-height: var(--lineHeight-normal);
  font-size: var(--fontSize-root);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--fontSize-1);
  color: var(--color-text);
}

footer {
  padding: var(--spacing-6) var(--spacing-0);
}

hr {
  background: var(--color-accent);
  height: 1px;
  border: 0;
}

/* Heading */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: MapoGoldenPier;
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  line-height: var(--lineHeight-tight);
  letter-spacing: -0.025em;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--fontWeight-bold);
  color: var(--color-heading);
}

h1 {
  font-weight: var(--fontWeight-black);
  font-size: var(--fontSize-6);
  color: var(--color-heading-black);
}

h2 {
  font-size: var(--fontSize-5);
}

h3 {
  font-size: var(--fontSize-4);
}

h4 {
  font-size: var(--fontSize-3);
}

h5 {
  font-size: var(--fontSize-2);
}

h6 {
  font-size: var(--fontSize-1);
}

h1 > a {
  color: inherit;
  text-decoration: none;
}

h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  text-decoration: none;
  color: inherit;
}

/* Prose */

p {
  line-height: var(--lineHeight-relaxed);
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
  padding: var(--spacing-0);
}

ul,
ol {
  margin-left: var(--spacing-0);
  margin-right: var(--spacing-0);
  padding: var(--spacing-0);
  margin-bottom: var(--spacing-8);
  list-style-position: outside;
  list-style-image: none;
}

ul li,
ol li {
  padding-left: var(--spacing-0);
  margin-bottom: calc(var(--spacing-8) / 2);
}

li > p {
  margin-bottom: calc(var(--spacing-8) / 2);
}

li *:last-child {
  margin-bottom: var(--spacing-0);
}

li > ul {
  margin-left: var(--spacing-8);
  margin-top: calc(var(--spacing-8) / 2);
}

blockquote {
  color: var(--color-text-light);
  margin-left: calc(-1 * var(--spacing-6));
  margin-right: var(--spacing-8);
  padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
  border-left: var(--spacing-1) solid var(--color-primary);
  font-size: var(--fontSize-2);
  font-style: italic;
  margin-bottom: var(--spacing-8);
}

blockquote > :last-child {
  margin-bottom: var(--spacing-0);
}

blockquote > ul,
blockquote > ol {
  list-style-position: inside;
}

table {
  width: 100%;
  margin-bottom: var(--spacing-8);
  border-collapse: collapse;
  border-spacing: 0.25rem;
}

table thead tr th {
  border-bottom: 1px solid var(--color-accent);
}

/* Link */

a {
  color: var(--color-primary);
  text-decoration: none;
}

/* Media queries */

@media (max-width: 42rem) {
  blockquote {
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
    margin-left: var(--spacing-0);
  }
  ul,
  ol {
    list-style-position: inside;
  }
}

 
`;
