// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GJWC',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GJWC', // Usually your GitHub org/user name.
  projectName: 'GJWC Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'demo',
        routeBasePath: 'demo',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ads',
        path: '01ads',
        routeBasePath: '01ads',
        sidebarPath: require.resolve('./sidebars01Ads.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exam',
        path: '02exam',
        routeBasePath: '02exam',
        sidebarPath: require.resolve('./sidebars02Exam.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vpn',
        path: '03vpn',
        routeBasePath: '03vpn',
        sidebarPath: require.resolve('./sidebars03VPN.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GJWC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'GJWC Doc',
          },
          {
            to: '/demo/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Demo',
            activeBaseRegex: `/demo/`,
          },
          {
            to: '/01ads/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Ads',
            activeBaseRegex: `/ads/`,
          },
          {
            to: '/02exam/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Exam',
            activeBaseRegex: `/exam/`,
          },
          {
            to: '/03vpn/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'VPN',
            activeBaseRegex: `/vpn/`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
               label: 'Tutorial',
               to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
