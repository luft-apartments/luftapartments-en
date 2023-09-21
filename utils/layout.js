export const getAlignItems = (verticalAlignment) => {
  const getAlignItemsMap = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  return `${getAlignItemsMap[verticalAlignment] || ""}`;
};

export const getAlignImage = (align) => {
  const getAlignImageMap = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return `${getAlignImageMap[align] || ""}`;
};

export const getMargin = (margin) => {
  const marginMap = {
    "var:preset|spacing|30": "mb-8",
    "var:preset|spacing|40": "mb-10",
    "var:preset|spacing|50": "mb-12",
    "var:preset|spacing|60": "mb-14",
    "var:preset|spacing|70": "mb-16",
    "var:preset|spacing|80": "mb-20",
  };

  return `${marginMap[margin] || ""}`;
};

export const getMarginTop = (marginTop) => {
  const getMarginTopMap = {
    "var:preset|spacing|30": "mb-8",
    "var:preset|spacing|40": "mb-10",
    "var:preset|spacing|50": "mb-12",
    "var:preset|spacing|60": "mb-14",
    "var:preset|spacing|70": "mb-16",
    "var:preset|spacing|80": "mb-18",
  };

  return `${getMarginTopMap[marginTop] || ""}`;
}

export const getMarginBottom = (marginBottom) => {
  const getMarginBottomMap = {
    "var:preset|spacing|30": "mb-8",
    "var:preset|spacing|40": "mb-10",
    "var:preset|spacing|50": "mb-12",
    "var:preset|spacing|60": "mb-14",
    "var:preset|spacing|70": "mb-16",
    "var:preset|spacing|80": "mb-20",
  };

  return `${getMarginBottomMap[marginBottom] || ""}`;
}

export const getOverlayColor = (overlayColor) => {
  const getOverlayColorMap = {
    "base": "#ffffff",
    "contrast": "#000000",
    "primary": "#0170B9",
    "secondary": "#3a3a3a",
    "tertiary": "#4B4F58",
    "slate": "#F5F5F5",
    "graydark": "#424242",
    "onhover": "#ff7300",
  };

  return `${getOverlayColorMap[overlayColor] || ""}`;
}

export const getOverlayOpacity = (dimRatio) => {
  const getOverlayOpacityMap = {
    "0": "0",
    "10": "0.1",
    "20": "0.2",
    "30": "0.3",
    "40": "0.4",
    "50": "0.5",
    "60": "0.6",
    "70": "0.7",
    "80": "0.8",
    "90": "0.9",
    "100": "1",
  };

  return `${getOverlayOpacityMap[dimRatio] || ""}`;
}