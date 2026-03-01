import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CWXQF8PH4S' }
        ],
        [
            'script',
            {},
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CWXQF8PH4S', {
                product_surface: 'website'
            });
            `
        ]
    ],
    title: "STEREO READER: improve vision while reading",
    description: "Train or relax your eyes, ease myopia symptoms with Stereo Reader app",
    themeConfig: {
        siteTitle: 'STEREO READER',
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Try Now', link: '/app/#try', target: '_blank' }
        ],

        sidebar: [
            {
                text: 'Try now',
                items: [
                    { text: 'Open the App', link: '/app/', target: '_blank' },
                    //{ text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'youtube', link: 'https://www.youtube.com/@IMPROVE-VISION-STEREO-READER' },
            { icon: 'telegram', link: 'https://t.me/stereoreader' }
        ]
    }
})
