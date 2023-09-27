import { getAlignItems, getMarginTop, getMarginBottom, getPaddingTop, getPaddingBottom, getMaxWidth, getGap } from "utils/layout";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  verticalAlignment,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  align,
  gap,
}) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <div
      // className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle, }}
    >
      <div className={` ${getMaxWidth(align)} ${getPaddingTop(paddingTop)} ${getPaddingBottom(paddingBottom)} ${getMarginTop(marginTop)} ${getMarginBottom(marginBottom)} ${getAlignItems(verticalAlignment)} ${isStackedOnMobile ? "flex flex-col justify-center md:flex md:flex-row" : "flex"} ${getGap(gap)}`}>{children}</div>
    </div>
  )
}