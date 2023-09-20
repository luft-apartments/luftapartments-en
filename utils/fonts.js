export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  return `${fontSizeMap[level] || ""}`;
};

export const getFontSizeForParagraph = (fontSize) => {
  const fontSizeMap = {
    "xx-large": "text-2xl",
    "x-large": "text-xl",
    "large": "text-lg",
    "medium": "text-base",
    "small": "text-sm",
  };

  return `${fontSizeMap[fontSize] || ""}`;
}