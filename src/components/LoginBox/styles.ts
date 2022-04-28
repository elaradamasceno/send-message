import styled, { css } from "styled-components";

import banner from '../../assets/banner-girl.png';

export const LoginBoxWrapper = styled.div`
  ${({theme}) => css`
    height: 100vh;
    width: 100%;
    background: #1b1b1f94 url(${banner}) no-repeat center top;

    padding: ${theme.pxToRem(440)} ${theme.pxToRem(80)} 0px;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong{
      font-size: ${theme.pxToRem(32)};
      line-height: ${theme.pxToRem(36)};
      display: block;
    }
  `}
`

export const SignInWithGitHub = styled.a`
  ${({theme}) => css`
    background: #ffcd1e;
    color: #09090a;

    border-radius: ${theme.pxToRem(12)};
    margin-top: ${theme.pxToRem(32)};
    padding: 0px ${theme.pxToRem(40)};
    height: ${theme.pxToRem(56)};

    font-size: ${theme.pxToRem(14)};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
      filter: brightness(0.9);
    }

    svg{
      margin-right: ${theme.pxToRem(16)};
    }
  `}
`