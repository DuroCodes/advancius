// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Advancius Guide',
  tagline: 'The unofficial guide for Advancius',
  url: 'https://docs.suta.tk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/advancius.png',
  organizationName: 'durocodes',
  projectName: 'advancius',

  plugins: ['@docusaurus/theme-live-codeblock'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/durocodes/advancius/tree/master/',
          showLastUpdateAuthor: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      metadata: [
        {
          content: 'Advancius - Guide',
          property: 'og:title',
        },
        {
          content: 'https://s3.amazonaws.com/files.enjin.com/1554591/modules/wiki/53516272/Advancius-A.png',
          property: 'og:image',
        },
        {
          content: '#2E3037',
          name: 'theme-color',
        },
        {
          content: 'Advancius is a Minecraft network.',
          property: 'og:description',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        title: 'Advancius',
        logo: {
          alt: 'Advancius Logo',
          src: 'img/advancius.png',
        },
        items: [
          {
            href: 'https://github.com/durocodes/advancius',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Advancius',
            items: [
              {
                label: 'Website',
                href: 'https://www.advancius.net/',
              },
              {
                label: 'Vote',
                href: 'https://www.advancius.net/vote',
              },
              {
                label: 'Social',
                href: 'https://www.advancius.net/social',
              },
              {
                label: 'Apply',
                href: 'https://www.advancius.net/apply',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/durocodes/advancius',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
