// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const av8Config = require('./av8.config');
const divisionConfig = require('./divisionConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AvBot',
  tagline: 'Aviate, Navigate, Communicate',
  url: av8Config.home,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    division: divisionConfig,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: `Av8`,
        hideOnScroll: false,
        // logo: {
        //   alt: `Av8 logo`,
        //   src: 'img/logo.svg',
        // },
        items: [
          // Right
          {
            to: av8Config.invite,
            label: 'Add to Discord',
            position: 'right',
            className: 'button button--primary nav-button'
          },
          {
            to: av8Config.support,
            label: 'Support Server',
            position: 'right',
            className: 'button button--outline nav-button'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            to: av8Config.github,
          },
          {
            label: 'Status',
            to: av8Config.status,
          },
        ],
        copyright: `© 2018-${new Date().getFullYear()} Av8 | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
        defaultMode: 'dark'
      },
    }),

  scripts: [
    '/botInfo.js',
  ],

};

module.exports = config;
