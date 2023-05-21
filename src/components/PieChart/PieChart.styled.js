import styled from 'styled-components';

export const PieBox = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 10px;
  background-color: #f5f7fb;
  width: 100%;
  max-width: 360px;
  height: 300px;
  @media screen and (min-width: 744px) {
    max-width: 600px;
    height: 400px;
  }
  & h4 {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    z-index: 100;
    color: #080a43;
  }

  & .pie-chart {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .sentiment-chart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 1280px) {
      top: 50%;
      left: 50%;
    }
  }
`;

export const Sentiment = styled.p`
  position: absolute;
  text-align: center;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  font-weight: 300;
  font-size: 14px;
  line-height: 140%;

  color: rgba(8, 10, 67, 0.6);
  & span {
    font-weight: 500;
    font-size: 14px;

    color: #080a43;
  }
`;
