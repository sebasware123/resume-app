export type ContactItem = {
  type: string;
  label: string;
  icon: string;
  link: string;
};

export type SocialItem = {
  platform: string;
  icon: string;
  link: string;
};

export type ContactBarData = {
  contactItems: ContactItem[];
  socialItems: SocialItem[];
};

export type EducationItem = {
  title: string;
  description: string;
  titleEs: string;
  descriptionEs: string;
};

export type SkillItem = {
  name: string;
  nameEs: string;
  icon: string;
  rating: number;
};

export type EducationData = {
  education: EducationItem[];
  skills: SkillItem[];
};

export type ContactLinksData = {
  socialLinks: { title: string; href: string }[];
  contactInfo: { type: string; label: string; link: string }[];
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectLinks = {
  demo: string;
  architecture: string;
  code: string;
};

export type Project = {
  id: string;
  image: string;
  localizedImages?: {
    en: string;
    es: string;
  };
  title: string;
  description?: string;
  features?: ProjectFeature[];
  links?: ProjectLinks;
  client?: string;
  translations?: {
    en: {
      title: string;
      description: string;
      features: ProjectFeature[];
    };
    es: {
      title: string;
      description: string;
      features: ProjectFeature[];
    };
  };
};

export type FormSubmitResponse = {
  success: boolean | "true" | "false";
};
