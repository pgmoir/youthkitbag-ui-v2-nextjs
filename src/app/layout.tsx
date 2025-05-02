import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:
    'YouthKitbag NextJS - Inventory, Trade, Aquire, Reporting for all your youth kit',
  description: 'Your ultimate toolkit for youth activities.',
};

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
// });

// className={roboto.className}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
