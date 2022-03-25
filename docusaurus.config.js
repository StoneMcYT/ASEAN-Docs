const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const isDeployPreview = process.env.CONTEXT === "deploy-preview";
// const isProductionDeployment = process.env.CONTEXT === "production";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASEAN BTE',
  tagline: 'We are building southeast asia in Minecraft 1:1 scale!',
  url: 'https://builders-doc.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons/aseanbte_logo.png',
  organizationName: 'ASEAN-Build-The-Earth',
  projectName: 'ASEAN-Docs',
  clientModules: [require.resolve('./src/global/client_module.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs.intro',
          routeBasePath: "intro", // change default "doc/" root path
          sidebarPath: require.resolve('./sidebars_intro.js'),
          editUrl: ({ locale, docPath }) => {
            if (locale !== 'en') {
              return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: '3352452083',
          anonymizeIP: true,
        },
        blog: false,
        /* no blog
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/',
        },
        */
        theme: {
          customCss: require.resolve('./src/global/global.css'),
        },
      }),
    ],
  ],

  plugins: [
    [ /* Builder guide page */
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'builder-guide',
        path: 'docs.builder-guide',
        routeBasePath: 'guide',
        editUrl: ({locale, docPath}) => {
          if (locale !== 'en') {
            return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${locale}/docusaurus-plugin-content-docs-builder-guide/current/${docPath}`;
          }
          return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebars_builder-guide.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  (
    {
      colorMode: { defaultMode: "dark", },
      autoCollapseSidebarCategories: true,
      hideableSidebar: true, // idk what this do
      image: "img/icons/aseanbte_full_logo.jpg", //meta og image
      metadata: [{name: 'theme-color', content: '#ffc561'}],
      navbar: {
        title: 'ASEAN BTE',
        logo: {
          alt: 'ASEAN BTE',
          src: 'img/icons/aseanbte_logo.gif',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Get Started',
          },
          { 
            to: 'guide/builder-guide',
            position: 'left',
            label: 'Builder Guide',
          },
          {
            to: 'support', 
            label: 'Support Us', 
            position: 'left'
          },
          {
            href: 'https://discord.gg/DNwnKmkQpw',
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [
              { // [TODO]: replace this href to our google doc translate site
                href: 'https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs',
                label: 'Help Us Translate',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Association of Southeast Asian Nation Build The Earth.`,
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: 'intro/get-started',
              },
              {
                label: 'Builder Guide',
                to: 'guide/builder-guide',
              },
            ],
          },
          {
            title: 'Discord Community',
            items: [
              {
                label: 'BuildTheEarth.net',
                href: 'https://discord.gg/buildtheearth',
              },
              {
                label: 'BuildTheEarth.Asia',
                href: 'https://discord.gg/R5dfd4Fc8b'
              },
              {
                label: 'BuildTheEarth ASEAN',
                href: 'https://discord.gg/DNwnKmkQpw',
              },             
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Support Us',
                to: '/support',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ASEAN-Build-The-Earth',
              },
              {
                label: 'BuildTheEarth Website',
                href: 'https://buildtheearth.net/'
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // extra annoucement
      announcementBar: {
        id: 'annouce_wip-caution',
        content:
          '<strong>Hey, This website is still in a heavy development, If you want to help us, ask our admin in discord server or contribute directly in our <a href="https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs">github repository</a></strong>',
        backgroundColor: '#99ffcc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }
  ),
    
  i18n: {
    defaultLocale: 'en',
    locales: isDeployPreview? ['en'] : ['en', 'th', 'my', 'id', 'vn', 'ph'],
    localeConfigs: {
      /**
       * htmlLang code: [https://gist.github.com/JamieMason/3748498]
       */
      en: { label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      th: { label: 'Thai',
        direction: 'ltr',
        htmlLang: 'th-TH',
      },
      my: { label: 'Malay',
        direction: 'ltr',
        htmlLang: 'ms-MY',
      },
      id: { label: 'Indonesian',
        direction: 'ltr',
        htmlLang: 'id-ID',
      },
      vn: { label: 'Vietnamese',
        direction: 'ltr',
        htmlLang: 'vi-VN',
      },
      ph: { label: 'Filipino',
        direction: 'ltr',
        htmlLang: 'en-PH',
      },
    },
  },

  scripts: [
    { /* kofi widget button script, will be drawn on footer */
      defer: true,
      async: true,
      src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
      id: "kofi-overlay-widget-script",
    }
  ],
};

module.exports = config;
