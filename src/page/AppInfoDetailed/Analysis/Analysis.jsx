import React from 'react';
import { Container, ChartBox, Box } from './Analysis.styled';
import CircularProgressbar from 'components/CircularProgressbar/CircularProgressbar';
import SentimentBreakdown from 'components/SentimentBreakdown/SentimentBreakdown';
import Plot from 'react-plotly.js';

const Analysis = ({ overallSentiment, sentimentBreakdown }) => {
  return (
    <Container>
      <Box>
        <ChartBox>
          <h3>Overall sentiment</h3>
          {overallSentiment && <Plot
            data={overallSentiment.data}
            layout={overallSentiment.layout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />}
        </ChartBox>
        <ChartBox>
          <h3>Sentiment breakdown</h3>
          {sentimentBreakdown && <Plot
            data={sentimentBreakdown.data}
            layout={sentimentBreakdown.layout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />}
        </ChartBox>
      </Box>
    </Container>
  );
};

export { Analysis };
