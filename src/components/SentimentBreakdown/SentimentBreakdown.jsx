import React from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';
import { useMediaQuery } from 'react-responsive';

const SentimentBreakdown = ({ sentimentBreakdown }) => {
  const { positive, neutral, negative } = sentimentBreakdown;
  const isMobile = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1279 });

  const chartWidth = isMobile ? 250 : isTablet ? 220 : 250;
  const chartHeight = isMobile ? 250 : isTablet ? 200 : 200;

  const labelStyle = {
    fontWeight: '600',
    fontSize: isMobile ? 10 : isTablet ? 10 : 14,
    fill: `#080A43`,
  };

  return (
    <VictoryChart
      width={chartWidth}
      height={chartHeight}
      domainPadding={{ x: 15, y: 0 }}
      dependentAxis
    >
      <VictoryAxis style={{ axisLabel: { fill: 'none' } }} />
      <VictoryBar
        horizontal
        style={{
          data: {
            fill: `#FBB96C`,
            width: 30,
          },
        }}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel style={labelStyle} />}
        cornerRadius={5}
        data={[{ x: '🙁', y: negative }]}
      />

      <VictoryBar
        horizontal
        style={{
          data: {
            fill: `#8677FE`,
            width: 30,
          },
        }}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel style={labelStyle} />}
        cornerRadius={5}
        data={[{ x: '😐', y: neutral }]}
      />
      <VictoryBar
        horizontal
        style={{
          data: {
            fill: `#06B41D`,
            width: 30,
          },
        }}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel style={labelStyle} />}
        cornerRadius={5}
        data={[{ x: '😀', y: positive }]}
      />
    </VictoryChart>
  );
};

export default SentimentBreakdown;
