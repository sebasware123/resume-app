"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLanguage } from "@/app/language";
import type { ContactLinksData, FormSubmitResponse } from "@/app/types/portfolio";

const Contact = ({ contactData }: { contactData: ContactLinksData }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sebasbarona@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(t("sendError"));

      const data = (await response.json()) as FormSubmitResponse;
      if (data.success !== "true" && data.success !== true) {
        throw new Error(t("sendError"));
      }

      setSubmitted(true);
      setFormData({ name: "", number: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : t("sendUnknownError")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>{t("contact")}</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">
                      {t("name")} *
                    </label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="label">
                      {t("phone")} *
                    </label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                      {t("email")} *
                  </label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">
                      {t("message")} *
                  </label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-secondary">
                      {t("sent")}
                    </p>
                  </div>
                )}
                {submitError && (
                  <p role="alert" className="text-red-600">
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? t("sending") : t("sendNow")}
                  </span>
                </button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData.socialLinks
                  .filter((value) => value.title && value.href)
                  .map((value, index) => {
                  return (
                    <div key={index}>
                      <a
                        className="text-base sm:text-lg font-normal text-secondary hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={value?.href}
                      >
                        {value?.title}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData.contactInfo.map((value, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={value.link}
                        className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                      >
                        {value?.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
