import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Hero section generator',
    description:
        'An AI Powered Hero section generator to create fully customizable hero section with 100+ themes and 10+ templates.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={``}>{children}</body>
        </html>
    );
}
