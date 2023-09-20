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