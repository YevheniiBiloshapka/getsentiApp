import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryAxis,
} from 'victory';

const axisStyle = {
  axis: { stroke: '#DEDFF2' },
  tickLabels: { fontSize: 8, fill: '#080a43' },
};

const RatingOverLineChart = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1279 });

  const chartWidth = isMobile ? 320 : isTablet ? 600 : 800;
  const chartHeight = isMobile ? 320 : isTablet ? 300 : 300;
  const initialDomain = {
    x: [new Date(data[0].date), new Date(data[data.length - 1].date)],
    y: [0, Math.max(...data.map(item => Object.values(item)[1]))],
  };
  const [zoomDomain, setZoomDomain] = useState(initialDomain);

  const handleZoom = domain => {
    setZoomDomain(domain);
  };

  const convertDataToDate = data => {
    const formattedData = data.map(item => {
      return {
        a: new Date(item.date),
        b: Object.values(item)[1],
      };
    });

    return formattedData;
  };

  return (
    <div>
      <VictoryChart
        width={chartWidth}
        height={chartHeight}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryAxis dependentAxis style={axisStyle} />
        <VictoryAxis
          style={axisStyle}
          tickFormat={x => {
            const date = new Date(x);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${year}-${month}-${day}`;
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: '#666CE6' },
            parent: { border: '1px solid #ccc', borderRadius: '5px' },
          }}
          data={convertDataToDate(data)}
          x="a"
          y="b"
          interpolation="basis"
        />
      </VictoryChart>
    </div>
  );
};

export default RatingOverLineChart;
