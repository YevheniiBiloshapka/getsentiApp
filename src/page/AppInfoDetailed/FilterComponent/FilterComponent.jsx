import React, { useState } from 'react';
import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';

const FilterComponent = () => {
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedSentiments, setSelectedSentiments] = useState([]);
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleStarsChange = event => {
    setSelectedStars(event.target.value);
  };

  const handleSentimentsChange = event => {
    setSelectedSentiments(event.target.value);
  };

  const handleMarketsChange = event => {
    setSelectedMarkets(event.target.value);
  };

  const handleDateFromChange = event => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = event => {
    setDateTo(event.target.value);
  };

  const handleApply = () => {
    const filterData = {
      stars: selectedStars,
      sentiments: selectedSentiments,
      markets: selectedMarkets,
      dateFrom: dateFrom,
      dateTo: dateTo,
    };

    // Do something with the filterData object
    console.log(filterData);
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
          {['0', '1', '2', '3', '4', '5'].map(value => (
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
          onChange={handleSentimentsChange}
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
          onChange={handleMarketsChange}
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
          onChange={handleDateFromChange}
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
          onChange={handleDateToChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>

      <Button
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

export default FilterComponent;
