// import type {Strapi4RequestParams} from "@nuxtjs/strapi";
//
//
// export const useTempStore = defineStore("tempStore", {
//     state: () => ({
//         events: [] as StrapiShowData[],
//         eventsPageCount: 1 as number,
//         eventsParams: {},
//         spectacle: {} as StrapiSpectacleData,
//         spectacleNews: [] as MainNews[],
//
//     }),
//     actions: {
//         async fetchEvents(params: Strapi4RequestParams) {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             try {
//                 const info = await find<StrapiResponseList<StrapiShowData>>("shows", params, fetchOptions)
//                 if (info.meta.pagination)
//                     this.eventsPageCount = info.meta.pagination?.pageCount
//                 if (info.data.length) {
//                     this.events = info.data
//                 }
//                 if (!info.data.length) {
//                     this.events = []
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch settings:", error);
//             }
//         },
//         async fetchSpectacle(params: Strapi4RequestParams) {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             try {
//                 const info = await find<StrapiResponseList<StrapiSpectacleData>>("spectacles", params, fetchOptions)
//                 if (info.data.length) {
//                     this.spectacle = info.data[0]
//                     if (info.data[0].attributes.news_articles) {
//                         this.spectacleNews = info.data[0].attributes.news_articles.data.map(item => {
//                             const attributes = item.attributes;
//                             if ("title" in attributes && "publishedAt" in attributes && "slug" in attributes && "poster" in attributes) {
//                                 return {
//                                     id: item.id,
//                                     title: attributes.title,
//                                     date: attributes.publishedAt,
//                                     slug: attributes.slug,
//                                     alt: attributes.poster.data.attributes.alternativeText ?? "",
//                                     poster: `${attributes.poster.data.attributes.hash}${attributes.poster.data.attributes.ext}`
//                                 };
//                             }
//                             return undefined;
//                         }).filter((item): item is {
//                             id: number;
//                             title: string;
//                             date: string;
//                             slug: string;
//                             alt: string;
//                             poster: string
//                         } => item !== undefined);
//                     }
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch settings:", error);
//             }
//         },
//     }
// })