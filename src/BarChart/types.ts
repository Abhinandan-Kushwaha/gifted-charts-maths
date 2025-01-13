import { type yAxisSides } from '../utils/constants'
import {
  XAxisConfig,
  type CurveType,
  type Pointer,
  type RuleType,
  type RulesConfig,
  type referenceConfigType,
  type secondaryYAxisType,
  type Linecap,
  CustomBackground
} from '../utils/types'
import { type lineDataItem } from '../LineChart/types'

export interface stackDataItem {
  value?: number
  onPress?: any
  onLongPress?: any
  onPressOut?: any
  label?: string
  labelWidth?: number
  labelsDistanceFromXaxis?: number
  barWidth?: number
  spacing?: number
  labelTextStyle?: any
  topLabelComponent?: Function
  topLabelContainerStyle?: any
  topLabelTextStyle?: any
  disablePress?: any
  color?: any
  showGradient?: boolean
  gradientColor?: any
  capThickness?: number
  capColor?: any
  capRadius?: number
  labelComponent?: Function
  stacks: Array<{
    value: number
    color?: any
    onPress?: (event: any) => void
    marginBottom?: number
    borderRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    showGradient?: boolean
    gradientColor?: any
    barWidth?: number
    innerBarComponent?: Function
    onContextMenu?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }>
  barBackgroundPattern?: () => any
  borderRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  barInnerComponent?: (item?: stackDataItem, index?: number) => any
  patternId?: string
  leftShiftForTooltip?: number
  showXAxisIndex?: boolean
  onContextMenu?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
  isSecondary?: boolean
}

export interface StackedBarChartPropsType {
  style?: any
  width?: number
  height?: number
  color?: any
  topLabelComponent?: any
  topLabelContainerStyle?: any
  topLabelTextStyle?: any
  opacity?: number
  label: string
  labelTextStyle?: any
  autoShiftLabelsForNegativeStacks?: boolean
  labelsDistanceFromXaxis?: number
  disablePress?: boolean

  item: stackDataItem
  index: number
  containerHeight: number
  maxValue: number
  spacing: number
  propSpacing?: number
  data?: any
  barWidth?: number
  onPress?: Function
  onLongPress?: Function
  onPressOut?: Function
  labelWidth?: number

  rotateLabel?: boolean
  showXAxisIndices: boolean
  xAxisIndicesHeight: number
  xAxisIndicesWidth: number
  xAxisIndicesColor: any
  horizontal: boolean
  intactTopLabel: boolean
  barBorderWidth?: number
  barBorderColor: any
  barBorderRadius?: number
  barBorderTopLeftRadius?: number
  barBorderTopRightRadius?: number
  barBorderBottomLeftRadius?: number
  barBorderBottomRightRadius?: number
  barInnerComponent?: (
    item?: barDataItem | stackDataItem,
    index?: number
  ) => any
  barMarginBottom: number
  stackBorderRadius?: number
  stackBorderTopLeftRadius?: number
  stackBorderTopRightRadius?: number
  stackBorderBottomLeftRadius?: number
  stackBorderBottomRightRadius?: number
  xAxisThickness: number
  barBackgroundPattern?: () => any
  patternId?: string
  xAxisTextNumberOfLines: number
  xAxisLabelsHeight?: number
  xAxisLabelsVerticalShift: number
  renderTooltip: Function | undefined
  leftShiftForTooltip?: number
  leftShiftForLastIndexTooltip: number
  autoCenterTooltip?: boolean
  initialSpacing: number
  selectedIndex: number
  setSelectedIndex: Function
  activeOpacity: number
  showGradient?: boolean
  gradientColor?: any
  stackData: stackDataItem[]
  isAnimated?: boolean
  animationDuration?: number
  pointerConfig?: Pointer
  showValuesAsTopLabel?: boolean
  yAxisOffset: number
  stepHeight: number
  stepValue: number
  negativeStepHeight: number
  negativeStepValue: number
  secondaryStepHeight: number
  secondaryStepValue: number
  secondaryNegativeStepHeight: number
  secondaryNegativeStepValue: number
  secondaryNoOfSectionsBelowXAxis: number
  containerHeightIncludingBelowXAxis: number
}

export interface BarChartPropsType {
  width?: number
  height?: number
  overflowTop?: number
  minHeight?: number
  noOfSections?: number
  sectionColors?: any[]
  noOfSectionsBelowXAxis?: number
  maxValue?: number
  mostNegativeValue?: number
  stepHeight?: number
  stepValue?: number
  negativeStepHeight?: number
  negativeStepValue?: number
  spacing?: number
  data?: barDataItem[]
  stackData?: stackDataItem[]
  side?: string
  rotateLabel?: boolean
  isAnimated?: boolean
  animationDuration?: number
  // animationEasing?: any;
  opacity?: number
  isThreeD?: boolean
  xAxisLength?: number
  xAxisThickness?: number
  xAxisColor?: any
  yAxisThickness?: number
  yAxisColor?: any
  yAxisExtraHeight?: number
  trimYAxisAtTop?: boolean
  xAxisType?: RuleType
  yAxisLabelContainerStyle?: any
  horizontalRulesStyle?: any
  yAxisTextStyle?: any
  yAxisTextNumberOfLines?: number
  xAxisTextNumberOfLines?: number
  xAxisLabelsHeight?: number
  xAxisLabelsVerticalShift?: number
  yAxisLabelWidth?: number
  hideYAxisText?: boolean
  rotateYAxisTexts?: number
  yAxisSide?: yAxisSides
  yAxisOffset?: number
  initialSpacing?: number
  endSpacing?: number
  barWidth?: number
  sideWidth?: number
  showLine?: boolean
  lineData?: Array<lineDataItem | barDataItem | stackDataItem>
  lineData2?: Array<lineDataItem | barDataItem | stackDataItem>
  lineConfig?: lineConfigType
  lineConfig2?: lineConfigType
  lineBehindBars?: boolean

  cappedBars?: boolean
  capThickness?: number
  capColor?: any
  capRadius?: number

  hideAxesAndRules?: boolean
  hideRules?: boolean
  rulesLength?: number
  rulesColor?: any
  rulesThickness?: number
  rulesType?: RuleType
  dashWidth?: number
  dashGap?: number
  rulesConfigArray?: RulesConfig[]
  showReferenceLine1?: boolean
  referenceLine1Config?: referenceConfigType
  referenceLine1Position?: number
  showReferenceLine2?: boolean
  referenceLine2Config?: referenceConfigType
  referenceLine2Position?: number
  showReferenceLine3?: boolean
  referenceLine3Config?: referenceConfigType
  referenceLine3Position?: number
  referenceLinesOverChartContent?: boolean
  showVerticalLines?: boolean
  verticalLinesThickness?: number
  verticalLinesHeight?: number
  verticalLinesColor?: any
  verticalLinesStrokeDashArray?: number[]
  verticalLinesShift?: number
  verticalLinesZIndex?: number
  noOfVerticalLines?: number
  verticalLinesSpacing?: number
  verticalLinesStrokeLinecap?: Linecap

  showYAxisIndices?: boolean
  showXAxisIndices?: boolean
  yAxisIndicesHeight?: number
  xAxisIndicesHeight?: number
  yAxisIndicesWidth?: number
  xAxisIndicesWidth?: number
  xAxisIndicesColor?: any
  yAxisIndicesColor?: any

  showFractionalValues?: boolean
  roundToDigits?: number
  backgroundColor?: any
  customBackground?: CustomBackground

  disableScroll?: boolean
  showScrollIndicator?: boolean
  indicatorColor?: 'black' | 'default' | 'white'
  nestedScrollEnabled?: boolean
  roundedTop?: boolean
  roundedBottom?: boolean
  disablePress?: boolean

  frontColor?: any
  color?: any
  sideColor?: any
  topColor?: any
  gradientColor?: any
  showGradient?: boolean
  activeOpacity?: number

  horizontal?: boolean
  rtl?: boolean
  shiftX?: number
  shiftY?: number
  yAxisAtTop?: boolean

  intactTopLabel?: boolean
  showValuesAsTopLabel?: boolean
  topLabelContainerStyle?: any
  topLabelTextStyle?: any

  horizSections?: sectionType[]
  barBorderWidth?: number
  barBorderColor?: any
  barBorderRadius?: number
  barBorderTopLeftRadius?: number
  barBorderTopRightRadius?: number
  barBorderBottomLeftRadius?: number
  barBorderBottomRightRadius?: number
  stackBorderRadius?: number
  stackBorderTopLeftRadius?: number
  stackBorderTopRightRadius?: number
  stackBorderBottomLeftRadius?: number
  stackBorderBottomRightRadius?: number
  hideOrigin?: boolean
  labelWidth?: number
  yAxisLabelTexts?: string[]
  xAxisLabelTexts?: string[]
  xAxisLabelTextStyle?: any
  yAxisLabelPrefix?: string
  yAxisLabelSuffix?: string
  autoShiftLabels?: boolean
  scrollRef?: any
  scrollToEnd?: boolean
  scrollToIndex?: number
  scrollAnimation?: boolean
  scrollEventThrottle?: number
  labelsExtraHeight?: number
  labelsDistanceFromXaxis?: number
  autoShiftLabelsForNegativeStacks?: boolean
  barBackgroundPattern?: () => any
  patternId?: string
  barMarginBottom?: number
  onPress?: Function
  onLongPress?: Function
  onPressOut?: Function
  renderTooltip?: Function
  leftShiftForTooltip?: number
  autoCenterTooltip?: boolean
  leftShiftForLastIndexTooltip?: number
  barStyle?: object
  barInnerComponent?: (
    item?: stackDataItem | barDataItem,
    index?: number
  ) => any

  // secondaryData?: barDataItem[]
  secondaryYAxis?: secondaryYAxisType | boolean
  pointerConfig?: Pointer
  getPointerProps?: Function
  formatYLabel?: (label: string) => string

  onEndReached?: () => void
  onStartReached?: () => void
  endReachedOffset?: number
  onScroll?: Function
  onMomentumScrollEnd?: Function

  focusBarOnPress?: boolean
  focusedBarConfig?: FocusedBarConfig
  focusedBarIndex?: number

  adjustToWidth?: boolean
  parentWidth?: number
  secondaryXAxis?: XAxisConfig
}

export interface FocusedBarConfig {
  color?: any
  sideColor?: any
  topColor?: any
  gradientColor?: any
  width?: number
  borderRadius?: number
  roundedTop?: boolean
  roundedBottom?: boolean
  opacity?: number
  barInnerComponent?: (item?: barDataItem, index?: number) => any
}

export interface lineConfigType {
  initialSpacing?: number
  spacing?: number
  curved?: boolean
  curvature?: number
  curveType?: CurveType
  isAnimated?: boolean
  animationDuration?: number
  delay?: number
  thickness?: number
  color?: any | string | any
  strokeDashArray?: number[]
  hideDataPoints?: boolean
  dataPointsShape?: string
  dataPointsWidth?: number
  dataPointsHeight?: number
  dataPointsColor?: any | string | any
  dataPointsRadius?: number
  textColor?: any | string | any
  textFontSize?: number
  textShiftX?: number
  textShiftY?: number
  shiftX?: number
  shiftY?: number
  startIndex?: number
  endIndex?: number
  showArrow?: boolean
  arrowConfig?: arrowType
  customDataPoint?: Function
  isSecondary?: boolean
  focusEnabled?: boolean
  focusedDataPointColor?: any
  focusedDataPointRadius?: number
  focusedDataPointIndex?: number
}
export interface defaultLineConfigType {
  initialSpacing: number
  curved: boolean
  curvature: number
  curveType: CurveType
  isAnimated: boolean
  animationDuration: number
  delay: number
  thickness: number
  color: any | string | any
  hideDataPoints: boolean
  dataPointsShape: string
  dataPointsWidth: number
  dataPointsHeight: number
  dataPointsColor: any | string | any
  dataPointsRadius: number
  textColor: any | string | any
  textFontSize: number
  textShiftX: number
  textShiftY: number
  shiftX: number
  shiftY: number
  startIndex: number
  endIndex: number
  showArrow: boolean
  arrowConfig: arrowType
  customDataPoint?: Function
  isSecondary: boolean
  focusEnabled: boolean
  focusedDataPointColor: any
  focusedDataPointRadius: number
}
interface arrowType {
  length?: number
  width?: number
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  showArrowBase?: boolean
}

interface sectionType {
  value: string
}

export interface barDataItem {
  value?: number
  onPress?: any
  onLongPress?: any
  onPressOut?: any
  frontColor?: any
  sideColor?: any
  topColor?: any
  showGradient?: boolean
  gradientColor?: any
  label?: string
  labelsDistanceFromXaxis?: number
  barWidth?: number
  sideWidth?: number
  barBorderWidth?: number
  barBorderColor?: any
  labelTextStyle?: any
  topLabelComponent?: Function
  topLabelContainerStyle?: any
  disablePress?: any
  capThickness?: number
  capColor?: any
  capRadius?: number
  labelComponent?: Function
  barBorderRadius?: number
  barBorderTopLeftRadius?: number
  barBorderTopRightRadius?: number
  barBorderBottomLeftRadius?: number
  barBorderBottomRightRadius?: number
  topLabelComponentHeight?: number
  spacing?: number
  labelWidth?: number
  secondaryLabel?: string
  secondaryLabelComponent?: Function
  secondaryLabelTextStyle?: any
  barBackgroundPattern?: () => any
  patternId?: string
  barMarginBottom?: number
  leftShiftForTooltip?: number
  autoCenterTooltip?: boolean
  barStyle?: object
  barInnerComponent?: (item?: barDataItem, index?: number) => any
  showXAxisIndex?: boolean
  isSecondary?: boolean
  onContextMenu?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
}

export interface barDataItemNullSafe extends barDataItem {
  value: number
}

export interface Animated2DWithGradientPropsType {
  item: barDataItemNullSafe
  index: number
  height: number
  minHeight: number
  opacity?: number
  animationDuration: number
  roundedTop: boolean
  roundedBottom: boolean
  barWidth: number
  gradientColor: any
  frontColor: any
  noGradient?: boolean
  noAnimation?: boolean
  cappedBars?: boolean
  capThickness?: number
  capColor?: any
  capRadius?: number
  horizontal: boolean
  intactTopLabel: boolean
  showValuesAsTopLabel: boolean
  topLabelContainerStyle?: any
  topLabelTextStyle?: any
  barBorderWidth?: number
  barBorderColor: any
  barBorderRadius?: number
  barBorderTopLeftRadius?: number
  barBorderTopRightRadius?: number
  barBorderBottomLeftRadius?: number
  barBorderBottomRightRadius?: number
  containerHeight?: number
  maxValue?: number
  barBackgroundPattern?: () => any
  patternId?: string
  barMarginBottom?: number
  barStyle?: object
  barInnerComponent?: (item?: barDataItem, index?: number) => any
  commonStyleForBar?: any[]
  barStyleWithBackground?: any[]
  yAxisOffset: number
}

export interface RenderBarsPropsType {
  style?: any
  width?: number
  height?: number
  minHeight: number
  color?: any
  showGradient?: boolean
  gradientColor?: any
  frontColor?: any
  sideColor?: any
  topColor?: any
  topLabelComponent?: any
  topLabelContainerStyle?: any
  topLabelTextStyle?: any
  opacity?: number
  side?: string
  labelTextStyle?: any
  secondaryLabelTextStyle?: any

  item: barDataItemNullSafe
  index: number
  label: string
  secondaryLabel: string
  containerHeight: number
  containerHeightIncludingBelowXAxis: number
  maxValue: number
  spacing: number
  propSpacing?: number
  data?: any
  barWidth: number
  sideWidth?: number
  labelWidth?: number

  isThreeD?: boolean
  isAnimated?: boolean
  rotateLabel?: boolean
  labelsDistanceFromXaxis?: number
  animatedHeight?: any
  appearingOpacity?: any
  animationDuration?: number
  roundedTop?: boolean
  roundedBottom?: boolean
  disablePress?: boolean
  activeOpacity?: number
  cappedBars?: boolean
  capThickness?: number
  capColor?: any
  capRadius?: number
  showXAxisIndices: boolean
  xAxisIndicesHeight: number
  xAxisIndicesWidth: number
  xAxisIndicesColor: any
  horizontal: boolean
  rtl: boolean
  intactTopLabel: boolean
  showValuesAsTopLabel?: boolean
  barBorderWidth?: number
  barBorderColor: any
  barBorderRadius?: number
  barBorderTopLeftRadius?: number
  barBorderTopRightRadius?: number
  barBorderBottomLeftRadius?: number
  barBorderBottomRightRadius?: number
  barInnerComponent?: (
    item?: barDataItem | stackDataItem,
    index?: number
  ) => any
  autoShiftLabels?: boolean
  barBackgroundPattern?: () => any
  patternId?: string
  barMarginBottom?: number
  onPress?: Function
  onLongPress?: Function
  onPressOut?: Function
  onContextMenu?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
  xAxisTextNumberOfLines: number
  xAxisLabelsHeight?: number
  xAxisLabelsVerticalShift: number
  renderTooltip: Function | undefined
  leftShiftForTooltip?: number
  autoCenterTooltip?: boolean
  leftShiftForLastIndexTooltip: number
  initialSpacing: number
  selectedIndex: number
  setSelectedIndex: Function
  barStyle?: object
  xAxisThickness?: number
  secondaryXAxis?: XAxisConfig
  pointerConfig?: Pointer
  focusBarOnPress?: boolean
  focusedBarIndex?: number
  noOfSectionsBelowXAxis?: number
  yAxisOffset: number
  stepHeight: number
  stepValue: number
  negativeStepHeight: number
  negativeStepValue: number
  secondaryStepHeight: number
  secondaryStepValue: number
  secondaryNegativeStepHeight: number
  secondaryNegativeStepValue: number
  secondaryNoOfSectionsBelowXAxis: number
}

export interface trianglePropTypes {
  style: any
  width: number
  color: any
}

export interface animatedBarPropTypes {
  isAnimated?: boolean
  animationDuration: number
  barWidth: number
  sideWidth: number
  height: number
  showGradient: boolean
  gradientColor: any
  frontColor: any
  sideColor: any
  topColor: any
  opacity: number
  side: string
  horizontal: boolean
  intactTopLabel: boolean
  showValuesAsTopLabel: boolean
  topLabelContainerStyle?: any
  topLabelTextStyle?: any
  barBackgroundPattern?: () => any
  barInnerComponent?: (item?: barDataItem, index?: number) => any
  patternId?: string
  barStyle?: object
  item: barDataItem
  index: number
  selectedIndex: number
  focusBarOnPress?: boolean
  focusedBarConfig?: FocusedBarConfig
}

export interface CommonPropsFor2dand3dBarsType {
  barBackgroundPattern?: () => any
  barInnerComponent?: (item?: barDataItem, index?: number) => any
  patternId?: string
  barWidth: number
  barStyle?: object
  item: barDataItemNullSafe
  index: number

  frontColor: any
  showGradient: boolean
  gradientColor: any
  opacity: number
  height: number
  intactTopLabel: boolean
  showValuesAsTopLabel: boolean
  topLabelContainerStyle: any
  topLabelTextStyle: any
  yAxisOffset: number
}

export interface BarChartPropsTypeForWeb extends BarChartPropsType {
  onContextMenu?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
}
