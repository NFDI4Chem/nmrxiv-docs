const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    // i18n: {
    //     defaultLocale: 'en',
    //     locales: ['en', 'fr'],
    // },
    title: 'nmrXiv',
    tagline: 'Open, FAIR and Consensus-Driven NMR spectroscopy data repository and analysis platform.',
    url: 'https://docs.nmrxiv.org/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',
    organizationName: '', // Usually your GitHub org/user name.
    projectName: 'nmrXiv - Docs', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'support_us', // Any value that will identify this message.
            content: 'You’re browsing the docs for beta version of nmrXiv. Please provide your feedback / suggestions <a target="_blank" rel="noopener noreferrer" href="mailto:info.nmrxiv@uni-jena.de?subject=nmrXiv feedback/suggestions&body=Hi,<Add your suggestions here>">here</a>',
            backgroundColor: '#fafbfc', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
            isCloseable: true, // Defaults to `true`.
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: '',
            logo: {
                alt: 'nmrXiv - Docs',
                src: 'img/logo.svg',
            },
            items: [
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                // },
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'DOCS',
                // },
                // {
                //     type: 'docsVersionDropdown',
                //     position: 'right',
                //     dropdownActiveClassDisabled: false,
                // }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //     title: 'Docs',
                //     items: [{
                //         label: 'DOCS',
                //         to: '/docs/intro',
                //     }, ],
                // },
                // {
                //     title: 'Community',
                //     items: [{
                //             label: 'Stack Overflow',
                //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //         },
                //         {
                //             label: 'Discord',
                //             href: 'https://discordapp.com/invite/docusaurus',
                //         },
                //         {
                //             label: 'Twitter',
                //             href: 'https://twitter.com/docusaurus',
                //         },
                //     ],
                // },
                // {
                //     title: 'More',
                //     items: [
                //         // {
                //         //     label: 'Blog',
                //         //     to: '/blog',
                //         // },
                //         {
                //             label: 'GitHub',
                //             href: 'https://github.com/facebook/docusaurus',
                //         },
                //     ],
                // },
            ],
            copyright: `© nmrXiv ${new Date().getFullYear()}. Docs built with Docusaurus. <br/> Released under the MIT License.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'e997544c0977751470c79d938566002d',
            indexName: 'nmrXiv-docs-index',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: see doc section below
            appId: '5BBX285FQW',

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo
                    editUrl: 'https://github.com/NFDI4Chem/nmrxiv-docs/edit/development/',
                   // includeCurrentVersion: false
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};