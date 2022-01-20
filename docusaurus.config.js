// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MolochDAO",
  tagline: "The Original Grant Giving DAO",
  url: "https://moloch-website.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Inverted_pentacle_bold.svg",
  organizationName: "MolochDAO", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MolochDAO",
        logo: {
          alt: "MolochDAO",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction/wtf-is-moloch",
            position: "right",
            label: "Handbook",
          },
          { to: "/project-grants", label: "Project Grants", position: "right" },
          {
            to: "/research-grants",
            label: "Research Grants",
            position: "right",
          },
          { to: "/new-members", label: "New Members", position: "right" },
          {
            to: "/annual-report",
            label: "2021 Annual Report",
            position: "right",
          },
          {
            href: "https://discord.com/invite/PxrnEUsbef",
            label: "Discord",
            position: "right",
            target: "_blank",
            className: "nav-icon-discord",
          },
          {
            href: "https://twitter.com/molochdao",
            label: "Twitter",
            position: "right",
            target: "_blank",
            className: "nav-icon-twitter",
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            items: [
              {
                to: "/",
                label: "Home",
              },
              {
                to: "/docs/introduction/wtf-is-moloch",
                label: "Handbook",
              },
            ],
          },
          {
            items: [
              {
                to: "/project-grants",
                label: "Project Grants",
              },
              {
                to: "/research-grants",
                label: "Research Grants",
              },
              { to: "/new-members", label: "New Members" },
              {
                to: "/annual-report",
                label: "2021 Annual Report",
              },
            ],
          },
          {
            items: [
              {
                href: "https://molochdao.medium.com/",
                label: "MolochDAO Blog",
                target: "_blank",
              },
              {
                href: "https://medium.com/ethereum-cat-herders/",
                label: "Ethereum Cat Herders",
                target: "_blank",
              },
              {
                href: "https://medium.com/@traviswyche/",
                label: "Death Guild Blog",
                target: "_blank",
              },
            ],
          },
          {
            items: [
              {
                href: "https://discord.com/invite/PxrnEUsbef",
                label: "Discord",
                target: "_blank",
              },
              {
                href: "https://twitter.com/molochdao",
                label: "Twitter",
                target: "_blank",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

module.exports = config;
