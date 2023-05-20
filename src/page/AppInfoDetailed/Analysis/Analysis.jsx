import React from 'react';
import { Chart } from 'react-google-charts';
import { Container, ChartBox } from './Analysis.styled';
export const data = [
  ['Pac Man', 'Percentage'],
  ['', 84],
  ['', 100],
];
export const options = {
  legend: 'none',
  pieSliceText: 'false',
  pieStartAngle: 180,
  tooltip: { trigger: 'none' },
  slices: {
    0: { color: 'red' },
    1: { color: 'transparent' },
  },
};
const Analysis = () => {
  return (
    <Container>
      <h2>Analysis</h2>

      <ChartBox>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={400}
          height={400}
        />
      </ChartBox>
    </Container>
  );
};

export default Analysis;
