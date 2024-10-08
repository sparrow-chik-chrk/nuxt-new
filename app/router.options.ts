import type {RouterConfig} from "@nuxt/schema";

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp()
        if (nuxtApp.$i18n && to.name !== from.name) {
            // await nuxtApp.$i18n.waitForPendingLocaleChange()
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            return {top: 0};
        }
    },
};