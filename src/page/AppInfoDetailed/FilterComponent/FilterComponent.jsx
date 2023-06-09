import React, { useState } from 'react';
import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';

const FilterComponent = ({ onFilter }) => {
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedSentiments, setSelectedSentiments] = useState([]);
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleStarsChange = event => {
    const selectedValues = event.target.value;
    const sortedValues = selectedValues.slice().sort((a, b) => b - a);
    setSelectedStars(sortedValues);
  };

  const handleApply = () => {
    const filterData = {
      stars: selectedStars.join(','),
      sentiment: selectedSentiments.map(sentiment => sentiment.toLowerCase()).join(','),
      market: selectedMarkets.map(sentiment => sentiment.toLowerCase().replace(/ /g, "_")).join(','),
      date_range_after: dateFrom,
      date_range_before: dateTo,
    };
    onFilter(filterData);
  };

  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']} // Отображение в колонку на мобильных, в строку на планшетах и более широких устройствах
      alignItems="center"
      gap={1}
      sx={{
        background: '#EDF5FF',
        border: `1px solid #dedff2`,
        boxShadow: '0px 0px 5px rgba(0, 9, 40, 0.2)',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <FormControl sx={{ width: '100%' }}>
        <TextField
          select
          variant="outlined"
          size="small"
          label="Stars"
          value={selectedStars}
          onChange={handleStarsChange}
          SelectProps={{
            multiple: true,
            displayEmpty: true,
            renderValue: selected => selected.join(', '),
          }}
        >
          {[1, 2, 3, 4, 5].map(value => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl sx={{ width: '100%' }}>
        <TextField
          select
          variant="outlined"
          size="small"
          label="Sentiments"
          value={selectedSentiments}
          onChange={event => setSelectedSentiments(event.target.value)}
          SelectProps={{
            multiple: true,
            displayEmpty: true,
            renderValue: selected => selected.join(', '),
          }}
        >
          <MenuItem value="Positive">Positive</MenuItem>
          <MenuItem value="Neutral">Neutral</MenuItem>
          <MenuItem value="Negative">Negative</MenuItem>
        </TextField>
      </FormControl>

      <FormControl sx={{ width: '100%' }}>
        <TextField
          select
          variant="outlined"
          size="small"
          label="Markets"
          value={selectedMarkets}
          onChange={event => setSelectedMarkets(event.target.value)}
          SelectProps={{
            multiple: true,
            displayEmpty: true,
            renderValue: selected => selected.join(', '),
          }}
        >
          <MenuItem value="App Store">App Store</MenuItem>
          <MenuItem value="Google Play">Google Play</MenuItem>
        </TextField>
      </FormControl>

      <FormControl sx={{ width: '100%' }}>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          label="From"
          value={dateFrom}
          onChange={event => setDateFrom(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>

      <FormControl sx={{ width: '100%' }}>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          label="To"
          value={dateTo}
          onChange={event => setDateTo(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>

      <Button
        sx={{ width: '100%' }}
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleApply}
      >
        Filter
      </Button>
    </Box>
  );
};

export { FilterComponent };
