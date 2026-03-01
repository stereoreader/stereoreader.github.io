import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "STEREO READER",
    description: "Train or relax your eyes with Stereo Reader app",
    themeConfig: {
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Try Now', link: '/app/', target: '_blank' }
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
