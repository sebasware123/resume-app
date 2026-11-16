"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useLanguage } from "@/app/language";
import type { Project } from "@/app/types/portfolio";

const LatestWork = ({ workData }: { workData: Project[] }) => {
  const { locale, t } = useLanguage();

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
                      { label: t("liveDemo"), url: value.links.demo },
                      { label: t("architecture"), url: value.links.architecture },
                      { label: t("code"), url: value.links.code },
                    ].filter((link) => link.url)
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
                          {projectLinks.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {projectLinks.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
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
    </section>
  );
};

export default LatestWork;
