import React from 'react';
import { Container, TotalReviews, Overall, Average, Graphic, SummaryBox } from './Summary.styled';
import { Rating } from '@mui/material';
import Plot from 'react-plotly.js';
import getSentiment from './getSentiment';


const Summary = ({ totalReviews, overallSentimentNum, averageStars, starsBreakdown }) => {
  const sentimentIcon = getSentiment(overallSentimentNum);

  return (
    <SummaryBox>
      <h2>Summary</h2>
      <Container>
        <TotalReviews>
          <h3>Total Reviews</h3>
          <p>{totalReviews}</p>
        </TotalReviews>
        <Overall>
          <h3>Overall Sentiment</h3>
          {sentimentIcon}
        </Overall>
        <Average>
          <h3>Average Ratings</h3>
          <p>{averageStars}</p>
          <Rating name="simple-controlled" readOnly value={averageStars} />
        </Average>
        <Graphic>
           <h3 style={{ 'marginBottom': '0', 'marginTop': '0' }}>Stars breakdown</h3>
          {starsBreakdown && <Plot
            data={starsBreakdown.data}
            layout={starsBreakdown.layout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}

          />}
        </Graphic>
      </Container>
    </SummaryBox>
  );
};

export { Summary };
