import { v4 as uuid } from "uuid";

export const mapFooterLinksApartments = (footerLinksApartments) => {
  return footerLinksApartments.map((footerLinkApartment) => ({
    id: uuid(),
    destination: footerLinkApartment.footerLinkApartment.destination?.uri,
    label: footerLinkApartment.footerLinkApartment.label,
  }));
};