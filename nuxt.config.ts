// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {NaiveUiResolver} from "unplugin-vue-components/resolvers"

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
        debug: false,
        baseUrl: `https://${process.env.NUXT_PUBLIC_SUBDOMAIN || ""}${(process.env.NUXT_PUBLIC_SUBDOMAIN && process.env.NUXT_PUBLIC_SUBDOMAIN !== "") ? "." : ""}${process.env.NUXT_PUBLIC_DOMAIN}`,
        vueI18n: "./i18n.config.ts",
        lazy: true,
        langDir: process.env.LANG_DIR,
        defaultLocale: process.env.DEFAULT_LOCALE,
        defaultDirection: "ltr",
        locales: process.env.LOCALES ? JSON.parse(process.env.LOCALES) : [],
        strategy: "prefix_except_default",
        skipSettingLocaleOnNavigate: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            cookieCrossOrigin: true
        }
        // інші налаштування i18n...
    },

    css: ["primevue/resources/themes/aura-light-teal/theme.css", "@animxyz/core", "primeicons/primeicons.css", "assets/css/main.css"],
    components: ["~/components"],

    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    dir: {
        pages: `pages${process.env.NUXT_PUBLIC_DIR_PAGES}`
    },

    experimental: {
        cookieStore: true,
        headNext: true,
        sharedPrerenderData: true
    },

    fonts: {
        adobe: {
            id: ["koy7pkx"],
        },
        families: [
            {name: "Proxima Nova", provider: "adobe", weight: [400, 700]},

            //     {name: "Russo One", provider: "google", weight: 700},
        ]
    },

    features: {
        inlineStyles: true,
    },

    image: {
        providers: {
            strapiV2: {
                provider: "~/providers/my-strapi.ts",
                options: {
                    baseURL: process.env.NUXT_PUBLIC_MEDIA_URL,
                },
            },
        },
        quality: 90,
        screens: {
            "sm-mob": 319.9,
            "mob": 374.9,
            "tab": 767.9,
            "lap": 1023.9,
            "big-lap": 1199.9,
            "hd": 1439.9,
            "fhd": 1919.9,
            "2k": 2559.9
        },
        domains: [process.env.MEDIA_DOMAIN as string],
        format: ["avif"],
    },

    icon: {
        customCollections: [
            {
                prefix: "my-icon",
                dir: "./public/my-icons"
            },
        ],
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
        "@vee-validate/nuxt",
        "nuxtjs-naive-ui",
        "@nuxtjs/i18n",
        "@nuxt/eslint",
        "nuxt-build-cache",
        "@nuxtjs/strapi",
        "@nuxt/icon"
    ],

    // on Cloudflare Pages
    nitro: {
        prerender: {
            autoSubfolderIndex: false,
        },
        // preset: "cloudflare-pages",
        // preset: "cloudflare",
    },

    pages: true,

    plugins: [
        "~/plugins/vueAnimXyz.client.ts"
    ],

    runtimeConfig: {
        apiUrl: "" as string,
        jwt: "" as string,
        strapi: {
            url: "" as string,
        },
        public: {
            domain: "" as string,
            subdomain: "" as string,
            mediaUrl: "" as string,
            dir: {
                pages: "" as string,
            },
            strapi: {
                url: `https://${process.env.NUXT_PUBLIC_SUBDOMAIN || ""}${(process.env.NUXT_PUBLIC_SUBDOMAIN && process.env.NUXT_PUBLIC_SUBDOMAIN !== "") ? "." : ""}${process.env.NUXT_PUBLIC_DOMAIN}` as string,
            }
        }
    },

    router: {
        options: {
            scrollBehaviorType: "smooth",
        }
    },

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === "tbx-modal"
        }
    },

    vite: {
        plugins: [
            svgLoader({
                defaultImport: "url"
            }),
            AutoImport({
                imports: [
                    {
                        "naive-ui": [
                            "useDialog",
                            "useMessage",
                            "useNotification",
                            "useLoadingBar"
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
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
            include: ["Button", "Card", "AccordionTab", "InputText", "Divider", "Dropdown", "Accordion", "SelectButton", "ScrollPanel", "InputMask", "Menu", "Skeleton", "Menubar", "PanelMenu"]
        },
        directives: {
            prefix: "p"
        },
        cssLayerOrder: "reset,primevue"
    },

    swiper: {
        prefix: "Swiper",
        modules: ["mousewheel", "pagination", "autoplay", "free-mode"]
        // modules: ["navigation", "pagination", "effect-coverflow", "autoplay"]
    },

    // seo
    site: {
        url: `https://${process.env.NUXT_PUBLIC_SUBDOMAIN || ""}${(process.env.NUXT_PUBLIC_SUBDOMAIN && process.env.NUXT_PUBLIC_SUBDOMAIN !== "") ? "." : ""}${process.env.NUXT_PUBLIC_DOMAIN}`,
        name: process.env.NAME_SITE,
        defaultLocale: "uk",
    },

    seo: {
        fallbackTitle: true,
        redirectToCanonicalSiteUrl: false
    },

    ogImage: {enabled: false},

    robots: {
        disallow: ["/404", "/200"],
    },

    schemaOrg: {
        identity: {
            type: "Organization",
            name: process.env.NAME_ORGANIZATION as string,
            url: `https://${process.env.NUXT_PUBLIC_SUBDOMAIN || ""}${(process.env.NUXT_PUBLIC_SUBDOMAIN && process.env.NUXT_PUBLIC_SUBDOMAIN !== "") ? "." : ""}${process.env.NUXT_PUBLIC_DOMAIN}`,
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

    compatibilityDate: "2024-08-07",
})