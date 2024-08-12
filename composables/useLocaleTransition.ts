export const useLocaleTransition = () => {
    const route = useRoute()
    const {defaultLocale} = useI18n()

    const localeTransition = computed(() => {
        const path = route.path
        const match = path.match(/^\/(\w{2})(\/|$)/);
        return match ? match[1] : defaultLocale
    })

    return {localeTransition}
}