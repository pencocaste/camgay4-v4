import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Live Gay & Male Cams | Gay Sex Chat ❤️ CAMGAY4.com',
  description: 'Watch Free Gay Live Sex Cams Shows in our Adult Sex Chat Community⭐ Start chatting with Hot Men! +3000 Live Male Webcams.',
  icons: {
    icon: '/camgay4-favicon.png',
    shortcut: '/camgay4-favicon.png',
    apple: '/camgay4-favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-white w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}