import { v4 as uuid } from "uuid";

export const mapfooterLinksPages = (footerLinksPages) => {
  return footerLinksPages.map((footerLinkPage) => ({
    id: uuid(),
    destination: footerLinkPage.footerLinkPage.destination?.uri,
    label: footerLinkPage.footerLinkPage.label,
  }));
};