import React from 'react';
import { Container, ChartBox } from './Sentiment.styled';
import SentimentColumnChart from 'components/SentimentColumnChart/SentimentColumnChart';

const Sentiment = ({ sentimentTimeseries }) => {
  return (
    <Container>
      <h2>Sentiment timeline</h2>
      <ChartBox>
        <SentimentColumnChart sentimentTimeseries={sentimentTimeseries} />
      </ChartBox>
    </Container>
  );
};

export { Sentiment };
