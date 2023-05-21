import React from 'react';
import { Chart } from 'react-google-charts';
import { PieBox } from './PieChart.styled';
import { useMediaQuery } from 'react-responsive';

const SentimentChart = () => {
  const isMobile = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1279 });

  const chartWidth = isMobile ? 250 : isTablet ? 300 : 400;
  const chartHeight = isMobile ? 250 : isTablet ? 300 : 400;

  const data = [
    [
      'Element',
      'Sentiment',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['😀', 1400, '#06B41D', `1400`],
    ['😐', 256, '#8677FE', `256`],
    ['😦', 6, '#FF718D', `6`],
  ];

  const options = {
    width: chartWidth,
    height: chartHeight,
    fontSize: 24,
    hAxis: {
      textPosition: 'none',
      gridlines: {
        color: 'transparent',
      },
    },
    vAxis: {
      gridlines: {
        color: 'transparent',
      },
    },

    backgroundColor: '#F5F7FB',
    bar: { groupWidth: '95%', right: 0, height: '50%' },
    legend: { position: 'none' },
  };

  return (
    <PieBox>
      <h4>Sentiment breakdown</h4>
      <Chart
        chartType="BarChart"
        className="sentiment-chart"
        // width="100%"
        // height="400px"
        data={data}
        options={options}
      />
    </PieBox>
  );
};

export default SentimentChart;
