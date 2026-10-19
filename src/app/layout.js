import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'DriftWay Docs',
  description: 'Documentation for DriftWay - routing, layouts, data fetching, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
