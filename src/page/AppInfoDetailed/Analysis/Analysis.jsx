import React from 'react';
import { Container, ChartBox } from './Analysis.styled';
import PieChart from 'components/PieChart/PieChart';
import SentimentChart from 'components/PieChart/SentimentChart';

const Analysis = () => {
  return (
    <Container>
      <h2>Analysis</h2>

      <ChartBox>
        <PieChart percentage={100} />
        <SentimentChart />
      </ChartBox>
    </Container>
  );
};

export default Analysis;
