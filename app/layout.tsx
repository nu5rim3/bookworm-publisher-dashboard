import './globals.css';
// import { Inter } from 'next/font/google'
import { Providers } from './providers';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookWorm',
  description: 'Ebook Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
