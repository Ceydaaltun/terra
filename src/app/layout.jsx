import { geistMono, geistSans,michroma, play } from "@/components/Fonts";
import "./globals.css";


export const metadata = {
  title: "TERRA",
  description: "Fast, functional, visiually captivating websites.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
      </head>
      <body
        className={`${play.className} text-text-primary antialiased bg-black `}
      >

        {children}
      </body>
    </html>
  );
}
