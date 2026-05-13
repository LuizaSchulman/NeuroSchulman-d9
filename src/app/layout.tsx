import '../styles/index.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Neuropsychology Homepage',
  description: 'Neuropsychology clinic website',
  other: {
    'typekit': 'nhk6bpv',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 antialiased">
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://use.typekit.net/nhk6bpv.css" />
        {children}
      </body>
    </html>
  );
}
