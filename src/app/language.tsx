"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

export type Locale = "en" | "es";

const translations = {
  en: {
    language: "Language",
    selectLanguage: "Select language",
    downloadResume: "Download PDF Resume",
    about: "About Me",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    portfolio: "Portfolio",
    contact: "Contact Me",
    yearsExperience: "Years of experience",
    developmentExpertise: "Development Expertise",
    improvingEnglish: "English (improving)",
    spanish: "Spanish",
    client: "Client",
    liveDemo: "Live Demo",
    architecture: "Architecture",
    code: "Code",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    sendNow: "Send Now",
    sending: "Sending...",
    sent: "Your message was sent successfully. I will get in touch soon.",
    sendError: "Could not send your message. Please try again.",
    sendUnknownError: "An error occurred while sending your message.",
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "On-site",
    fulltime: "Full-time",
    freelance: "Freelance",
    contract: "Contract",
    heroName: "I'm Sebastián",
    heroRole: "Full Stack Developer",
    heroDescription: "With 15+ years of experience, I build scalable web applications, APIs, and digital solutions that help businesses turn ideas into successful products.",
    aboutDescription: "I'm Sebastián, a Full Stack Developer with over 15 years of experience building websites, web applications, and digital solutions. I enjoy solving complex problems, learning new technologies, and creating products that are both reliable and easy to use.",
    aiAutomation: "AI & Automation",
  },
  es: {
    language: "Idioma",
    selectLanguage: "Seleccionar idioma",
    downloadResume: "Descargar CV en PDF",
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    education: "Educación",
    portfolio: "Portafolio",
    contact: "Contáctame",
    yearsExperience: "Años de experiencia",
    developmentExpertise: "Especialidad en desarrollo",
    improvingEnglish: "Inglés (en progreso)",
    spanish: "Español",
    client: "Cliente",
    liveDemo: "Demo en vivo",
    architecture: "Arquitectura",
    code: "Código",
    name: "Nombre",
    phone: "Teléfono",
    email: "Correo electrónico",
    message: "Mensaje",
    sendNow: "Enviar mensaje",
    sending: "Enviando...",
    sent: "Tu mensaje se envió correctamente. Me pondré en contacto pronto.",
    sendError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    sendUnknownError: "Ocurrió un error al enviar el mensaje.",
    remote: "Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
    fulltime: "Tiempo completo",
    freelance: "Independiente",
    contract: "Contrato",
    heroName: "Soy Sebastián",
    heroRole: "Desarrollador Full Stack",
    heroDescription: "Con más de 15 años de experiencia, creo aplicaciones web escalables, APIs y soluciones digitales que ayudan a las empresas a convertir sus ideas en productos exitosos.",
    aboutDescription: "Soy Sebastián, desarrollador Full Stack con más de 15 años de experiencia creando sitios web, aplicaciones y soluciones digitales. Disfruto resolver problemas complejos, aprender nuevas tecnologías y crear productos confiables y fáciles de usar.",
    aiAutomation: "IA y Automatización",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

const LanguageContext = createContext<{
  locale: Locale;
  t: (key: TranslationKey) => string;
} | null>(null);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const value = useMemo(
    () => ({
      locale: initialLocale,
      t: (key: TranslationKey) => translations[initialLocale][key],
    }),
    [initialLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
