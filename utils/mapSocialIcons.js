import { v4 as uuid } from "uuid";

export const mapSocialIcons = (socialIcons) => {
  return socialIcons.map((socialIcon) => ({
    id: uuid(),
    destination: socialIcon.socialIcon.destination?.url,
    label: socialIcon.socialIcon.label,
  }));
};