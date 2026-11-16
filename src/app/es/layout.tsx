import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import LanguageSwitcher from "../components/layout/language-switcher";
import { LanguageProvider } from "../language";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastián Barona | Desarrollador Full Stack",
  description:
    "Sebastián Barona es desarrollador Full Stack con más de 15 años de experiencia creando aplicaciones web escalables, APIs y productos digitales.",
  applicationName: "Portafolio de Sebastián Barona",
  authors: [{ name: "Sebastián Barona" }],
  openGraph: {
    title: "Sebastián Barona | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack con más de 15 años de experiencia creando aplicaciones web, APIs y productos digitales.",
    type: "website",
    locale: "es_CO",
  },
};

export default function SpanishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={bricolageGrotesque.className}>
        <LanguageProvider initialLocale="es">
          <Header />
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
