import styled, { keyframes } from 'styled-components';

const LdsEllipsis1 = keyframes`

     0% {
      transform: translate(-10px, -10px);
    }
    25% {
      transform: translate(-10px, 10px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    75% {
      transform: translate(10px, -10px);
    }
    100% {
      transform: translate(-10px, -10px);
    }
`;

export const Circle = styled.span`
  width: 48px;
  height: 48px;
  display: block;
  position: relative;
  border: 3px solid #0009d6;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${LdsEllipsis1} 2s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    width: 6px;
    height: 24px;
    background: #0009d6;
    transform: rotate(-45deg);
    position: absolute;
    bottom: -20px;
    left: 46px;
  }
`;
