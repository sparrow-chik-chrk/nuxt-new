// import type {Strapi4RequestParams, StrapiLocale} from "@nuxtjs/strapi";
//
//
// export const useWebsiteStore = defineStore("websiteStore", {
//     state: () => ({
//         season: 1,
//         year: 2000,
//         facebook: "https://www.facebook.com",
//         instagram: "https://www.instagram.com",
//         youtube: "https://www.youtube.com",
//         cashbox: ["+380570000000", "+380570000000"],
//         mainNews: [] as MainNews[],
//         sponsors: [] as FooterSponsors[],
//         genresUk: [] as GenreFilter[],
//         genresEn: [] as GenreFilter[],
//         venuesUk: [] as VenueFilter[],
//         venuesEn: [] as VenueFilter[],
//         main: {
//             recommends: {} as StrapiMainRecommends,
//             poster: [] as StrapiMainPoster[],
//             afisha: [] as StrapiMainPoster[]
//         },
//         contact: {} as StrapiContactAttributes,
//         hash: "",
//     }),
//     getters: {
//         getHash: (state) => state.hash
//     },
//     actions: {
//         async fetch() {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     populate: "*"
//                 })
//                 const info = await find<StrapiResponseItem<StrapiSettingData>>("setting", params.value, fetchOptions)
//                 if (info.data) {
//                     if ("season" in info.data.attributes) {
//                         this.season = info.data.attributes.season
//                         this.year = info.data.attributes.year
//                         this.facebook = info.data.attributes.facebook
//                         this.instagram = info.data.attributes.instagram
//                         this.youtube = info.data.attributes.youtube
//                         if (info.data.attributes.cashbox) {
//                             this.cashbox = info.data.attributes.cashbox.map(item => item.number)
//                         }
//                     }
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch settings:", error);
//             }
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     fields: ["id", "type", "url"],
//                     populate: {
//                         logo: {
//                             fields: ["id", "ext", "hash", "alternativeText"]
//                         }
//                     },
//                     sort: ["type:asc", "sort:asc"],
//                     filters: {
//                         is_footer: true,
//                     },
//                     publicationState: "live"
//                 })
//                 const info = await find<StrapiResponseList<StrapiSponsorsData>>("sponsors", params.value, fetchOptions)
//                 if (info.data) {
//                     info.data.forEach(item => {
//                         const sponsor: FooterSponsors = {
//                             id: item.id,
//                             type: item.attributes.type,
//                             url: item.attributes.url ?? "", // Перевірка на null або undefined
//                             logo: item.attributes.logo.data
//                                 ? `${item.attributes.logo.data.attributes.hash}${item.attributes.logo.data.attributes.ext}`
//                                 : "",
//                             logoAlternativeText: item.attributes.logo.data && item.attributes.logo.data.attributes.alternativeText
//                                 ? item.attributes.logo.data.attributes.alternativeText
//                                 : ""
//                         };
//                         this.sponsors.push(sponsor);
//                     });
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch sponsors:", error);
//             }
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     fields: ["id", "name", "code", "locale"],
//                     populate: {
//                         localizations: {
//                             fields: ["id", "name", "code", "locale"]
//                         }
//                     },
//                     sort: ["name:asc"]
//                 })
//                 const info = await find<StrapiResponseList<StrapiGenreData>>("genres", params.value, fetchOptions)
//                 if (info.data) {
//                     info.data.forEach(item => {
//                         if (item.attributes.code && item.attributes.locale === "uk") {
//                             const genreUk: GenreFilter = {
//                                 id: item.id,
//                                 name: item.attributes.name,
//                                 code: item.attributes.code
//                             }
//                             console.log("genre before push")
//                             this.genresUk.push(genreUk)
//                             console.log("genre after push")
//                             if (item.attributes.localizations && item.attributes.localizations?.data.length && item.attributes.localizations.data[0].attributes.code
//                                 && item.attributes.localizations.data[0].attributes.locale === "en") {
//                                 console.log("genre localizations enter")
//                                 const genreEn: GenreFilter = {
//                                     id: item.attributes.localizations.data[0].id,
//                                     name: item.attributes.localizations.data[0].attributes.name,
//                                     code: item.attributes.localizations.data[0].attributes.code
//                                 }
//                                 console.log("genre localizations before push")
//                                 this.genresEn.push(genreEn)
//                                 console.log("genre localizations after push")
//                             }
//                         }
//                         if (item.attributes.code && item.attributes.locale === "en") {
//                             const genreEn: GenreFilter = {
//                                 id: item.id,
//                                 name: item.attributes.name,
//                                 code: item.attributes.code
//                             }
//                             this.genresEn.push(genreEn)
//                             if (item.attributes.localizations && item.attributes.localizations?.data.length && item.attributes.localizations.data[0].attributes.code
//                                 && item.attributes.localizations.data[0].attributes.locale === "uk") {
//                                 const genreUk: GenreFilter = {
//                                     id: item.attributes.localizations.data[0].id,
//                                     name: item.attributes.localizations.data[0].attributes.name,
//                                     code: item.attributes.localizations.data[0].attributes.code
//                                 }
//                                 this.genresUk.push(genreUk)
//                             }
//                         }
//                     })
//                     this.genresUk.push({id: 100, name: "Вибрати все", code: "all"})
//                     this.genresEn.push({id: 100, name: "Select all", code: "all"})
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch genres:", error);
//             }
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     fields: ["id", "name", "slug", "locale"],
//                     populate: {
//                         localizations: {
//                             fields: ["id", "name", "slug", "locale"]
//                         }
//                     },
//                     sort: ["name:asc"]
//                 })
//                 const info = await find<StrapiResponseList<StrapiVenueData>>("venues", params.value, fetchOptions)
//                 if (info.data) {
//                     info.data.forEach(item => {
//                         if (item.attributes.slug && item.attributes.locale === "uk") {
//                             const venueUk: VenueFilter = {
//                                 id: item.id,
//                                 name: item.attributes.name,
//                                 slug: item.attributes.slug
//                             }
//                             this.venuesUk.push(venueUk)
//                             if (item.attributes.localizations && item.attributes.localizations.data.length && item.attributes.localizations.data[0].attributes.slug) {
//                                 const venueEn: VenueFilter = {
//                                     id: item.attributes.localizations.data[0].id,
//                                     name: item.attributes.localizations.data[0].attributes.name,
//                                     slug: item.attributes.localizations.data[0].attributes.slug
//                                 }
//                                 this.venuesEn.push(venueEn)
//                             }
//                         }
//                         if (item.attributes.slug && item.attributes.locale === "en") {
//                             const venueEn: VenueFilter = {
//                                 id: item.id,
//                                 name: item.attributes.name,
//                                 slug: item.attributes.slug
//                             }
//                             this.venuesEn.push(venueEn)
//                             if (item.attributes.localizations && item.attributes.localizations.data.length && item.attributes.localizations.data[0].attributes.slug) {
//                                 const venueUk: VenueFilter = {
//                                     id: item.attributes.localizations.data[0].id,
//                                     name: item.attributes.localizations.data[0].attributes.name,
//                                     slug: item.attributes.localizations.data[0].attributes.slug
//                                 }
//                                 this.venuesUk.push(venueUk)
//                             }
//                         }
//                     })
//                     this.venuesUk.push({id: 100, name: "Вибрати все", slug: "all"})
//                     this.venuesEn.push({id: 100, name: "Select all", slug: "all"})
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch venues:", error);
//             }
//         },
//         async fetchMainNews() {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             const {localeTransition} = useLocaleTransition()
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     locale: localeTransition.value as StrapiLocale,
//                     fields: ["id", "title", "publishedAt", "updatedAt", "locale", "slug"],
//                     publicationState: "live",
//                     sort: "publishedAt:asc",
//                     pagination: {
//                         start: 0,
//                         limit: 9,
//                         withCount: true
//                     },
//                     filters: {
//                         type: {
//                             $eqi: "Новини"
//                         }
//                     },
//                     populate: {
//                         poster: {
//                             fields: ["id", "ext", "hash", "alternativeText"]
//                         }
//                     }
//                 })
//                 const info = await find<StrapiResponseList<StrapiNewsArticleData>>("news-articles", params.value, fetchOptions)
//                 if (info.data.length) {
//                     this.mainNews = info.data.map(item => {
//                         const attributes = item.attributes;
//                         if ("title" in attributes && "publishedAt" in attributes && "slug" in attributes && "poster" in attributes) {
//                             return {
//                                 id: item.id,
//                                 title: attributes.title,
//                                 date: attributes.publishedAt,
//                                 slug: attributes.slug,
//                                 alt: attributes.poster.data.attributes.alternativeText ?? "",
//                                 poster: `${attributes.poster.data.attributes.hash}${attributes.poster.data.attributes.ext}`
//                             };
//                         }
//                         return undefined;
//                     }).filter((item): item is {
//                         id: number;
//                         title: string;
//                         date: string;
//                         slug: string;
//                         alt: string;
//                         poster: string
//                     } => item !== undefined);
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch main news:", error);
//             }
//         },
//         async fetchMain() {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             const {localeTransition} = useLocaleTransition()
//             try {
//                 const params = ref<Strapi4RequestParams>({
//                     locale: localeTransition.value as StrapiLocale,
//                     fields: ["id"],
//                     populate: {
//                         recommends: {
//                             fields: ["id", "datetime"],
//                             populate: {
//                                 spectacle: {
//                                     fields: ["id", "name", "composer", "duration", "slug", "locale"],
//                                     publicationState: "live",
//                                     populate: {
//                                         afisha_img: {
//                                             fields: ["id", "ext", "hash", "alternativeText"]
//                                         },
//                                         genre: {
//                                             fields: ["id", "name", "locale"]
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         poster: {
//                             fields: ["id"],
//                             populate: {
//                                 show: {
//                                     fields: ["id", "datetime"],
//                                     publicationState: "live",
//                                     populate: {
//                                         spectacle: {
//                                             fields: ["id", "name", "composer", "duration", "slug", "locale"],
//                                             publicationState: "live",
//                                         }
//                                     }
//                                 },
//                                 photo: {
//                                     fields: ["id", "ext", "hash", "alternativeText"]
//                                 }
//                             }
//                         },
//                         afisha: {
//                             fields: ["id"],
//                             populate: {
//                                 show: {
//                                     fields: ["id", "datetime"],
//                                     publicationState: "live",
//                                     populate: {
//                                         spectacle: {
//                                             fields: ["id", "name", "composer", "duration", "slug", "locale"],
//                                             publicationState: "live",
//                                         }
//                                     }
//                                 },
//                                 photo: {
//                                     fields: ["id", "ext", "hash", "alternativeText"]
//                                 }
//                             }
//                         }
//                     }
//                 })
//                 const info = await find<StrapiResponseItem<StrapiMainData>>("main", params.value, fetchOptions)
//                 if (info.data) {
//                     if ("recommends" in info.data.attributes && info.data.attributes.recommends.data.length) {
//                         this.main.recommends = info.data.attributes.recommends
//                     }
//                     if ("poster" in info.data.attributes && Array.isArray(info.data.attributes.poster) && info.data.attributes.poster.length) {
//                         this.main.poster = info.data.attributes.poster
//                     }
//                     if ("afisha" in info.data.attributes && Array.isArray(info.data.attributes.afisha) && info.data.attributes.afisha.length) {
//                         this.main.afisha = info.data.attributes.afisha
//                     }
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch settings:", error);
//             }
//         },
//         async fetchContact() {
//             const {find} = useStrapi4()
//             const {fetchOptions} = useFetchOptions()
//             const {localeTransition} = useLocaleTransition()
//             const params = ref<Strapi4RequestParams>({
//                 locale: localeTransition.value as StrapiLocale,
//                 fields: ["id", "email", "locale", "administrator", "startBox", "endBox", "startTheatre", "endTheatre"],
//                 populate: {
//                     poster: {
//                         fields: ["id", "ext", "hash", "alternativeText"]
//                     },
//                     contacts: {
//                         fields: ["id", "name", "email"],
//                         populate: {
//                             phone: {fields: ["number"]}
//                         }
//                     }
//                 }
//             })
//             try {
//                 const info = await find<StrapiResponseItem<StrapiContactData>>("contact", params.value, fetchOptions)
//                 if (info.data) {
//                     this.contact = info.data.attributes
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch settings:", error);
//             }
//         },
//     }
// })