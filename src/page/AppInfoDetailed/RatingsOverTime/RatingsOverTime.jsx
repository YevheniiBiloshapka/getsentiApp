import React, { useState } from 'react';
import { Container, ChartBox, Title } from './RatingsOverTime.styled';
import RatingOverLineChart from 'components/RatingOverLineChart/RatingOverLineChart';
import { Select, MenuItem } from '@mui/material';

const RatingsOverTime = ({ starsTimeseries, reviewTimeseries }) => {
  const [selectedOption, setSelectedOption] = useState('stars');

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <Container>
      <ChartBox>
        <Title>
          <h2>Reviews timeline</h2>
          <Select
            size="small"
            value={selectedOption}
            onChange={handleOptionChange}
            id="select-option"
          >
            <MenuItem value="stars">Average stars</MenuItem>
            <MenuItem value="count">Reviews count</MenuItem>
          </Select>
        </Title>

        {selectedOption === 'count' && <RatingOverLineChart data={reviewTimeseries} />}
        {selectedOption === 'stars' && <RatingOverLineChart data={starsTimeseries} />}
      </ChartBox>
    </Container>
  );
};

export { RatingsOverTime };
