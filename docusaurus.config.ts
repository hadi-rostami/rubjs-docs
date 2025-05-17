import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Rubjs",
  tagline: "ساده بنویس، هوشمند بساز — تجربه‌ای تازه در توسعه ربات‌های روبیکایی",
  favicon: "img/logo.png",

  url: "https://hadi-rostami.github.io",

  baseUrl: "/rubjs-docs/",
  organizationName: "hadi-rostami", // ✅ GitHub username
  projectName: "rubjs-docs", // ✅ نام ریپوی گیت‌هاب
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
    localeConfigs: {
      fa: {
        label: "فارسی",
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },

          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Rubjs",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "یادگیری",
        },

        {
          href: "https://github.com/hadi-rostami/rubjs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "مستندات",
          items: [
            {
              label: "یادگیری",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "جامعه",
          items: [
            {
              label: "تلگرام",
              href: "https://t.me/rubjs_channel",
            },
          ],
        },
        {
          title: "بیشتر",
          items: [
            {
              label: "گیت‌هاب",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Rubjs - ساده بنویس، هوشمند بساز" },
      {
        property: "og:description",
        content: "تجربه‌ای تازه در توسعه ربات‌های روبیکایی",
      },
      {
        property: "og:image",
        content: "https://hadi-rostami.github.io/rubjs-docs/img/logo.png",
      },
      {
        property: "og:url",
        content: "https://hadi-rostami.github.io/rubjs-docs/",
      },
      {
        name: "twitter:image",
        content: "https://hadi-rostami.github.io/rubjs-docs/img/logo.png",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
