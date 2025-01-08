import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DefconQ',
  tagline: 'Q made easy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://DefconQ.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DefconQ', // Usually your GitHub org/user name.
  projectName: 'defconQ', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
   i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
	  blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
	gtag: {
	  trackingID: 'G-E9ED09HNE3',
	  anonymizeIP: true,
	},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'R6JV2N50EX',
      // Public API key: it is safe to commit it
      apiKey: 'be1bbc2207215e22235b0a66050d1c04',
      indexName: 'defconq',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
	to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      //... other Algolia params
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'announcementBar',
      backgroundColor: '#74e8a3',
      isCloseable: true,
      //content: 'If you would like to connect, please reach out on <a href="https://www.linkedin.com/in/alexanderunterrainer/">Linkedin</a>',
      content: 'Stay up to date with the latest blogs posts - subscribe to my free Substack newsletter now <a href="https://defconq.substack.com">Free Substack Newsletter</a>',
    },
    tableOfContents: {
      // minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'DefconQ Logo',
        src: 'img/logo.svg',
	width: 50,
	height: 150,
	srcDark: 'img/logoLight.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
	{to: '/about/about', label: 'About', position: 'left'},
	{to: '/testimonials/testimonials', label: 'Testimonials', position: 'left'},
	{to: '/cv/cv', label: 'CV', position: 'left'},
        {
          href: 'https://defconq.substack.com',
          label: 'Newsletter',
          position: 'left',
        },
        {
          href: 'https://defconq.myspreadshop.co.uk',
          label: 'Swag',
          position: 'left',
        },
        {
          href: 'https://github.com/DefconQ',
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
              label: 'Learn',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'DefconQ Linkedin',
              href: 'https://www.linkedin.com/company/defconq/',
            },
            {
              label: 'Alexander Unterrainer Linkedin',
              href: 'https://www.linkedin.com/in/alexanderunterrainer/',
            },
            {
              label: 'DefconQ Swag',
              href: 'https://defconq.myspreadshop.co.uk',
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
	    { label: 'YouTube Channel',
	      href: 'https://www.youtube.com/@DefconQ',
            },
            {
              label: 'Newsletter',
              href: 'https://defconq.substack.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DefconQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DefconQ Ltd. This website is maintained by Alexander Unterrainer. Disclaimer: All content shared on this website reflect solely his personal thoughts and opinions, and is not representative of any past, current, or future employers or affiliations.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
