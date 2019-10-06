/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const path = require('path');

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',

  title: 'hyperglass', // Title for your website.
  tagline: 'A modern, customizable network looking glass written in Python 3',
  url: 'https://hyperglass.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  disableHeaderTitle: true,

  gaTrackingId: '',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/checktheroads/hyperglass',
  twitterUsername: 'checktheroads',

  // Used for publishing and more
  projectName: 'hyperglass',
  organizationName: 'checktheroads',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { page: 'help', label: 'Help' },
    { href: 'https://github.com/checktheroads/hyperglass', label: 'GitHub' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/hyperglass2-mono-white.png',
  footerIcon: 'img/hyperglass-favicon.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#330036',
    secondaryColor: '#ff5e5b',
  },

  /* Custom fonts for website */
  fonts: {
    serifFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
    monoFamily: [
      'Fira Code',
      'monospace',
    ],
  },

  scrollToTop: true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Matt Love`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: ['https://fonts.googleapis.com/css?family=Fira+Code|Nunito:400,600&display=swap'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // Algolia Search
  algolia: {
    apiKey: '028921cd1db90d30c148b4963a4816f6',
    appId: 'GTIVC5R7E6',
  },

  markdownPlugins: [
    require('remarkable-admonitions')({ icon: 'svg-inline' }),
  ],
};

module.exports = siteConfig;
