import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({theme}) => css`
    max-width: ${props => props.theme.pxToRem(1200)};
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr ${props => props.theme.pxToRem(453)};
    column-gap: ${props => props.theme.pxToRem(120)};
    position: relative;
  `}
`
