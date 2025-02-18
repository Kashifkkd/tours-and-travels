import type { Metadata } from "next";
import "./globals.css";
import Foooter from "./components/footer/page";
import { Poppins } from 'next/font/google';
import Navbar from "./components/navbar/page";
// import DeveloperFooter from "./components/developer_footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ]
});


export const metadata: Metadata = {
  title: "Global tours and travels",
  description:
    "Explore the world with Global Tours and Travels. We offer the best travel packages and experiences to make your trips unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Foooter />
        {/* <DeveloperFooter /> */}
      </body>
    </html>
  );
}
