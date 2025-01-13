import { type Linecap, type Framework, type RuleTypes } from '../utils/types'

export interface popnPyramidDataItem {
  left: number
  right: number
  leftBarColor?: any
  rightBarColor?: any
  leftBarBorderColor?: any
  rightBarBorderColor?: any
  barBorderWidth?: number
  leftBarBorderWidth?: number
  rightBarBorderWidth?: number
  barBorderRadius?: number
  leftBarBorderRadius?: number
  rightBarBorderRadius?: number

  barLabelWidth?: number
  barLabelFontSize?: number
  barLabelColor?: any
  barLabelFontStyle?: any
  barLabelFontWeight?: any
  barLabelFontFamily?: string

  leftBarLabel?: string
  leftBarLabelWidth?: number
  leftBarLabelFontSize?: number
  leftBarLabelColor?: any
  leftBarLabelFontStyle?: any
  leftBarLabelFontWeight?: any
  leftBarLabelFontFamily?: string
  leftBarLabelShift?: number

  rightBarLabel?: string
  rightBarLabelWidth?: number
  rightBarLabelFontSize?: number
  rightBarLabelColor?: any
  rightBarLabelFontStyle?: any
  rightBarLabelFontWeight?: any
  rightBarLabelFontFamily?: string
  rightBarLabelShift?: number

  yAxisLabel?: string
  midAxisLabel?: string
  midAxisLabelFontSize?: number
  midAxisLabelColor?: any
  midAxisLabelFontStyle?: any
  midAxisLabelFontWeight?: any
  midAxisLabelFontFamily?: string

  showSurplus?: boolean
  showSurplusLeft?: boolean
  showSurplusRight?: boolean
  leftSurplusColor?: any
  leftSurplusBorderColor?: any
  rightSurplusColor?: any
  rightSurplusBorderColor?: any
  leftSurplusBorderWidth?: number
  rightSurplusBorderWidth?: number
}

export type popnPyramidDataItemReactJS = popnPyramidDataItem & {
  leftBarColor?: string
  rightBarColor?: string
  leftBarBorderColor?: string
  rightBarBorderColor?: string
  barLabelColor?: string
  leftBarLabelColor?: string
  rightBarLabelColor?: string
  midAxisLabelColor?: string
  leftSurplusColor?: string
  leftSurplusBorderColor?: string
  rightSurplusColor?: string
  rightSurplusBorderColor?: string
}

export interface RulesProps {
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  stroke?: any
  strokeWidth?: number
  strokeDasharray?: number[] | string
  strokeLinecap?: Linecap
}

export type RulesPropsReactJS = RulesProps & {
  stroke?: string
}

export interface PopulationPyramidPropsType {
  height?: number
  width?: number
  data: popnPyramidDataItem[]
  hideRules?: boolean
  stepHeight?: number
  verticalMarginBetweenBars?: number
  hideYAxisText?: boolean
  yAxisLabelWidth?: number
  yAxisColor?: any
  yAxisThickness?: number
  yAxisStrokeDashArray?: number[] | string
  xAxisColor?: any
  xAxisThickness?: number
  xAxisType?: RuleTypes
  xAxisNoOfSections?: number
  showXAxisIndices?: boolean
  xAxisIndicesWidth?: number
  xAxisIndicesHeight?: number
  xAxisIndicesColor?: any
  xAxisIndicesShiftY?: number
  showXAxisLabelTexts?: boolean
  xAxisLabelFontSize?: number
  xAxisLabelColor?: any
  xAxisLabelFontStyle?: any
  xAxisLabelFontWeight?: any
  xAxisLabelFontFamily?: string
  xAxisLabelShiftX?: number
  xAxisLabelShiftY?: number
  xAxisRoundToDigits?: number
  xAxisLabelPrefix?: string
  xAxisLabelSuffix?: string
  formatXAxisLabels?: (label: string) => string

  showVerticalLines?: boolean
  verticalLinesColor?: any
  verticalLinesThickness?: number
  verticalLinesType?: RuleTypes
  verticalLinesStrokeDashArray?: number[] | string
  verticalLinesStrokeLinecap?: Linecap

  noOfSections?: number
  barsMapToYAxisSections?: boolean

  showYAxisIndices?: boolean
  yAxisIndicesWidth?: number
  yAxisIndicesHeight?: number
  yAxisIndicesColor?: any
  yAxisLabelColor?: any
  yAxisLabelFontSize?: number
  yAxisLabelTextMarginRight?: number
  yAxisLabelTexts?: string[]
  yAxisLabelFontStyle?: any
  yAxisLabelFontWeight?: any
  yAxisLabelFontFamily?: string

  showValuesAsBarLabels?: boolean

  rulesThickness?: number
  rulesColor?: any
  rulesType?: RuleTypes
  dashWidth?: number
  dashGap?: number

  showMidAxis?: boolean
  midAxisThickness?: number
  midAxisLabelWidth?: number
  midAxisColor?: any
  midAxisLeftColor?: any
  midAxisRightColor?: any
  midAxisStrokeDashArray?: number[] | string
  midAxisLabelFontSize?: number
  midAxisLabelColor?: any
  midAxisLabelFontStyle?: any
  midAxisLabelFontWeight?: any
  midAxisLabelFontFamily?: string

  barLabelWidth?: number
  barLabelFontSize?: number
  barLabelColor?: any
  barLabelFontStyle?: any
  barLabelFontWeight?: any
  barLabelFontFamily?: string

  leftBarLabelWidth?: number
  leftBarLabelFontSize?: number
  leftBarLabelColor?: any
  leftBarLabelFontStyle?: any
  leftBarLabelFontWeight?: any
  leftBarLabelFontFamily?: string
  leftBarLabelShift?: number
  leftBarLabelPrefix?: string
  leftBarLabelSuffix?: string

  rightBarLabelWidth?: number
  rightBarLabelFontSize?: number
  rightBarLabelColor?: any
  rightBarLabelFontStyle?: any
  rightBarLabelFontWeight?: any
  rightBarLabelFontFamily?: string
  rightBarLabelShift?: number
  rightBarLabelPrefix?: string
  rightBarLabelSuffix?: string
  formatBarLabels?: (label: string) => string

  leftBarColor?: any
  rightBarColor?: any
  leftBarBorderColor?: any
  rightBarBorderColor?: any
  barBorderWidth?: number
  leftBarBorderWidth?: number
  rightBarBorderWidth?: number
  barBorderRadius?: number
  leftBarBorderRadius?: number
  rightBarBorderRadius?: number
  allCornersRounded?: boolean

  showSurplus?: boolean
  showSurplusLeft?: boolean
  showSurplusRight?: boolean
  leftSurplusColor?: any
  leftSurplusBorderColor?: any
  rightSurplusColor?: any
  rightSurplusBorderColor?: any
  leftSurplusBorderWidth?: number
  rightSurplusBorderWidth?: number
  onLeftPress?: (item: popnPyramidDataItem, index: number) => void
  onRightPress?: (item: popnPyramidDataItem, index: number) => void
}

export type PopulationPyramidPropsTypeReactJS = PopulationPyramidPropsType & {
  data: popnPyramidDataItemReactJS[]
  yAxisColor?: string
  xAxisColor?: string
  xAxisIndicesColor?: string
  xAxisLabelColor?: string
  verticalLinesColor?: string
  yAxisIndicesColor?: string
  yAxisLabelColor?: string
  rulesColor?: string
  midAxisColor?: string
  midAxisLeftColor?: string
  midAxisRightColor?: string
  midAxisLabelColor?: string
  barLabelColor?: string
  leftBarLabelColor?: string
  rightBarLabelColor?: string
  leftBarColor?: string
  rightBarColor?: string
  leftBarBorderColor?: string
  rightBarBorderColor?: string
  leftSurplusColor?: string
  leftSurplusBorderColor?: string
  rightSurplusColor?: string
  rightSurplusBorderColor?: string
}

export type RulesPropsType =
  | ({ framework: Framework.reactJS } & RulesPropsReactJS)
  | ({ framework?: Framework.reactNative } & RulesProps)

export type TPopulationPyramidPropsType =
  | ({ framework: Framework.reactJS } & PopulationPyramidPropsTypeReactJS)
  | ({ framework?: Framework.reactNative } & PopulationPyramidPropsType)

export type extendedPopulationPyramidPropsType = TPopulationPyramidPropsType & {
  screenWidth: number
}
