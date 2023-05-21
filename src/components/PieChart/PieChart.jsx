import React from 'react';
import { Chart } from 'react-google-charts';
import { PieBox, Sentiment } from './PieChart.styled';

const PieChart = ({ percentage }) => {
  const data = [
    ['Pac Man', 'Percentage'],
    ['', percentage],
    ['', 100 - percentage],
  ];
  const options = {
    width: 400,
    height: 400,
    backgroundColor: '#F5F7FB',
    legend: 'none',
    pieSliceText: 'none',
    pieHole: 0.8,
    pieStartAngle: 0,
    tooltip: { trigger: 'none' },
    slices: {
      0: { color: '#0009D6' },
      1: { color: 'transparent' },
    },
  };
  return (
    <PieBox>
      <h4>Overall sentiment</h4>
      <Chart
        chartType="PieChart"
        data={data}
        className="pie-chart"
        options={options}
      />
      <Sentiment>
        Sentiment score is <span>{percentage}%</span>
      </Sentiment>
    </PieBox>
  );
};

export default PieChart;
