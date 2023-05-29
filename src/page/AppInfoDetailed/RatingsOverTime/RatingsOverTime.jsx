import React, { useState } from 'react';
import { Container, ChartBox, Title } from './RatingsOverTime.styled';
import RatingOverLineChart from 'components/RatingOverLineChart/RatingOverLineChart';
import { Select, MenuItem } from '@mui/material';
import Plot from 'react-plotly.js';

const RatingsOverTime = ({ starsTimeseries, reviewTimeseries }) => {
  const [selectedOption, setSelectedOption] = useState('stars');

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <Container>
          <h2>Reviews timeline</h2>
      <ChartBox>

        <Title>

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

        {selectedOption === 'count' && (
            <Plot
            data={reviewTimeseries.data}
            layout={reviewTimeseries.layout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {selectedOption === 'stars' && (
         <Plot
            data={starsTimeseries.data}
            layout={starsTimeseries.layout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </ChartBox>
    </Container>
  );
};

export { RatingsOverTime };
