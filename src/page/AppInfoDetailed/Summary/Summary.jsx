import React from 'react';
import {
  Container,
  TotalReviews,
  Overall,
  Average,
  Graphic,
  SummaryBox,
} from './Summary.styled';
import { Rating } from '@mui/material';
import BarChart from 'components/BarChart/BarChart';

import getSentiment from './getSentiment';

const Summary = ({
  totalReviews,
  overallSentiment,
  averageStars,
  starsBreakdown,
}) => {
  const sentimentIcon = getSentiment(overallSentiment);

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
          <BarChart starsBreakdown={starsBreakdown} />
        </Graphic>
      </Container>
    </SummaryBox>
  );
};

export default Summary;
