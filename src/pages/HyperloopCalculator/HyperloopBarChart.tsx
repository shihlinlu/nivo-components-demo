import * as React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import { HyperloopDataType } from 'data/hyperloopDataTypes';
import hyperloopTravelData from 'data/hyperloopData';
import colors from './hyperloopConstants';

// get chart keys
const getKeys = (data: HyperloopDataType[]) =>
  data.map((travelData: HyperloopDataType) => travelData.time);

// gets 5 evenly-spaced tick values
const getGridXValues = () => {
  const time = hyperloopTravelData.map((data: HyperloopDataType) => {
    return Math.ceil(data.time);
  });

  const maxTime = Math.max(...time);
  const firstQuartile = 0.25;
  const median = 0.5;
  const thirdQuartile = 0.75;
  return [
    0,
    maxTime * firstQuartile,
    maxTime * median,
    maxTime * thirdQuartile,
    maxTime,
  ];
};

/** Bar chart component */
const HyperloopBarChart = () => {
  const keys = getKeys(hyperloopTravelData);

  return (
    <ResponsiveBar
      data={hyperloopTravelData}
      indexBy="transportMode"
      keys={['time']}
      layout="horizontal"
      padding={0.5}
      margin={{
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      }}
      colors={colors}
      axisLeft={{
        tickSize: 7,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Transport Mode',
        legendPosition: 'middle',
        legendOffset: -80,
      }}
      axisBottom={{
        tickSize: 7,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Hours',
        legendPosition: 'middle',
        legendOffset: 35,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default HyperloopBarChart;
