// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    debug: true,
    runtimeConfig: {
      apiSecret: '123',
      public: {
        apiUrl: 'http://classifiedware-api.test/customer-frontend-api',
      },
    },
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
            script: [
                // <script src="https://myawesome-lib.js"></script>
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
            ]
        }
    }
})
