import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import ContactBar from "./components/home/hero-section/contact-bar";
import LatestWork from "./components/home/latest-work";
import pageData from "../../public/data/page-data.json";
import workData from "../../public/data/work-data.json";

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection />
      <ContactBar contactBarData={pageData.contactBar} />
      <LatestWork workData={workData.workData} />
      <AboutMe />
      <ExperienceSec />
      <EducationSkills educationData={pageData.educationData} />
      <Contact contactData={pageData.contactLinks} />
    </main>
  );
}