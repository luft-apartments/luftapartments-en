import { getAlignItems, getMargin } from "utils/layout";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  verticalAlignment,
  marginTop,
  marginBottom
}) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <div
      // className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle, }}
    >
      <div className={`w-full mx-auto ${getMargin(marginTop)} ${getMargin(marginBottom)} ${getAlignItems(verticalAlignment)} ${isStackedOnMobile ? "flex flex-col justify-center md:flex md:flex-row" : "flex"}`}>{children}</div>
    </div>
  )
}