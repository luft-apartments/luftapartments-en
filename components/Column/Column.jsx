import { getAlignItems } from "utils/layout";

export const Column = ({
  children,
  width,
  textColor,
  backgroundColor,
  verticalAlignment }) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const widthStyle = width ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  return (
    <div data-aos="fade-up" style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }} className={`${getAlignItems(verticalAlignment)}`}>
      {children}
    </div>
  )
}
