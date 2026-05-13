import '../styles/index.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Neuropsychology Homepage',
  description: 'Neuropsychology clinic website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 antialiased">
        {children}
      </body>
    </html>
  );
}
