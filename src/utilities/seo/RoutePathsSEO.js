export const SITE_URL = "localhost";
export const SITE_NAME = "Martfury";
export const AUTHOR = "Nouthemes";
export const CREATOR_ID = "Nouthemes";

const mainHeadData = {
  "/": {
    title: "Home",
    desc: "Welcome to our store.",
    canonical: SITE_URL,
    isIndexed: true,
    followLinks: true,
    lastmod: "2024-01-01",
    priority: 1.0,
  },
  "/affiliate": {
    title: "Affiliate Program",
    desc: "Join our affiliate program and earn commissions by referring customers.",
    canonical: `${SITE_URL}/affiliate`,
    isIndexed: true,
    followLinks: true,
    lastmod: "2024-01-05",
    priority: 0.8,
  },
  "/about-us": {
    title: "About Us",
    desc: "Learn more about us.",
    canonical: `${SITE_URL}/about-us`,
    isIndexed: true,
    followLinks: true,
    lastmod: "2024-01-10",
    priority: 0.6,
  },
  "/why-choose-us": {
    title: "Why Choose Us",
    desc: "Discover why customers choose us.",
    canonical: `${SITE_URL}/why-choose-us`,
    isIndexed: true,
    followLinks: true,
  },
  "/vendor/become-a-vendor": {
    title: "Become a Vendor",
    desc: "Join us as a vendor and grow your business.",
    canonical: `${SITE_URL}/vendor/become-a-vendor`,
    isIndexed: true,
    followLinks: true,
  },
  "/tools": {
    title: "Tools",
    desc: "Our tools to help you succeed.",
    canonical: `${SITE_URL}/tool`,
    isIndexed: true,
    followLinks: true,
  },
  "/terms": {
    title: "Terms & Conditions",
    desc: "Read our terms and conditions carefully before using our services.",
    canonical: `${SITE_URL}/terms`,
    isIndexed: true,
    followLinks: true,
    lastmod: "2024-01-25",
    priority: 0.5,
  },
  "/stores": {
    title: "Stores",
    desc: "Browse all our stores.",
    canonical: `${SITE_URL}/stores`,
    isIndexed: true,
    followLinks: true,
  },
  "/store-detail": {
    title: "Store Details",
    desc: "View details about our store and its offerings.",
    canonical: `${SITE_URL}/store/[slug]`,
    isIndexed: true,
    followLinks: true,
    lastmod: "2024-01-25",
    priority: 0.5,
  },

  "/shop": {
    title: "Shop",
    desc: "Shop our wide selection of products.",
    canonical: `${SITE_URL}/shop`,
    isIndexed: true,
    followLinks: true,
  },
  "/shipping": {
    title: "Shipping",
    desc: "Our shipping policies.",
    canonical: `${SITE_URL}/shipping`,
    isIndexed: true,
    followLinks: true,
  },
  "/search": {
    title: "Search",
    desc: "Search products, stores and more.",
    canonical: `${SITE_URL}/search`,
    isIndexed: true,
    followLinks: true,
  },
  "/return-policy": {
    title: "Return Policy",
    desc: "Read our return policy.",
    canonical: `${SITE_URL}/return-policy`,
    isIndexed: true,
    followLinks: true,
  },
  "/register": {
    title: "Register",
    desc: "Create your account.",
    canonical: `${SITE_URL}/register`,
    isIndexed: true,
    followLinks: true,
  },
  "/quality-process": {
    title: "Quality Process",
    desc: "Our commitment to quality.",
    canonical: `${SITE_URL}/quality-process`,
    isIndexed: true,
    followLinks: true,
  },
  "/product/[id]": {
    title: "Product",
    desc: "View product details.",
    canonical: `${SITE_URL}/product/[id]`,
    isIndexed: true,
    followLinks: true,
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    desc: "Learn how we protect your privacy.",
    canonical: `${SITE_URL}/privacy-policy`,
    isIndexed: true,
    followLinks: true,
  },
  "/post/[slug]": {
    title: "Blog Post",
    desc: "Read our latest post.",
    canonical: `${SITE_URL}/post/[slug]`,
    isIndexed: true,
    followLinks: true,
  },
  "/login": {
    title: "Login",
    desc: "Login to your account.",
    canonical: `${SITE_URL}/login`,
    isIndexed: true,
    followLinks: true,
  },
  "/faqs": {
    title: "FAQs",
    desc: "Frequently asked questions.",
    canonical: `${SITE_URL}/faqs`,
    isIndexed: true,
    followLinks: true,
  },
  "/contact-us": {
    title: "Contact Us",
    desc: "Get in touch with us.",
    canonical: `${SITE_URL}/contact-us`,
    isIndexed: true,
    followLinks: true,
  },
  "/category/[slug]": {
    title: "Category",
    desc: "Explore products in this category.",
    canonical: `${SITE_URL}/category/[slug]`,
    isIndexed: true,
    followLinks: true,
  },
  "/blog": {
    title: "Blog",
    desc: "Read our latest blog posts.",
    canonical: `${SITE_URL}/blog`,
    isIndexed: true,
    followLinks: true,
  },
  "/career": {
    title: "Career Opportunities",
    desc: "Explore exciting career opportunities at YourCompany. Join our team and grow your skills in a dynamic and supportive environment.",
    canonical: `${SITE_URL}/career`,
    isIndexed: true,
    followLinks: true,
  },
  "/blank": {
    title: "Page Not Found",
    desc: "Sorry, the page you are looking for does not exist.",
    canonical: `${SITE_URL}/404`,
    isIndexed: true,
    followLinks: true,
  },
  UNDEFINED: {
    title: "Page Not Found",
    desc: "Sorry, the page you are looking for does not exist.",
    canonical: `${SITE_URL}/404`,
    isIndexed: false,
    followLinks: false,
  },
};

export default function getHeadData(path) {
  const content = mainHeadData[path];

  if (content === undefined) {
    const defaultData = mainHeadData["UNDEFINED"];
    if (!defaultData)
      throw new Error(
        "CRITICAL ERROR: No default data exists on RoutePathsSEO"
      );
    return defaultData;
  } else {
    return content;
  }
}

export const generatePageMetadata = (seoData) => ({
  title: seoData.title,
  description: seoData.desc,
  metadataBase: "http://localhost:3000",
  generator: AUTHOR,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  keywords: [""],
  authors: [{ name: AUTHOR }, { name: AUTHOR, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: seoData.isIndexed,
    follow: seoData.followLinks,
    nocache: true,
    googleBot: {
      index: seoData.isIndexed,
      follow: seoData.followLinks,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: seoData.canonical,
  },

  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.desc,
    creator: AUTHOR,
    creatorId: CREATOR_ID,
    siteId: "",
    images: [process.env.PUBLIC_ASSET_PREFIX + "/images/preview.jpeg"],
  },

  openGraph: {
    title: seoData.title,
    description: seoData.desc,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: process.env.PUBLIC_ASSET_PREFIX + "/images/preview.jpeg",
        width: 1200,
        height: 628,
        alt: SITE_NAME,
      },
    ],
    type: "website",
  },
});

export function getIndexedPaths() {
  let res = [];
  Object.keys(mainHeadData).forEach((key) => {
    if (mainHeadData[key].isIndexed) res.push(mainHeadData[key]);
  });
  return res;
}
