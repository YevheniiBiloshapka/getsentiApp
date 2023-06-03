import React from 'react';
import { Container, ChartBox } from './Sentiment.styled';
import Plot from 'react-plotly.js';
const Sentiment = ({ sentimentTimeseries }) => {

  return (
    sentimentTimeseries &&
    <Container style={{ width: '100%' }}>
      <h2>Sentiment timeline</h2>
      <ChartBox>

        <Plot
          data={sentimentTimeseries.data}
          layout={sentimentTimeseries.layout}
          config={{
            displayModeBar: false,
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </ChartBox>
    </Container>
  );
};

export { Sentiment };
