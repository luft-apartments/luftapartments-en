import { Raleway, Inter } from 'next/font/google';

import '../styles/globals.css';
import { MainMenu } from 'components/MainMenu';
import { getMenu } from 'utils/getMenu';

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
  const data = await getMenu();
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className='font-body'>
        <MainMenu
          boldText={data.boldText}
          regularText={data.regularText}
          items={data.mainMenuItems}
          logo={data.logo}
        />
        {children}
      </body>
    </html>
  );
}