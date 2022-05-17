// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const av8Config = require("./av8.config");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AvBot",
  tagline: "Aviate, Navigate, Communicate",
  url: av8Config.home,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.svg",
      announcementBar: {
        id: "avbot-update",
        content: `🥳 AvBot v4 has been deployed! <a target="_blank" href="${av8Config.invite}">Re-invite AvBot</a> if the bot's slash commands aren't working in your Discord server. 🚀`,
        backgroundColor: "var(--ifm-color-primary-lightest)",
        isCloseable: false,
      },
      navbar: {
        title: `AvBot | Av8`,
        hideOnScroll: false,
        items: [
          {
            to: av8Config.invite,
            label: "Add to Discord",
            position: "right",
            className: "button button--primary nav-button",
          },
          {
            to: av8Config.support,
            label: "Support Server",
            position: "right",
            className: "button button--outline nav-button",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Support",
            to: av8Config.donate,
          },
          {
            label: "GitHub",
            to: av8Config.github,
          },
          {
            label: "Status",
            to: av8Config.status,
          },
          {
            label: "Privacy Policy",
            to: "/privacy-policy",
          },
          {
            label: "Terms and Conditions",
            to: "/terms-and-conditions",
          },
        ],
        copyright: `© 2018-${new Date().getFullYear()} Av8 | Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
        defaultMode: "dark",
      },
    }),
  clientModules: [require.resolve("./clientModules/utils.js")],
};

module.exports = config;
