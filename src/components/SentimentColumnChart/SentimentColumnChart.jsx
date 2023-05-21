import React, { useState } from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
  VictoryZoomContainer,
} from 'victory';
import { useMediaQuery } from 'react-responsive';

const axisStyle = {
  axis: { stroke: '#DEDFF2' },
  tickLabels: { fontSize: 8, fill: '#080A43' },
};

const SentimentColumnChart = ({ sentimentTimeseries }) => {
  const isMobile = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1279 });

  const chartWidth = isMobile ? 320 : isTablet ? 600 : 800;
  const chartHeight = isMobile ? 320 : isTablet ? 300 : 300;

  const transformData = dataset => {
    const keys = Object.keys(dataset[0]).filter(key => key !== 'date');
    return keys.map(key => {
      return dataset.map(data => ({
        x: data.date,
        y: data[key],
      }));
    });
  };
  const dataset = transformData(sentimentTimeseries);
  // const initialDomain = { x: [0, 3.9] };
  const initialDomain = isMobile
    ? { x: [0, 3.9] }
    : isTablet
    ? { x: [0, 6.9] }
    : { x: [0, 8.9] };
  const [zoomDomain, setZoomDomain] = useState(initialDomain);
  const handleZoom = domain => {
    setZoomDomain(domain);
  };
  return (
    <div>
      <VictoryChart
        width={chartWidth}
        height={chartHeight}
        domainPadding={{ x: 0, y: 0 }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryStack
          colorScale={['#FBB96C', '#8677FE', '#06B41D']}
          barRatio={0.4}
        >
          {dataset.map((data, i) => (
            <VictoryBar
              data={data}
              key={i}
              barWidth={50}
              cornerRadius={{ topLeft: 5, topRight: 5 }}
            />
          ))}
        </VictoryStack>
        <VictoryAxis
          dependentAxis
          tickFormat={tick => `${tick}`}
          style={axisStyle}
        />
        <VictoryAxis tickFormat={tick => tick} style={axisStyle} />
      </VictoryChart>
    </div>
  );
};

export default SentimentColumnChart;
