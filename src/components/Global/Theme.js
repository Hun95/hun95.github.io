import { css } from 'styled-components';

export const setColor = {
  signature: `rgb(254,213,45)`,
  darkBlue: `hsl(233, 26%, 24%)`,
  limeGreen: `hsl(136,65%, 51%) `,
  birghtCyan: ` hsl(192, 70%, 51%)`,
  grayishBlue: `hsl(233, 8%, 62%)`,
  lightGrayishBlue: `hsl(220, 16%, 96%)`,
  veryLightGray: `hsl(0, 0%, 98%)`,
  white: `hsl(0, 0%, 100%)`,
};

export const setContent = {
  center: 'center',
  space: 'space-between',
};

export const setFont = {
  fontSm: '0.875rem', //14px
  fontMed: '1.125rem', //18px
};

const sizes = {
  large: 1400,
  desktop: 1024,
  phone: 640,
};

// Iterate through the sizes and create a media template
export const breakUp = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const breakDown = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${(sizes[label] - 1) / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
