"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/language";
import type { Project } from "@/app/types/portfolio";

const LatestWork = ({ workData }: { workData: Project[] }) => {
  const { locale, t } = useLanguage();
  const [architectureProject, setArchitectureProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!architectureProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setArchitectureProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [architectureProject]);

  const architectureContent = locale === "es"
    ? {
        title: "Nexo CRM SaaS",
        sections: [
          { title: "¿En qué consiste?", paragraphs: ["Nexo CRM es una aplicación SaaS full-stack para ayudar a equipos comerciales a organizar empresas, contactos, oportunidades de venta y tareas desde un espacio de trabajo compartido. El proyecto demuestra el diseño e integración de una API en Go con una interfaz en Next.js, persistencia relacional y aislamiento de datos por organización.", "El objetivo del proyecto es mostrar habilidades prácticas de desarrollo backend y frontend, diseño de APIs, modelado de datos, autenticación y preparación de despliegue cloud.", "El backend asocia los registros a una organización y verifica la membresía del usuario en las rutas privadas. Así, cada espacio de trabajo consulta sus propios datos."] },
          { title: "Stack", items: ["Frontend: Next.js, React y TypeScript.", "Diseño: interfaz responsive, adaptable a escritorio y móvil.", "Backend: Go y Gin, con una API REST versionada (/api/v1).", "Base de datos: PostgreSQL en Neon, accedida con pgxpool.", "Autenticación: contraseñas protegidas con bcrypt y tokens Bearer. El frontend guarda el token en una cookie HttpOnly.", "Despliegue previsto: frontend en Vercel, backend en Render y base de datos en Neon."] },
          { title: "Arquitectura", paragraphs: ["El backend usa un monolito modular: se despliega como un servicio, pero mantiene separadas las responsabilidades de autenticación, configuración, conexión a datos, rutas y funcionalidades del CRM. Esta estructura mantiene el proyecto abordable y permite ampliarlo cuando crezca.", "El frontend usa Next.js App Router. Sus Route Handlers funcionan como Backend for Frontend (BFF): el navegador solicita datos a Next.js y este los transmite a la API de Go. El token permanece en una cookie protegida y no se expone a los componentes cliente."] },
          { title: "Flujo de datos", flow: "Navegador → Route Handlers de Next.js → API REST en Go → PostgreSQL" },
          { title: "Funcionalidades principales", items: ["Registro e inicio de sesión.", "Dashboard con métricas comerciales.", "CRUD de empresas, contactos, oportunidades y tareas.", "Aislamiento de registros por organización.", "Paginación y validación de datos.", "Interfaz responsive para distintos tamaños de pantalla."] },
        ],
      }
    : {
        title: "Nexo CRM SaaS",
        sections: [
          { title: "Overview", paragraphs: ["Nexo CRM is a full-stack SaaS application that helps sales teams organize companies, contacts, sales opportunities, and tasks in a shared workspace. The project demonstrates the design and integration of a Go API with a Next.js interface, relational persistence, and organization-level data isolation.", "The goal is to demonstrate practical skills in backend and frontend development, API design, data modeling, authentication, and cloud deployment preparation.", "The backend associates records with an organization and verifies user membership on private routes. This ensures each workspace can only access its own data."] },
          { title: "Stack", items: ["Frontend: Next.js, React, and TypeScript.", "Design: responsive interface for desktop and mobile.", "Backend: Go and Gin, with a versioned REST API (/api/v1).", "Database: PostgreSQL on Neon, accessed with pgxpool.", "Authentication: passwords protected with bcrypt and Bearer tokens. The frontend stores the token in an HttpOnly cookie.", "Planned deployment: frontend on Vercel, backend on Render, and database on Neon."] },
          { title: "Architecture", paragraphs: ["The backend uses a modular monolith: it deploys as one service while keeping authentication, configuration, data connections, routes, and CRM features in separate modules. This keeps the project manageable and makes it easier to expand as it grows.", "The frontend uses the Next.js App Router. Its Route Handlers act as a Backend for Frontend (BFF): the browser requests data from Next.js, which forwards it to the Go API. The token stays in a protected cookie and is never exposed to client components."] },
          { title: "Data flow", flow: "Browser → Next.js Route Handlers → Go REST API → PostgreSQL" },
          { title: "Key features", items: ["User registration and sign-in.", "Dashboard with sales metrics.", "CRUD for companies, contacts, opportunities, and tasks.", "Organization-level record isolation.", "Pagination and data validation.", "Responsive interface for different screen sizes."] },
        ],
      };

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>{t("portfolio")}</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData.map((value) => {
                const localizedProject = value.translations?.[locale];
                const title = localizedProject?.title ?? value.title;
                const description = localizedProject?.description ?? value.description;
                const features = localizedProject?.features ?? value.features;
                const projectLinks = value.links
                  ? [
                      { label: t("liveDemo"), url: value.links.demo, isLiveDemo: true },
                      { label: t("architecture"), url: value.links.architecture, isArchitecture: value.id === "saas-crm" },
                      { label: value.links.codeBack ? "Code back" : t("code"), url: value.links.codeBack ?? value.links.code },
                      ...(value.links.codeFront
                        ? [{ label: "Code front", url: value.links.codeFront }]
                        : []),
                    ].filter((link) => link.url || link.isArchitecture)
                  : [];
                return (
                  <div
                    key={value.id}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative">
                      <Image
                        src={getImgPath(value.localizedImages?.[locale] ?? value.image)}
                        alt={title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 xl:gap-3">
                      <h5>{title}</h5>
                      {description ? (
                        <div className="flex flex-col gap-2 text-sm sm:text-base text-secondary">
                          <p>{description}</p>
                          {features && features.length > 0 && (
                            <ul className="list-disc space-y-1 pl-5">
                              {features.map((feature) => (
                                <li key={feature.title}>
                                  <strong className="font-semibold text-black">
                                    {feature.title}:
                                  </strong>{" "}
                                  {feature.description}
                                </li>
                              ))}
                            </ul>
                          )}
                          {value.technologies && value.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-3 pt-2" aria-label={locale === "es" ? "Tecnologías utilizadas" : "Technologies used"}>
                              {value.technologies.map((technology) => (
                                <div key={technology.name} className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-black shadow-sm">
                                  {technology.icon ? (
                                    <Image src={getImgPath(technology.icon)} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                                  ) : technology.symbol === "github" ? (
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-black">
                                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.73 2.55 4.07 1.81.1-.72.4-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.03.75 2.08v3.15c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                                    </svg>
                                  ) : technology.symbol === "responsive" ? (
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-primary" strokeWidth="1.8">
                                      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
                                      <path d="M8 21h8M12 16.5V21" strokeLinecap="round" />
                                    </svg>
                                  ) : (
                                    <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
                                      {technology.symbol}
                                    </span>
                                  )}
                                  <span>{locale === "en" ? technology.nameEn ?? technology.name : technology.name}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {projectLinks.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {projectLinks.map((link) => (
                                link.isArchitecture ? (
                                  <button
                                    key={link.label}
                                    type="button"
                                    onClick={() => setArchitectureProject(value)}
                                    className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                                  >
                                    {link.label}
                                  </button>
                                ) : (
                                  <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                                      link.isLiveDemo
                                        ? "bg-yellow-400 text-black hover:bg-yellow-500 focus-visible:outline-yellow-600"
                                        : "border border-primary text-primary hover:bg-primary hover:text-white focus-visible:outline-primary"
                                    }`}
                                  >
                                    {link.label}
                                  </a>
                                )
                              ))}
                            </div>
                          )}
                          {value.id === "saas-crm" && (
                            <p className="mt-1 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">
                              <span aria-hidden="true" className="font-bold">ℹ</span>
                              <span>
                                {locale === "es"
                                  ? "Nota: el backend está alojado en Render y puede entrar en reposo cuando no recibe tráfico. La primera solicitud puede tardar unos minutos mientras se reactiva."
                                  : "Note: the backend is hosted on Render and may go idle when there is no traffic. The first request can take a few minutes while it wakes up."}
                              </span>
                            </p>
                          )}
                        </div>
                      ) : (
                        <p>{t("client")}: {value?.client}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {architectureProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setArchitectureProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="architecture-modal-title"
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-5 sm:px-8">
              <div>
                <p className="mb-1 text-sm font-medium uppercase tracking-wide text-primary">{t("architecture")}</p>
                <h2 id="architecture-modal-title" className="text-2xl font-semibold">{architectureContent.title}</h2>
              </div>
              <button type="button" onClick={() => setArchitectureProject(null)} aria-label={locale === "es" ? "Cerrar" : "Close"} className="rounded-full p-2 text-2xl leading-none text-gray-500 hover:bg-gray-100 hover:text-black">×</button>
            </header>
            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-7">
                {architectureContent.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="mb-2 text-lg font-semibold text-black">{section.title}</h3>
                    {section.paragraphs && <div className="space-y-3 text-sm leading-6 text-secondary">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
                    {section.items && <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-secondary">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                    {section.flow && <p className="overflow-x-auto rounded-lg bg-softGray px-4 py-3 text-sm font-medium text-black">{section.flow}</p>}
                  </section>
                ))}
              </div>
            </div>
            <footer className="flex justify-end border-t border-gray-200 px-6 py-4 sm:px-8">
              <a href={architectureProject.links?.demo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                {t("liveDemo")}
              </a>
            </footer>
          </section>
        </div>
      )}
    </section>
  );
};

export default LatestWork;
