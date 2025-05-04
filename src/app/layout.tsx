import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:
    'YouthKitbag NextJS - Inventory, Trade, Aquire, Reporting for all your youth kit',
  description: 'Your ultimate toolkit for youth activities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
