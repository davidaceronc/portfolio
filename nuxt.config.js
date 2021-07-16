import colors from 'vuetify/es5/util/colors';

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s',
        title: 'Portfolio - David Alexander Ceron',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { hid: 'description', name: 'description', content: 'Portfolio by David Alexander Ceron' },
            { hid: 'og:title', property: 'og:title', content: 'Portfolio by David Alexander Ceron' },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Software Engineer Personal Portfolio by David Alexander Ceron'
            },
            { hid: 'og:url', property: 'og:url', content: 'https://serene-thompson-592321.netlify.app' },
            { hid: 'og:image', property: 'og:image', content: '/Portfolio.jpg' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: ' Portfolio by David Alexander Ceron' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Software Engineer Personal Portfolio by David Alexander Ceron'
            },
            { hid: 'twitter:image', name: 'twitter:image', content: '/Portfolio.jpg' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: colors.blueGrey.darken1,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
};
