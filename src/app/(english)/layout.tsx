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
  title: "Sebastián Barona | Full Stack Developer",
  description:
    "Sebastián Barona is a Full Stack Developer with 15+ years of experience building scalable web applications, APIs, and digital products.",
  applicationName: "Sebastián Barona Portfolio",
  authors: [{ name: "Sebastián Barona" }],
  openGraph: {
    title: "Sebastián Barona | Full Stack Developer",
    description:
      "Full Stack Developer with 15+ years of experience building web applications, APIs, and digital products.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>
        <LanguageProvider initialLocale="en">
          <Header />
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
