import React from 'react';
import { Container, ChartBox, Box } from './Analysis.styled';
import CircularProgressbar from 'components/CircularProgressbar/CircularProgressbar';
import SentimentBreakdown from 'components/SentimentBreakdown/SentimentBreakdown';

const Analysis = ({ sentimentBreakdown }) => {
  return (
    <Container>
      <h2>Analysis</h2>

      <Box>
        <ChartBox>
          <h3>Overall sentiment</h3>
          <CircularProgressbar sentimentBreakdown={sentimentBreakdown} />
        </ChartBox>
        <ChartBox>
          <h3>Sentiment breakdown</h3>
          <SentimentBreakdown sentimentBreakdown={sentimentBreakdown} />
        </ChartBox>
      </Box>
    </Container>
  );
};

export default Analysis;
