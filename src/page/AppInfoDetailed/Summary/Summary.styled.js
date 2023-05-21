import styled from 'styled-components';

export const SummaryBox = styled.div`
  padding: 40px 0;
  & h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    text-transform: capitalize;

    color: #080a43;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background: #f5f7fb;
  position: relative;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 160px;

    flex: 1;

    & h3 {
      margin-bottom: 10px;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;

      color: rgba(8, 10, 67, 0.6);
    }
    & p {
      font-weight: 700;
      font-size: 32px;
      line-height: 140%;
      text-transform: capitalize;

      color: #080a43;
    }
    border-bottom: 1px solid #dedff2;
    @media screen and (min-width: 744px) {
      border-bottom: none;
      border-right: 1px solid #dedff2;
      &:nth-child(2),
      &:nth-child(4) {
        border: none;
      }
      &:last-child {
        border: none;
      }
    }
    @media screen and (min-width: 1280px) {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-right: 1px solid #dedff2;
      }
    }
  }
  @media (max-width: 743px) {
    flex-direction: column;
  }
  @media (min-width: 744px) and (max-width: 1279px) {
    flex-wrap: wrap;

    & div {
      flex-basis: 50%;
    }
  }
`;

export const TotalReviews = styled.div`
  min-height: 160px;
  max-height: 160px;
`;

export const Overall = styled.div`
  min-height: 160px;
  max-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  & svg {
    width: 44px;
    height: 44px;
  }
  & .good {
    color: #06b41d;
  }
  & .normal {
    color: #8677fe;
  }
  & .bad {
    color: #fbb96c;
  }
`;
export const Average = styled.div`
  min-height: 160px;
  max-height: 160px;
`;
export const Graphic = styled.div`
  position: relative;
  min-height: 160px;
  max-height: 160px;
  & div {
    border: none !important;
  }
  & #reactgooglegraph-1 {
    border: none;
    & div {
      border: none;
      & div:first-child {
        border: none;
        height: 150px !important;
        position: none !important;
      }
    }
  }
  & .bar-chart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
