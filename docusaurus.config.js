const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    // i18n: {
    //     defaultLocale: 'en',
    //     locales: ['en', 'fr'],
    // },
    title: 'nmrXiv',
    tagline: 'Highly visible, and consensus-driven NMR data repository and computational platform..Hello world',
    url: 'https://nmrxiv.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',
    organizationName: '', // Usually your GitHub org/user name.
    projectName: 'nmrXiv - Docs', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'support_us', // Any value that will identify this message.
            content: 'You’re browsing the docs for Alpha version of nmrXiv. Please provide your feedback / suggestions <a target="_blank" rel="noopener noreferrer" href="mailto:info@nmrxiv.org?subject=nmrXiv feedback/suggestions&body=Hi,<Add your suggestions here>">here</a>',
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

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '0px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '\u2600',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
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
            copyright: `© nmrXiv ${new Date().getFullYear()}. Docs built with Docusaurus. <br/> Released under the MIT License`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: see doc section below
            appId: 'YOUR_APP_ID',

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
                    // Please change this to your repo.
                    editUrl: 'https://github.com/NFDI4Chem/nmrxiv-docs/edit/master/website/',
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