import type { Locale } from "@/app/language";

export type ExperienceId =
  | "arcticYeti"
  | "mercadoLibre"
  | "ceiba"
  | "clinicaDelNorte"
  | "constructoraTitania"
  | "afyana"
  | "meincluyo"
  | "copprize"
  | "epayco"
  | "pagaDiario"
  | "datosYDatos"
  | "solusystem"
  | "proyectoNapa"
  | "ferplasticos"
  | "freelancePortfolio";

export type ExperienceType =
  | "Remote"
  | "Hybrid"
  | "On-site"
  | "Fulltime"
  | "Freelance"
  | "Contract";

type ExperienceCopy = {
  title: string;
  description: string;
};

export type Experience = {
  id: ExperienceId;
  year: string;
  company: string;
  type: ExperienceType;
  translations: Record<Locale, ExperienceCopy>;
};

const experienceById: Record<ExperienceId, Experience> = {
  arcticYeti: {
    id: "arcticYeti",
    year: "2026",
    company: "ArcticYeti.es",
    type: "Remote",
    translations: {
      en: {
        title: "Full Stack Developer",
        description: "Designed and developed the company's internal web platform used by the global Arctic travel sales team. Modernized user interfaces, improved accessibility, SEO performance and participated in frontend and backend architecture decisions to ensure scalability.",
      },
      es: {
        title: "Desarrollador Full Stack",
        description: "Diseñé y desarrollé la plataforma web interna de la empresa, utilizada por el equipo global de ventas de viajes árticos. Modernicé interfaces, mejoré la accesibilidad y el rendimiento SEO, y participé en decisiones de arquitectura frontend y backend para asegurar la escalabilidad.",
      },
    },
  },
  mercadoLibre: {
    id: "mercadoLibre",
    year: "2022 - 2025",
    company: "Mercado Libre",
    type: "Hybrid",
    translations: {
      en: {
        title: "Software Engineer / Full Stack Developer",
        description: "Developed and maintained critical features for Shipping, Real Estate and Seller Experience platforms serving millions of users across Latin America. Built backend services with Golang and Java, led frontend migrations using React and contributed to highly scalable distributed systems.",
      },
      es: {
        title: "Ingeniero de Software / Desarrollador Full Stack",
        description: "Desarrollé y mantuve funcionalidades clave para las plataformas de Envíos, Inmuebles y Experiencia de Vendedores, utilizadas por millones de personas en Latinoamérica. Construí servicios backend con Golang y Java, lideré migraciones frontend con React y contribuí a sistemas distribuidos escalables.",
      },
    },
  },
  ceiba: {
    id: "ceiba",
    year: "2021 - 2022",
    company: "Ceiba Software (Outsourcing for Mercado Libre Chile)",
    type: "On-site",
    translations: {
      en: {
        title: "Frontend Architect",
        description: "Defined UI architecture guidelines and led the implementation of distributed frontend applications for Mercado Libre Chile, ensuring maintainability, performance and scalability.",
      },
      es: {
        title: "Arquitecto Frontend",
        description: "Definí lineamientos de arquitectura de interfaz y lideré la implementación de aplicaciones frontend distribuidas para Mercado Libre Chile, priorizando mantenibilidad, rendimiento y escalabilidad.",
      },
    },
  },
  clinicaDelNorte: {
    id: "clinicaDelNorte",
    year: "2021",
    company: "Clínica del Norte",
    type: "On-site",
    translations: {
      en: {
        title: "RPA Automation Leader",
        description: "Led the planning, design and deployment of automation bots for complex administrative and healthcare workflows, helping streamline operational processes across hospital departments.",
      },
      es: {
        title: "Líder de Automatización RPA",
        description: "Lideré la planificación, el diseño y la implementación de bots de automatización para flujos administrativos y de salud complejos, optimizando procesos operativos en diferentes áreas hospitalarias.",
      },
    },
  },
  constructoraTitania: {
    id: "constructoraTitania",
    year: "2019 - 2021",
    company: "Constructora Titania SAS",
    type: "Fulltime",
    translations: {
      en: {
        title: "Development & Web Scraping Leader",
        description: "Led technical development of corporate web platforms and custom large-scale web scraping solutions used for internal business intelligence and market analysis.",
      },
      es: {
        title: "Líder de Desarrollo y Web Scraping",
        description: "Lideré el desarrollo técnico de plataformas web corporativas y soluciones de web scraping a gran escala para inteligencia de negocio y análisis de mercado.",
      },
    },
  },
  afyana: {
    id: "afyana",
    year: "2017 - 2020",
    company: "AFYANA",
    type: "Fulltime",
    translations: {
      en: {
        title: "Software Developer",
        description: "Designed, deployed and maintained a web-based medical records platform focused on healthcare professionals and independent medical practices.",
      },
      es: {
        title: "Desarrollador de Software",
        description: "Diseñé, implementé y mantuve una plataforma web de historias clínicas dirigida a profesionales de la salud y consultorios independientes.",
      },
    },
  },
  meincluyo: {
    id: "meincluyo",
    year: "2016 - 2018",
    company: "Meincluyo.com",
    type: "Fulltime",
    translations: {
      en: {
        title: "Full Stack Development Lead",
        description: "Led infrastructure planning, server administration and core platform development for a specialized social networking platform.",
      },
      es: {
        title: "Líder de Desarrollo Full Stack",
        description: "Lideré la planificación de infraestructura, la administración de servidores y el desarrollo central de una plataforma especializada de redes sociales.",
      },
    },
  },
  copprize: {
    id: "copprize",
    year: "2015 - 2016",
    company: "Copprize SAS",
    type: "Fulltime",
    translations: {
      en: {
        title: "Web Developer",
        description: "Developed, tested and deployed enterprise web platform modules while collaborating on system maintenance and feature enhancements.",
      },
      es: {
        title: "Desarrollador Web",
        description: "Desarrollé, probé e implementé módulos para plataformas web empresariales, colaborando también en su mantenimiento y evolución.",
      },
    },
  },
  epayco: {
    id: "epayco",
    year: "2014",
    company: "ePayco",
    type: "Fulltime",
    translations: {
      en: {
        title: "Plugin & Payment Gateway Developer",
        description: "Worked during the company's early growth stage developing payment gateway integrations and plugins for major CMS and e-commerce platforms including Magento and PrestaShop.",
      },
      es: {
        title: "Desarrollador de Plugins y Pasarelas de Pago",
        description: "Durante la etapa inicial de crecimiento de la empresa, desarrollé integraciones con pasarelas de pago y plugins para CMS y plataformas de comercio electrónico como Magento y PrestaShop.",
      },
    },
  },
  pagaDiario: {
    id: "pagaDiario",
    year: "2014",
    company: "PagaDiario",
    type: "Fulltime",
    translations: {
      en: {
        title: "Project Leader & Payment System Developer",
        description: "Led development of a multi-platform payment and debt management system with online payment gateway integration for web and mobile environments.",
      },
      es: {
        title: "Líder de Proyecto y Desarrollador de Sistemas de Pago",
        description: "Lideré el desarrollo de un sistema multiplataforma de pagos y gestión de deudas, integrado con pasarelas de pago para entornos web y móviles.",
      },
    },
  },
  datosYDatos: {
    id: "datosYDatos",
    year: "2013 - 2014",
    company: "Datos y Datos LTDA",
    type: "Fulltime",
    translations: {
      en: {
        title: "Full Stack Developer",
        description: "Developed financial modules, dynamic user interfaces, CSS standardization processes and supported data extraction and mining initiatives.",
      },
      es: {
        title: "Desarrollador Full Stack",
        description: "Desarrollé módulos financieros e interfaces dinámicas, estandaricé CSS y apoyé iniciativas de extracción y análisis de datos.",
      },
    },
  },
  solusystem: {
    id: "solusystem",
    year: "2013",
    company: "Solusystem",
    type: "Fulltime",
    translations: {
      en: {
        title: "CRM Developer & Support Engineer",
        description: "Developed custom SugarCRM extensions and provided software and infrastructure support for enterprise clients.",
      },
      es: {
        title: "Desarrollador CRM e Ingeniero de Soporte",
        description: "Desarrollé extensiones personalizadas para SugarCRM y brindé soporte de software e infraestructura a clientes empresariales.",
      },
    },
  },
  proyectoNapa: {
    id: "proyectoNapa",
    year: "2013",
    company: "Proyecto NAPA",
    type: "Contract",
    translations: {
      en: {
        title: "Web Development Leader",
        description: "Led the design and implementation of the institutional web portal for the NAPA Aviation School.",
      },
      es: {
        title: "Líder de Desarrollo Web",
        description: "Lideré el diseño y la implementación del portal institucional de la Escuela de Aviación NAPA.",
      },
    },
  },
  ferplasticos: {
    id: "ferplasticos",
    year: "2012 - 2013",
    company: "Ferplasticos SAS",
    type: "Fulltime",
    translations: {
      en: {
        title: "Backend Engineer & Project Leader",
        description: "Directed a factory production data virtualization project, building real-time systems using PHP and Zend Framework under MVC architecture.",
      },
      es: {
        title: "Ingeniero Backend y Líder de Proyecto",
        description: "Dirigí un proyecto para virtualizar datos de producción de fábrica y construí sistemas en tiempo real con PHP y Zend Framework bajo arquitectura MVC.",
      },
    },
  },
  freelancePortfolio: {
    id: "freelancePortfolio",
    year: "2011 - 2012",
    company: "Diego Pombo / Teatro Salamandra / Circuito de Jazz",
    type: "Freelance",
    translations: {
      en: {
        title: "Web Developer & Technical Support",
        description: "Developed interactive websites, WordPress platforms and digital portfolios for artists, cultural organizations and events.",
      },
      es: {
        title: "Desarrollador Web y Soporte Técnico",
        description: "Desarrollé sitios web interactivos, plataformas WordPress y portafolios digitales para artistas, organizaciones culturales y eventos.",
      },
    },
  },
};

export const experiences = Object.values(experienceById);
