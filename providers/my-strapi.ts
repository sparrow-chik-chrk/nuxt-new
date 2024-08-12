import {withBase, withoutLeadingSlash} from "ufo"
import type {ProviderGetImage} from "@nuxt/image"

// https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#upload

export const getImage: ProviderGetImage = (src, {modifiers, baseURL} = {}) => {
    const {breakpoints, width, format} = modifiers || {}
    let chosenBreakpoint = null

    if (width && breakpoints) {
        for (const [key, value] of Object.entries(breakpoints)) {
            const bpValue = Number(value)
            if (bpValue >= width + 50) {
                chosenBreakpoint = {key, value: bpValue}
                break;
            }
        }
    }
    const ext = src.split(".").pop()
    const breakpointKey = chosenBreakpoint ? chosenBreakpoint.key : ""
    if (breakpointKey === "") {
        // custom for proj
        const formattedSrc = `largest_${format}_${withoutLeadingSlash(src).replace(`.${ext}`, "")}.${format}`
        return {
            url: withBase(formattedSrc, baseURL),
        }
    }

    const formattedSrc = `${breakpointKey}_${format}_${withoutLeadingSlash(src).replace(`.${ext}`, "")}.${format}`
    return {
        url: withBase(formattedSrc, baseURL),
    }
}
export const validateDomains = true