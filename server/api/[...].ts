import {joinURL} from "ufo";

export default defineEventHandler(async (event) => {
    const {apiUrl, jwt} = useRuntimeConfig(event)
    const path = event.path
    const fetchOptions = {
        headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json; charset=utf-8"
        }
    }
    if (event.node.req.method === "OPTIONS") {
        return new Response(null, {status: 204});
    }
    const headers = Object.fromEntries(
        Object.entries({
            ...fetchOptions.headers,
            ...event.node.req.headers,
        }).filter(([_, value]) => typeof value === "string")
    ) as Record<string, string>;

    const target = joinURL(apiUrl, path)
    return proxyRequest(event, target, {headers})
})