import type { Metadata } from "next";
import { Geist, Geist_Mono, Rowdies } from "next/font/google";
//import { Rowdies_Light} from "./public/fonts/Rowdies_Light.ttf";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Particles from "./components/Particles";
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
  title: "MKCarlisle",
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
    <html data-theme="caramellatte" lang="en" className="" title='MKCarlisle' suppressHydrationWarning>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <head><script src="my-js-file.js" defer></script></head>
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rowdL}  antialiased`}
      >
       
        {children}
       
        <div className="text-center">
          <div className="fixed "><Nav/></div>
         <Particles
                      className="absolute inset-0 -z-10 zoom-in-100  "
                      quantity={2500}
                      /> 
        <Footer/>
        </div>
      </body>
    </html>
  );
}
