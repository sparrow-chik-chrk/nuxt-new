export function useCustomScroll() {
    const scrollPanel = ref<HTMLElement | null>(null);
    if (import.meta.client) {
        scrollPanel.value = document.querySelector("#__nuxt>.p-scrollpanel>.p-scrollpanel-content-container>.p-scrollpanel-content");
    }
    const {x, y, isScrolling, arrivedState, directions} = useScroll(scrollPanel.value, {behavior: "smooth"});


    function scrollToElement(scrollToElement: string, num?: number) {
        if (scrollToElement) {
            const element = document.getElementById(scrollToElement);
            if (element) {
                if (scrollPanel.value) {
                    const elementPosition = element.offsetTop;
                    const offsetPosition = num ? elementPosition + num : elementPosition;

                    console.log(`Element Position: ${elementPosition}`);
                    console.log(`Offset Position: ${offsetPosition}`);

                    scrollPanel.value.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                } else {
                    console.error(`ScrollPanel not found.`);
                }
            } else {
                console.error(`Element with ID ${scrollToElement} not found.`);
            }
        }
    }

    function scrollToTop() {
        if (scrollPanel.value) {
            y.value = 0
        }
    }

    return {
        x,
        y,
        arrivedState,
        isScrolling,
        directions,
        scrollToElement,
        scrollToTop,
    };
}