/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'hyperglass',
  tagline: 'A modern, customizable network looking glass written in Python 3',
  url: 'https://hyperglass.io',
  baseUrl: '/',
  favicon: 'img/hyperglass.ico',
  organizationName: 'checktheroads', // Usually your GitHub org/user name.
  projectName: 'hyperglass', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'hyperglass',
      logo: {
        src: '',
      },
      links: [
        { to: 'docs/installation', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/checktheroads/hyperglass',
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
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Matt Love`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
