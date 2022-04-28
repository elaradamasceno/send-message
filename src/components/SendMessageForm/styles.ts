import styled, { css } from "styled-components";

export const MessageFormWrapper = styled.div`
  ${({theme}) => css`
    background: #1b1b1f;
    padding: ${theme.pxToRem(24)};
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: relative;

    > button {
      background: transparent;
      border: 0;
      color: #c4c4cc;
      
      position: absolute;
      left: ${theme.pxToRem(24)};
      top: ${theme.pxToRem(24)};

      cursor: pointer;

      &:hover{
        filter: brightness(0.9);
      }
    }
  `}
`;

export const UserData = styled.header`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > div{
      padding: ${theme.pxToRem(3)};
      background: linear-gradient(100deg, #8c6ffe 0.48%, #ffcd1e 100%);
      border-radius: 50%;
      line-height: 0;

      img{
        width: ${theme.pxToRem(94)};
        height: ${theme.pxToRem(94)};
        border-radius: 50%;
        border: ${theme.pxToRem(6)} solid #121214;
      }
    }

    > strong {
      font-size: ${theme.pxToRem(24)};
      line-height: ${theme.pxToRem(30)};
      margin-top: ${theme.pxToRem(16)};

      span {
        display: flex;
        align-items: center;
        margin-top: ${theme.pxToRem(8)};
        color: #c4c4cc;

        svg{
          margin-right: ${theme.pxToRem(8)};
        }
      }
    }
  `}
`

export const Form = styled.form`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: ${theme.pxToRem(48)};

    background: #202024;

    label{
      padding: ${theme.pxToRem(18)} ${theme.pxToRem(24)};
      font-size: ${theme.pxToRem(20)};
      background: #29292e;
      font-weight: bold;
      text-align: left ;
    }

    textarea{
      background: transparent;
      border: 0;
      padding: ${theme.pxToRem(24)};
      resize: none;
      height: ${theme.pxToRem(160)};
      color: #e1e1e6;
      font-size: ${theme.pxToRem(16)};
      line-height: ${theme.pxToRem(24)};

      &:focus{
        outline: 0;
      }

      &::placeholder{
        color: #8d8d99;
      }
    }

    button{
      background: #ffcd1e;
      color: #1b1b1f;
      align-self: flex-end;
      cursor: pointer;

      border: 0;
      border-radius: ${theme.pxToRem(12)};
      margin: ${theme.pxToRem(24)};
      padding: 0px ${theme.pxToRem(32)};
      height: ${theme.pxToRem(40)};

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
    }
  `}
`