import type { Metadata } from "next";
import { Geist, Geist_Mono, Rowdies } from "next/font/google";
//import { Rowdies_Light} from "./public/fonts/Rowdies_Light.ttf";
import "./globals.css";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rowdL = Rowdies({ weight:"400", subsets: ["latin"]});


export const metadata: Metadata = {
  title: "MKCarlilse",
  description: "Resume for MKCarlisle ",
 robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rowdL}  antialiased`}
      >
         
        {children}
        
        <div className="text-center ">
         
        <Footer/>
        </div>
      </body>
    </html>
  );
}
