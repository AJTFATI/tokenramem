export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    tiktok?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Headlines, Hootsuite, & Hoops.",
  description: "The digital diary of Alexander J. Taylor",
  author: {
    name: "Alexander J. Taylor",
    bio: "Creative technologist.",

    avatar: "/images/headshot.png"
  },
  social: {
    instagram: "https://instagram.com/alexanderjordantaylor",
    tiktok: "https://tiktok.com/@alexanderjordantaylor",
    linkedin: "https://linkedin.com/in/alexanderjordantaylor",
    email: "tayloralexanderjordan@gmail.com"
  },
  siteUrl: "https://volks-typo.example.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;