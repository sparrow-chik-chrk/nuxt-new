/*
Add to component

const scrollStore = useScrollStore();

function scrollTo(id: string) {
   scrollStore.setScrollToElementId(id);
}*/

export const useScrollStore = defineStore("scrollStore", {
    state: () => ({
        scrollToElementId: null as null | string
    }),
    actions: {
        setScrollToElementId(id: string, num?: number) {
            this.scrollToElementId = id;
            this.scrollToElement(num);
        },
        scrollToElement(num?: number) {
            if (this.scrollToElementId) {
                const element = document.getElementById(this.scrollToElementId);
                if (element) {
                    const scrollPanel = document.querySelector(".p-scrollpanel-content");
                    if (scrollPanel) {
                        const elementPosition = element.offsetTop;
                        const offsetPosition = num ? elementPosition + num : elementPosition;

                        console.log(`Element Position: ${elementPosition}`);
                        console.log(`Offset Position: ${offsetPosition}`);

                        scrollPanel.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });

                        console.log(`Scrolling to: ${offsetPosition}`);
                    } else {
                        console.error(`ScrollPanel not found.`);
                    }
                } else {
                    console.error(`Element with ID ${this.scrollToElementId} not found.`);
                }
                this.resetScrollToElementId();
            } else {
                console.error(`scrollToElementId is null.`);
            }
        },
        resetScrollToElementId() {
            this.scrollToElementId = null
        },
        scrollToTop() {
            const element = document.querySelector("[id^='pv_id_'][id$='_content']")
            if (element) {
                (element as HTMLElement).scrollTo({top: 0, behavior: "smooth"})
            } else {
                console.error("Element pv_id_2_content not found")
            }
        }

    }
})