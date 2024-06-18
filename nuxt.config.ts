// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
// import AutoImport from "unplugin-auto-import/vite"
// import Components from "unplugin-vue-components/vite"
// import {NaiveUiResolver} from "unplugin-vue-components/resolvers"

// const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()
export default defineNuxtConfig({
    app: {
        seoMeta: {
            keywords: "",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            author: "Studnykov Danylo, Tg: @gnizDoIt",
            mobileWebAppCapable: "yes",
            appleMobileWebAppCapable: "yes",
            formatDetection: "telephone=yes",
        },
        head: {
            link: [],
            titleTemplate: "%s | %siteName",
        },
        pageTransition: {name: "page", mode: "out-in"},
        layoutTransition: {name: "layout", mode: "out-in"},

    },
    build: {
        // plugins: [
        //     new BundleAnalyzerPlugin({
        //         analyzerMode: "static",
        //         reportFilename: "bundle-report.html",
        //         openAnalyzer: true
        //     })
        // ],
        // rollupOptions: {
        //     external: [/\.wasm$/]
        // }
    },
    i18n: {
        baseUrl: "process.env.SITE_URL",
        vueI18n: "./i18n.config.ts",
        lazy: true,
        langDir: process.env.LANG_DIR,
        defaultLocale: process.env.DEFAULT_LOCALE,
        defaultDirection: "ltr",
        locales: process.env.LOCALES ? JSON.parse(process.env.LOCALES) : [],
        strategy: "prefix_except_default",
        // інші налаштування i18n...
    },
    css: ["primevue/resources/themes/aura-light-teal/theme.css", "@animxyz/core", "primeicons/primeicons.css", "assets/scss/main.scss"],
    components: ["~/components"],
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    experimental: {
        cookieStore: false,
        headNext: true,
        sharedPrerenderData: false
    },
    fonts: {
        // adobe: {
        //     id: ["koy7pkx"],
        // },
        // families: [
        //     {name: "Proxima Nova", provider: "adobe", weight: [400, 700]},
        //
        //     //     {name: "Russo One", provider: "google", weight: 700},
        // ]
    },
    features: {
        inlineStyles: true,
    },
    image: {
        // provider: "cloudflare",
        // cloudflare: {
        //     baseURL: process.env.CDN_CGI_URL,
        // },
        quality: 90,
        screens: {
            "xs": 319.9,
            "sm": 374.9,
            "md": 767.9,
            "l": 1023.9,
            "lg": 1199.9,
            "xl": 1439.9,
            "xxl": 1919.9,
            "2xl": 2559.9
        },
        domains: [process.env.MEDIA_DOMAIN as string],
        format: ["avif", "webp", "png"]
    },
    imports: {
        dirs: ["stores"]
    },
    modules: [
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxt/image",
        "@nuxt/fonts",
        "nuxt-swiper",
        "@nuxtjs/seo",
        "nuxt-primevue",
        "nuxt-marquee",
        "nuxt-icon",
        "@vee-validate/nuxt",
        // "nuxtjs-naive-ui",
        "@nuxtjs/i18n",
        "@nuxt/eslint"
    ],
    // on Cloudflare Pages
    nitro: {
        prerender: {
            autoSubfolderIndex: false,
        },
        // preset: "cloudflare-pages",
        // preset: "cloudflare",
    },
    //
    pages: true,
    plugins: [
        "~/plugins/vueAnimXyz.client.ts"
    ],
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            siteUrl: process.env.SITE_URL,
            mediaUrl: process.env.MEDIA_URL,
        }
    },
    router: {
        options: {
            scrollBehaviorType: "smooth",
        }
    },
    vite: {
        plugins: [
            svgLoader({
                defaultImport: "url"
            }),
            // AutoImport({
            //     imports: [
            //         {
            //             "naive-ui": [
            //                 "useDialog",
            //                 "useMessage",
            //                 "useNotification",
            //                 "useLoadingBar"
            //             ]
            //         }
            //     ]
            // }),
            // Components({
            //     resolvers: [NaiveUiResolver()]
            // })
        ],
        server: {
            watch: {
                usePolling: true,
            },
            hmr: {
                port: 24678, // Порт для гарячої перезбірки
            },
        },
    },
    // module
    primevue: {
        usePrimeVue: true,
        components: {
            prefix: "Prime",
            include: ["ScrollPanel"]
        },
        directives: {
            prefix: "p"
        },
        cssLayerOrder: "reset,primevue"
    },
    swiper: {
        prefix: "Swiper",
        modules: []
        // modules: ["mousewheel", "navigation", "pagination", "effect-coverflow", "autoplay","free-mode"]
    },
    // seo
    site: {
        url: process.env.SITE_URL,
        name: process.env.NAME_ORGANIZATION,
        defaultLocale: "uk",
    },
    seo: {
        fallbackTitle: true,
        redirectToCanonicalSiteUrl: true
    },
    ogImage: {enabled: false},
    robots: {
        disallow: ["/404", "/200"],
    },
    schemaOrg: {
        identity: {
            type: "Organization",
            name: process.env.NAME_ORGANIZATION as string,
            url: process.env.SITE_URL,
            logo: ""
        }
    },
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: "VeeForm",
            Field: "VeeField",
            FieldArray: "VeeFieldArray",
            ErrorMessage: "VeeErrorMessage",
        },
    },
})