import { mapFooterLinksApartments } from "./mapFooterLinksApartments";
import { mapfooterLinksPages } from "./mapfooterLinksPages";

export const getFooter = async () => {
  const params = {
    query: `
      query FooterQuery {
        acfOptionsFooter {
          footer {
            copyright
            footerLinksApartments {
              footerLinkApartment {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
            footerLinksPages {
              footerLinkPage {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
            footerLogo {
              sourceUrl
            }
          }
        }
      }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();

  return {
    copyright: data.acfOptionsFooter.footer.copyright,
    footerLinksApartments: mapFooterLinksApartments(data.acfOptionsFooter.footer.footerLinksApartments),
    footerLinksPages: mapfooterLinksPages(data.acfOptionsFooter.footer.footerLinksPages),
    footerLogo: data.acfOptionsFooter.footer.footerLogo.sourceUrl,
  };
}