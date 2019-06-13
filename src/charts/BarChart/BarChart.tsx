import * as React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import {
  AxisType,
  MarginType,
  LegendsType,
} from 'charts/BarChart/BarChartTypes';

// Refer to Nivo Bar Chart API for all available options and default values: https://nivo.rocks/bar/

export interface BarChartProps {
  /** Chart data object */
  data: [];
  /** Key to use to index the data */
  indexBy?: string;
  /** Keys to determine each series */
  keys?: string[];
  /** Group mode to indicate how to group bars */
  groupMode?: string | undefined | any;
  /** Layout mode */
  layout?: string | undefined | any;
  /** Min value of data */
  minValue?: string | number | undefined | any;
  /** Max value of data */
  maxValue?: string | number | undefined | any;
  /** Padding between each bar */
  padding?: number;
  /** Color definition range */
  colors?: () => void;
  /** Determines node color */
  colorBy?: () => void | string;
  /** Margin of chart */
  margin?: MarginType;
  /** Top axis config */
  axisTop?: AxisType;
  /** Bottom axis config */
  axisBottom?: AxisType;
  /** Left axis config */
  axisLeft?: AxisType;
  /** Right axis config */
  axisRight?: AxisType;
  /** True enable x-axis grid */
  enableGridX?: boolean;
  /** True to enable y-axis grid (true by default) */
  enableGridY?: boolean;
  /** Values for x grid lines */
  gridXValues?: number[] | string[];
  /** Values for Y grid lines */
  gridYValues?: number[] | string[];
  /** True to enable interactivity with the chart */
  isInteractive?: boolean;
  /** Chart legend config */
  legends?: LegendsType[];
  /** True to enable animated transitions (true by default) */
  animate?: boolean;
  /** Number to indicate motion stiffness */
  motionStiffness?: number;
  /** Number to indicates motion damping */
  motionDamping?: number;
}

/** Bar chart component */
const BarChart = ({
  data,
  indexBy,
  keys,
  groupMode,
  layout,
  minValue,
  maxValue,
  padding,
  colors,
  colorBy,
  margin,
  axisTop,
  axisBottom,
  axisLeft,
  axisRight,
  enableGridX,
  enableGridY,
  gridXValues,
  gridYValues,
  isInteractive,
  legends,
  animate,
  motionStiffness,
  motionDamping,
}: BarChartProps) => (
  <ResponsiveBar
    data={data}
    indexBy={indexBy}
    keys={keys}
    groupMode={groupMode}
    layout={layout}
    minValue={minValue}
    maxValue={maxValue}
    padding={padding}
    // colorBy={colorBy}
    margin={margin}
    // axisTop={axisTop}
    // axisBottom={axisBottom}
    // axisLeft={axisLeft}
    // axisRight={axisRight}
    enableGridX={enableGridX}
    enableGridY={enableGridY}
    // gridYValues={gridYValues}
    // gridXValues={gridXValues}
    isInteractive={isInteractive}
    // legends={legends}
    animate={animate}
    motionStiffness={motionStiffness}
    motionDamping={motionDamping}
  />
);

export default BarChart;
