import type { Metadata } from 'next';
import { Jost, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});

export const metadata: Metadata = {
  title: 'Leik Games',
  description: 'Leik Games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${jost.variable}`}>
      <body>
        <div className="prose-xl h-screen flex items-center justify-center">
          <p>🔧 Leik Games is under construction 🔧</p>
        </div>
      </body>
      {/* <body>
        <Navbar hideNav />
        {children}
      </body> */}
    </html>
  );
}
