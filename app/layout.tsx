import './globals.css';
import localFont from 'next/font/local';

// Fonts
const poppins = localFont({
  src: [
    {
      path: '../public/fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'light',
    },
  ],
  variable: '--font-poppins',
});
const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/montserrat/Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold',
    },
  ],
  variable: '--font-montserrat',
});

// Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AosInit from '@/components/AosInit/AosInit';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icons/favicon.png"
          type="image/png"
          sizes="32*32"
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} pb-16 sm:pb-0`}
      >
        <AosInit />
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
