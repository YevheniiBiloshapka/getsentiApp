import React from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';
import { useMediaQuery } from 'react-responsive';

const axisStyle = {
  data: { fill: '#0009D6', width: 20 },
};
const labelStyle = {
  fill: '#0009D6', // Изменение цвета нижних лейблов
  fontWeight: '800', // Добавление жирного стиля к нижним лейблам
};

const BarChart = ({ starsBreakdown }) => {
  const isMobile = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1279 });

  const chartWidth = isMobile ? 300 : isTablet ? 300 : 300;
  const chartHeight = isMobile ? 220 : isTablet ? 220 : 220;
  const data = convertStarsBreakdown(starsBreakdown);
  return (
    <div>
      <VictoryChart
        height={chartHeight}
        width={chartWidth}
        domainPadding={{ x: 10, y: 50 }}
        dependentAxis
      >
        <VictoryAxis style={{ axisLabel: { fill: 'none' } }} />
        <VictoryBar
          horizontal
          style={axisStyle}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel style={labelStyle} />}
          cornerRadius={5}
          data={data}
        />
      </VictoryChart>
    </div>
  );
};

function convertStarsBreakdown(starsBreakdown) {
  const data = [];
  for (const key in starsBreakdown) {
    const x = parseInt(key);
    const y = starsBreakdown[key];
    data.push({ x, y });
  }
  return data;
}

export default BarChart;
