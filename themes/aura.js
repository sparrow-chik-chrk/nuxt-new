import Aura from "@primevue/themes/aura";

export default {
    preset: Aura,
    options: {
        darkModeSelector: ".p-dark",
        cssLayer: {
            name: "primevue",
            order: "reset,primevue"
        }
    }
}