interface MarginType {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface AxisType {
  tickValues?: [];
  orient?: string;
  tickPadding?: number;
  tickRotation?: number;
  legend?: string;
  legendPosition?: string;
  legendOffset?: number;
}

interface CustomTooltipType {
  id: string | number;
  value: number;
  index: number;
  indexValue: string | number;
  color: string;
  /** datum associated to the current index (raw data) */
  data: [];
}

interface EffectsType {
  on: string;
  style: { itemOpacity: number };
}

interface LegendsType {
  dataFrom?: string;
  anchor?: string;
  direction?: string;
  justify?: boolean;
  translateX?: number;
  translateY?: number;
  itemsSpacing?: number;
  itemWidth: number;
  itemHeight: number;
  itemDirection?: string;
  itemOpacity?: number;
  symbolSize?: number;
  effects: EffectsType[];
}

export { MarginType, AxisType, CustomTooltipType, LegendsType };
