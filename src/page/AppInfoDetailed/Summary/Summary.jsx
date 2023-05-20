import React, { useState } from 'react';
import {
  Container,
  TotalReviews,
  Overall,
  Average,
  Graphic,
  SummaryBox,
} from './Summary.styled';
import { SvgIcon } from '@mui/material';
import BarChart from 'components/BarChart/BarChart';
import StarIcon from '@mui/icons-material/Star';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';

const Summary = () => {
  const [sentiment, setSentiment] = useState('good');

  return (
    <SummaryBox>
      <h2>Summary</h2>
      <Container>
        <TotalReviews>
          <h3>Total Reviews</h3>
          <p>12,345</p>
        </TotalReviews>
        <Overall>
          <h3>Overall Sentiment</h3>

          {sentiment === 'good' && (
            <SvgIcon className="good" component={SentimentVerySatisfiedIcon} />
          )}
          {sentiment === 'normal' && (
            <SvgIcon className="normal" component={SentimentDissatisfiedIcon} />
          )}
          {sentiment === 'bad' && (
            <SvgIcon className="bad" component={MoodBadIcon} />
          )}
        </Overall>
        <Average>
          <h3>Average Ratings</h3>
          <p>
            4.1
            <span>
              <SvgIcon component={StarIcon} inheritViewBox />
            </span>
          </p>
        </Average>
        <Graphic>
          <BarChart />
        </Graphic>
      </Container>
    </SummaryBox>
  );
};

export default Summary;
