import { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Head from "next/head";

const WhisperingSignature = localFont({
  src: '../public/fonts/WhisperingSignature.ttf',
  variable: '--font-whispering-signature',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${poppins.variable} ${roboto.variable} ${WhisperingSignature.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
