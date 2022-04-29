import styled, { css } from 'styled-components';

import backgroundImage from './assets/background.svg';

type ContentWrapperProps = {
  hasUser: boolean
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({theme, hasUser}) => css`
    max-width: ${props => props.theme.pxToRem(1200)};
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr ${props => props.theme.pxToRem(453)};
    column-gap: ${props => props.theme.pxToRem(120)};
    position: relative;

    /* ::before{
      content: '';
      height: 100vh;
      width: 420px;
      background: url(${backgroundImage});
      background-size: contain;
      position: absolute;
      right: -200px;
      top: 0;
    } */

  `}
`
