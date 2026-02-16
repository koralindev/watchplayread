import { Header } from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body suppressHydrationWarning >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
