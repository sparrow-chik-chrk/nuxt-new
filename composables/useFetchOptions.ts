export const useFetchOptions = () => {
    const config = useRuntimeConfig()

    const fetchOptions = {
        headers: {
            "Authorization": `Bearer ${config.public.jwt}`,
            "Content-Type": "application/json"
        }
    }

    return {fetchOptions}
}