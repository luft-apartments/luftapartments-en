import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import { getMarginTop, getMarginBottom, getPaddingTop, getPaddingBottom } from "utils/layout";

export const Heading = ({ textAlign, content, level, textColor, backgroundColor, marginTop, paddingTop }) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-[1220px] mx-auto mb-10 ${getMarginTop(marginTop)} ${getPaddingTop(paddingTop)} ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
    style: { ...textColorStyle, ...backgroundColorStyle },
    "data-aos": "fade-up"
  });
  return tag;
};