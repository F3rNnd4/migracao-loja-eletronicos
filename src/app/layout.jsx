import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header/Header";

const cormorantGaramond = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={cormorantGaramond.variable}>
      <body className={cormorantGaramond.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Migração de Loja de Eletrônicos",
  description: "Atividade: Migração de Loja de Eletrônicos para Next.js",
  icons: {
    icon: "/img/mall-car.png",
    shortcut: "/img/mall-car.png",
    apple: "/img/mall-car.png",
  }
};
