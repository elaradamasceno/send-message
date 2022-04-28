import styled, { css } from 'styled-components';

export const MessageListWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    > img{
      height: ${theme.pxToRem(28)};
      margin: ${theme.pxToRem(32)} 0px;
    }

  `}
`;

export const MessageList = styled.ul`
  ${({theme}) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.pxToRem(40)};
    flex: 1;

    li{
      max-width: ${theme.pxToRem(440)};

      p{
        font-size: ${theme.pxToRem(20)};
        line-height: ${theme.pxToRem(28)};
      }
    }

    &:nth-child(3){
      margin-left: ${theme.pxToRem(80)};
    }
  `}
`;

export const MesssageUser = styled.div`
  ${({theme}) => css`
    margin-top: ${theme.pxToRem(16)};
    display: flex;
    align-items: center;

    > div {
      padding: ${theme.pxToRem(2)};
      background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
      border-radius: 50%;
      line-height: 0;

      img{
        width: ${theme.pxToRem(30)};
        height: ${theme.pxToRem(30)};
        border-radius: 50%;
        border: ${theme.pxToRem(4)} solid #121214;
      }
    }

    span{
      font-size: ${theme.pxToRem(16)};
      margin-left: ${theme.pxToRem(12)};
    }
  `}
`; 