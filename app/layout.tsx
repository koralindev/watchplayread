import { Header } from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import { Comfortaa, Hachi_Maru_Pop } from 'next/font/google'
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['300','400','500','700'] })
const hachi = Hachi_Maru_Pop({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${comfortaa.className} ${hachi.className} dark`}>
      <body suppressHydrationWarning >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
