// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    debug: true,
    css: [
        '@/assets/css/main.scss',
    ],
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Classifiedware' },
                { name: 'theme-color', content: '#712cf9' }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
            ]
        }
    }
})
