import { Raleway, Inter } from 'next/font/google';
import Script from 'next/script';
import { headers } from 'next/headers';

import '../styles/globals.css';
import { MainMenu } from 'components/MainMenu';
import { Footer } from 'components/Footer';
import CookieConsent from '/components/CookieConsent/CookieConsent'
import { getMenu } from 'utils/getMenu';
import { getFooter } from 'utils/getFooter';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-raleway',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({ children }) {
  // const headersList = headers();
  // // read the custom x-url header
  // const header_url = headersList.get('x-url') || "";
  // console.log(header_url);
  const data = await getMenu();
  const footerData = await getFooter();
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className='font-body'>
        <MainMenu
          boldText={data.boldText}
          regularText={data.regularText}
          items={data.mainMenuItems}
          logo={data.logo}
        />
        <main>
          {children}
        </main>
        <Footer
          copyright={footerData.copyright}
          footerLinksApartments={footerData.footerLinksApartments}
          footerLinksPages={footerData.footerLinksPages}
          footerLogo={footerData.footerLogo}
        />
        <CookieConsent />
      </body>
    </html>
  );
}