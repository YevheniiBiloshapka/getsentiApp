import React from 'react';
import { VictoryPie } from 'victory';
import styled from 'styled-components';
const Sentiment = styled.p`
  position: absolute;
  text-align: center;
  max-width: 100px;
  top: 50%;
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

const CircularProgressbar = ({ sentimentBreakdown, setTitle }) => {
  const calculatePercentage = (value, total) => {
    return (value / total) * 100;
  };

  const { positive, neutral, negative } = sentimentBreakdown;
  const total = positive + neutral + negative;

  const data = [
    { x: 'Sentiment', y: calculatePercentage(positive, total) },
    { x: 'difference', y: 100 - calculatePercentage(positive, total) },
  ];

  const colorScale = ['#3f51b5', '#edf5ff'];

  return (
    <>
      <VictoryPie
        data={data}
        innerRadius={90}
        cornerRadius={5}
        labels={() => null}
        colorScale={colorScale}
        animate={{ duration: 1000 }}
      ></VictoryPie>
      <Sentiment>
        Sentiment score is{' '}
        <span>{Math.round(calculatePercentage(positive, total))}%</span>
      </Sentiment>
    </>
  );
};

export default CircularProgressbar;
