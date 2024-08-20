export function useCreateUrl() {
    const {subdomain, domain} = useRuntimeConfig().public
    const {defaultLocale} = useI18n()
    const {localeTransition} = useLocaleTransition()

    function createUrl(path: string): string {
        if (subdomain !== "") {
            const localePrefix = localeTransition.value !== defaultLocale ? `/${localeTransition.value}` : ""
            return `https://${subdomain}.${domain}${localePrefix}${path}`
        }
        return path
    }

    return {createUrl}
}