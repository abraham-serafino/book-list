import './globals.css';

export const metadata = {
    title: 'Abraham Serafino.com',
    description: 'My personal website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="px-2 md:px-8">{children}</body>
        </html>
    );
}
