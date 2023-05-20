import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  [
    'Element',
    'Reviews',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify',
    },
  ],
  ['5', 60, '#0009D6', '60'],
  ['4', 80, '##0009D6', '80'],
  ['3', 30, '##0009D6', '30'],
  ['2', 20, '##0009D6', '20'],
  ['1', 5, '##0009D6', '5'],
];

export const options = {
  width: 290,
  height: 140,
  backgroundColor: '#F5F7FB',
  bar: {
    groupWidth: '95%',
    right: 0,
  },
  legend: { position: 'none' },
};
const BarChart = () => {
  return (
    <Chart
      chartType="BarChart"
      className="bar-chart"
      backgroundColor="red"
      width={290}
      height={140}
      position="absolute"
      data={data}
      options={options}
    />
  );
};

export default BarChart;
