import { css } from "styled-components";

export const small = (props) => {
  return css`
    @media only screen and (min-width: 48em) {
      ${props}
    }
  `;
};

export const medium = (props) => {
  return css`
    @media only screen and (min-width: 64em) {
      ${props}
    }
  `;
};

export const large = (props) => {
  return css`
    @media only screen and (min-width: 85em) {
      ${props}
    }
  `;
};

export const xlarge = (props) => {
  return css`
    @media only screen and (min-width: 120em) {
      ${props}
    }
  `;
};

export const xxlarge = (props) => {
  return css`
    @media only screen and (min-width: 160em) {
      ${props}
    }
  `;
};
