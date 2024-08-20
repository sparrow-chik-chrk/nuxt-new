import type {Strapi4RequestParams, StrapiLocale} from "@nuxtjs/strapi";


export const useWebsiteStore = defineStore("websiteStore", {
    state: () => ({
        setting: {
            facebook: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            header_logo: {
                url: ""
            },
            footer_logo: {
                url: ""
            },
            contacts: []
        } as StrapiSetting,
        pagePlans: {} as StrapiPlanPage,
        pageMain: {} as StrapiMainPage,
    }),
    getters: {
        getSetting: (state) => state.setting,
        getFacebook: (state) => state.setting.facebook,
        getInstagram: (state) => state.setting.instagram,
        getLinkedin: (state) => state.setting.linkedin,
        getYoutube: (state) => state.setting.youtube,
        getHeaderLogoUrl: (state) => state.setting.header_logo.url,
        getHeaderLogoAlt: (state) => state.setting.header_logo.alternativeText,
        getFooterLogoUrl: (state) => state.setting.footer_logo.url,
        getFooterLogoAlt: (state) => state.setting.footer_logo.alternativeText,
        getContacts: (state) => state.setting.contacts,
        getFieldsTree: (state) => state.setting.order_fields_lvl_1,

        getPagePlans: (state) => state.pagePlans,
        getPlans: (state) => state.pagePlans.plans,
        getPlansQA: (state) => state.pagePlans.qa,

        getPageMain: (state) => state.pageMain,
        getMainProperties: (state) => state.pageMain.properties,
        getMainModules: (state) => state.pageMain.modules,
        getMainClients: (state) => state.pageMain.clients,
        getMainPromo: (state) => state.pageMain.promo,
        getMainTools: (state) => state.pageMain.tools,
        getMainQA: (state) => state.pageMain.qa,
        getMainPreferenceBuyer: (state) => state.pageMain.preferences_buyer,
        getMainPreferenceOrg: (state) => state.pageMain.preferences_org,


    },
    actions: {
        async fetchSetting() {
            const {find} = useStrapi4()
            // todo add article
            try {
                const {localeTransition} = useLocaleTransition()
                const params = ref<Strapi4RequestParams>({
                    fields: ["facebook", "instagram", "linkedin", "youtube"],
                    populate: {
                        header_logo: {
                            fields: ["url", "alternativeText"]
                        },
                        footer_logo: {
                            fields: ["url", "alternativeText"]
                        },
                        contacts: {
                            fields: ["country", "phone", "email"]
                        },
                        order_fields_lvl_1: {
                            fields: ["name", "color_text_preview", "slug", "locale"],
                            populate: {
                                preview: {
                                    fields: ["ext", "hash", "alternativeText"]
                                },
                                background_list: {
                                    fields: ["ext", "hash", "alternativeText"]
                                },
                                childs: {
                                    fields: ["name", "slug", "is_area", "color_text_preview", "locale"],
                                    populate: {
                                        parent: {
                                            fields: ["name", "slug", "locale"],
                                            populate: {
                                                localizations: {
                                                    fields: ["name", "slug", "locale"]
                                                }
                                            }
                                        },
                                        preview: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        },
                                        clients: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        },
                                        promo_or_background: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        },
                                        properties: {
                                            fields: ["name", "description"]
                                        },
                                        preferences_buyer: {
                                            fields: ["id"],
                                            populate: {
                                                left: {
                                                    fields: ["name", "description", "is_alternate_design"],
                                                    populate: {
                                                        image: {
                                                            fields: ["ext", "hash", "alternativeText"]
                                                        }
                                                    }
                                                },
                                                right: {
                                                    fields: ["name", "description", "is_alternate_design"],
                                                    populate: {
                                                        image: {
                                                            fields: ["ext", "hash", "alternativeText"]
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        preferences_org: {
                                            fields: ["id"],
                                            populate: {
                                                left: {
                                                    fields: ["name", "description", "is_alternate_design"],
                                                    populate: {
                                                        image: {
                                                            fields: ["ext", "hash", "alternativeText"]
                                                        }
                                                    }
                                                },
                                                right: {
                                                    fields: ["name", "description", "is_alternate_design"],
                                                    populate: {
                                                        image: {
                                                            fields: ["ext", "hash", "alternativeText"]
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        tools: {
                                            fields: ["name", "color_text"],
                                            populate: {
                                                image: {
                                                    fields: ["ext", "hash", "alternativeText"]
                                                }
                                            }
                                        },
                                        qa: {
                                            fields: ["question", "answer"]
                                        },
                                        childs: {
                                            fields: ["name", "slug", "is_area", "color_text_preview", "locale"],
                                            populate: {
                                                parent: {
                                                    fields: ["name", "slug", "locale"],
                                                    populate: {
                                                        parent: {
                                                            fields: ["name", "slug", "locale"],
                                                            populate: {
                                                                localizations: {
                                                                    fields: ["name", "slug", "locale"]
                                                                }
                                                            }
                                                        },
                                                        localizations: {
                                                            fields: ["name", "slug", "locale"]
                                                        }
                                                    }
                                                },
                                                clients: {
                                                    fields: ["ext", "hash", "alternativeText"]
                                                },
                                                preview: {
                                                    fields: ["ext", "hash", "alternativeText"]
                                                },
                                                promo_or_background: {
                                                    fields: ["ext", "hash", "alternativeText"]
                                                },
                                                properties: {
                                                    fields: ["name", "description"]
                                                },
                                                preferences_buyer: {
                                                    fields: ["id"],
                                                    populate: {
                                                        left: {
                                                            fields: ["name", "description", "is_alternate_design"],
                                                            populate: {
                                                                image: {
                                                                    fields: ["ext", "hash", "alternativeText"]
                                                                }
                                                            }
                                                        },
                                                        right: {
                                                            fields: ["name", "description", "is_alternate_design"],
                                                            populate: {
                                                                image: {
                                                                    fields: ["ext", "hash", "alternativeText"]
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                preferences_org: {
                                                    fields: ["id"],
                                                    populate: {
                                                        left: {
                                                            fields: ["name", "description", "is_alternate_design"],
                                                            populate: {
                                                                image: {
                                                                    fields: ["ext", "hash", "alternativeText"]
                                                                }
                                                            }
                                                        },
                                                        right: {
                                                            fields: ["name", "description", "is_alternate_design"],
                                                            populate: {
                                                                image: {
                                                                    fields: ["ext", "hash", "alternativeText"]
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                tools: {
                                                    fields: ["name", "color_text"],
                                                    populate: {
                                                        image: {
                                                            fields: ["ext", "hash", "alternativeText"]
                                                        }
                                                    }
                                                },
                                                qa: {
                                                    fields: ["question", "answer"]
                                                },
                                                localizations: {
                                                    fields: ["name", "slug", "locale"]
                                                }
                                            }
                                        },
                                        localizations: {
                                            fields: ["name", "slug", "locale"]
                                        }
                                    }
                                },
                                localizations: {
                                    fields: ["name", "slug", "locale"]
                                }
                            }
                        }
                    },
                })
                const info = await find<StrapiResponseItem<StrapiSetting>>("setting", params.value)
                info.data && (this.setting = info.data)
            } catch (error) {
                console.error("Failed to fetch settings:", error);
            }

            // try {
            //     const params = ref<Strapi4RequestParams>({
            //         fields: ["id", "name", "code", "locale"],
            //         populate: {
            //             localizations: {
            //                 fields: ["id", "name", "code", "locale"]
            //             }
            //         },
            //         sort: ["name:asc"]
            //     })
            //     const info = await find<StrapiResponseList<StrapiGenreData>>("genres", params.value, fetchOptions)
            //     if (info.data) {
            //         info.data.forEach(item => {
            //             if (item.attributes.code && item.attributes.locale === "uk") {
            //                 const genreUk: GenreFilter = {
            //                     id: item.id,
            //                     name: item.attributes.name,
            //                     code: item.attributes.code
            //                 }
            //                 console.log("genre before push")
            //                 this.genresUk.push(genreUk)
            //                 console.log("genre after push")
            //                 if (item.attributes.localizations && item.attributes.localizations?.data.length && item.attributes.localizations.data[0].attributes.code
            //                     && item.attributes.localizations.data[0].attributes.locale === "en") {
            //                     console.log("genre localizations enter")
            //                     const genreEn: GenreFilter = {
            //                         id: item.attributes.localizations.data[0].id,
            //                         name: item.attributes.localizations.data[0].attributes.name,
            //                         code: item.attributes.localizations.data[0].attributes.code
            //                     }
            //                     console.log("genre localizations before push")
            //                     this.genresEn.push(genreEn)
            //                     console.log("genre localizations after push")
            //                 }
            //             }
            //             if (item.attributes.code && item.attributes.locale === "en") {
            //                 const genreEn: GenreFilter = {
            //                     id: item.id,
            //                     name: item.attributes.name,
            //                     code: item.attributes.code
            //                 }
            //                 this.genresEn.push(genreEn)
            //                 if (item.attributes.localizations && item.attributes.localizations?.data.length && item.attributes.localizations.data[0].attributes.code
            //                     && item.attributes.localizations.data[0].attributes.locale === "uk") {
            //                     const genreUk: GenreFilter = {
            //                         id: item.attributes.localizations.data[0].id,
            //                         name: item.attributes.localizations.data[0].attributes.name,
            //                         code: item.attributes.localizations.data[0].attributes.code
            //                     }
            //                     this.genresUk.push(genreUk)
            //                 }
            //             }
            //         })
            //         this.genresUk.push({id: 100, name: "Вибрати все", code: "all"})
            //         this.genresEn.push({id: 100, name: "Select all", code: "all"})
            //     }
            // } catch (error) {
            //     console.error("Failed to fetch genres:", error);
            // }
            // try {
            //     const params = ref<Strapi4RequestParams>({
            //         fields: ["id", "name", "slug", "locale"],
            //         populate: {
            //             localizations: {
            //                 fields: ["id", "name", "slug", "locale"]
            //             }
            //         },
            //         sort: ["name:asc"]
            //     })
            //     const info = await find<StrapiResponseList<StrapiVenueData>>("venues", params.value, fetchOptions)
            //     if (info.data) {
            //         info.data.forEach(item => {
            //             if (item.attributes.slug && item.attributes.locale === "uk") {
            //                 const venueUk: VenueFilter = {
            //                     id: item.id,
            //                     name: item.attributes.name,
            //                     slug: item.attributes.slug
            //                 }
            //                 this.venuesUk.push(venueUk)
            //                 if (item.attributes.localizations && item.attributes.localizations.data.length && item.attributes.localizations.data[0].attributes.slug) {
            //                     const venueEn: VenueFilter = {
            //                         id: item.attributes.localizations.data[0].id,
            //                         name: item.attributes.localizations.data[0].attributes.name,
            //                         slug: item.attributes.localizations.data[0].attributes.slug
            //                     }
            //                     this.venuesEn.push(venueEn)
            //                 }
            //             }
            //             if (item.attributes.slug && item.attributes.locale === "en") {
            //                 const venueEn: VenueFilter = {
            //                     id: item.id,
            //                     name: item.attributes.name,
            //                     slug: item.attributes.slug
            //                 }
            //                 this.venuesEn.push(venueEn)
            //                 if (item.attributes.localizations && item.attributes.localizations.data.length && item.attributes.localizations.data[0].attributes.slug) {
            //                     const venueUk: VenueFilter = {
            //                         id: item.attributes.localizations.data[0].id,
            //                         name: item.attributes.localizations.data[0].attributes.name,
            //                         slug: item.attributes.localizations.data[0].attributes.slug
            //                     }
            //                     this.venuesUk.push(venueUk)
            //                 }
            //             }
            //         })
            //         this.venuesUk.push({id: 100, name: "Вибрати все", slug: "all"})
            //         this.venuesEn.push({id: 100, name: "Select all", slug: "all"})
            //     }
            // } catch (error) {
            //     console.error("Failed to fetch venues:", error);
            // }
        },
        async fetchPagePlans() {
            const {find} = useStrapi4()
            try {
                const {localeTransition} = useLocaleTransition()
                const params = ref<Strapi4RequestParams>({
                    fields: ["id"],
                    populate: {
                        plans: {
                            fields: ["price_text", "name", "pay_frequency"],
                            populate: {
                                preferences: {
                                    fields: ["preference"]
                                }
                            }
                        },
                        qa: {
                            fields: ["question", "answer"]
                        }
                    },
                    locale: localeTransition.value as StrapiLocale
                })
                const info = await find<StrapiResponseItem<StrapiPlanPage>>("pages-plan", params.value)
                info.data && (this.pagePlans = info.data)
            } catch (error) {
                console.error("Failed to fetch plans:", error);
            }
        },
        async fetchPageMain() {
            const {find} = useStrapi4()
            try {
                const {localeTransition} = useLocaleTransition()
                const params = ref<Strapi4RequestParams>({
                    fields: ["id"],
                    populate: {
                        promo: {
                            fields: ["ext", "hash", "alternativeText"]
                        },
                        clients: {
                            fields: ["ext", "hash", "alternativeText"]
                        },
                        properties: {
                            fields: ["name", "description"]
                        },
                        modules: {
                            fields: ["primary", "secondary"]
                        },
                        preferences_buyer: {
                            fields: ["id"],
                            populate: {
                                left: {
                                    fields: ["name", "description", "is_alternate_design"],
                                    populate: {
                                        image: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        }
                                    }
                                },
                                right: {
                                    fields: ["name", "description", "is_alternate_design"],
                                    populate: {
                                        image: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        }
                                    }
                                }
                            }
                        },
                        preferences_org: {
                            fields: ["id"],
                            populate: {
                                left: {
                                    fields: ["name", "description", "is_alternate_design"],
                                    populate: {
                                        image: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        }
                                    }
                                },
                                right: {
                                    fields: ["name", "description", "is_alternate_design"],
                                    populate: {
                                        image: {
                                            fields: ["ext", "hash", "alternativeText"]
                                        }
                                    }
                                }
                            }
                        },
                        tools: {
                            fields: ["name", "color_text"],
                            populate: {
                                image: {
                                    fields: ["ext", "hash", "alternativeText"]
                                }
                            }
                        },
                        qa: {
                            fields: ["question", "answer"]
                        }
                    },
                    locale: localeTransition.value as StrapiLocale
                })
                const info = await find<StrapiResponseItem<StrapiMainPage>>("page-main", params.value)
                info.data && (this.pageMain = info.data)
            } catch (error) {
                console.error("Failed to fetch home:", error);
            }

        }
        // async fetchMainNews() {
        //     const {find} = useStrapi4()
        //     const {fetchOptions} = useFetchOptions()
        //     const {localeTransition} = useLocaleTransition()
        //     try {
        //         const params = ref<Strapi4RequestParams>({
        //             locale: localeTransition.value as StrapiLocale,
        //             fields: ["id", "title", "publishedAt", "updatedAt", "locale", "slug"],
        //             publicationState: "live",
        //             sort: "publishedAt:asc",
        //             pagination: {
        //                 start: 0,
        //                 limit: 9,
        //                 withCount: true
        //             },
        //             filters: {
        //                 type: {
        //                     $eqi: "Новини"
        //                 }
        //             },
        //             populate: {
        //                 poster: {
        //                     fields: ["id", "ext", "hash", "alternativeText"]
        //                 }
        //             }
        //         })
        //         const info = await find<StrapiResponseList<StrapiNewsArticleData>>("news-articles", params.value, fetchOptions)
        //         if (info.data.length) {
        //             this.mainNews = info.data.map(item => {
        //                 const attributes = item.attributes;
        //                 if ("title" in attributes && "publishedAt" in attributes && "slug" in attributes && "poster" in attributes) {
        //                     return {
        //                         id: item.id,
        //                         title: attributes.title,
        //                         date: attributes.publishedAt,
        //                         slug: attributes.slug,
        //                         alt: attributes.poster.data.attributes.alternativeText ?? "",
        //                         poster: `${attributes.poster.data.attributes.hash}${attributes.poster.data.attributes.ext}`
        //                     };
        //                 }
        //                 return undefined;
        //             }).filter((item): item is {
        //                 id: number;
        //                 title: string;
        //                 date: string;
        //                 slug: string;
        //                 alt: string;
        //                 poster: string
        //             } => item !== undefined);
        //         }
        //     } catch (error) {
        //         console.error("Failed to fetch main news:", error);
        //     }
        // },
        // async fetchMain() {
        //     const {find} = useStrapi4()
        //     const {fetchOptions} = useFetchOptions()
        //     const {localeTransition} = useLocaleTransition()
        //     try {
        //         const params = ref<Strapi4RequestParams>({
        //             locale: localeTransition.value as StrapiLocale,
        //             fields: ["id"],
        //             populate: {
        //                 recommends: {
        //                     fields: ["id", "datetime"],
        //                     populate: {
        //                         spectacle: {
        //                             fields: ["id", "name", "composer", "duration", "slug", "locale"],
        //                             publicationState: "live",
        //                             populate: {
        //                                 afisha_img: {
        //                                     fields: ["id", "ext", "hash", "alternativeText"]
        //                                 },
        //                                 genre: {
        //                                     fields: ["id", "name", "locale"]
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 },
        //                 poster: {
        //                     fields: ["id"],
        //                     populate: {
        //                         show: {
        //                             fields: ["id", "datetime"],
        //                             publicationState: "live",
        //                             populate: {
        //                                 spectacle: {
        //                                     fields: ["id", "name", "composer", "duration", "slug", "locale"],
        //                                     publicationState: "live",
        //                                 }
        //                             }
        //                         },
        //                         photo: {
        //                             fields: ["id", "ext", "hash", "alternativeText"]
        //                         }
        //                     }
        //                 },
        //                 afisha: {
        //                     fields: ["id"],
        //                     populate: {
        //                         show: {
        //                             fields: ["id", "datetime"],
        //                             publicationState: "live",
        //                             populate: {
        //                                 spectacle: {
        //                                     fields: ["id", "name", "composer", "duration", "slug", "locale"],
        //                                     publicationState: "live",
        //                                 }
        //                             }
        //                         },
        //                         photo: {
        //                             fields: ["id", "ext", "hash", "alternativeText"]
        //                         }
        //                     }
        //                 }
        //             }
        //         })
        //         const info = await find<StrapiResponseItem<StrapiMainData>>("main", params.value, fetchOptions)
        //         if (info.data) {
        //             if ("recommends" in info.data.attributes && info.data.attributes.recommends.data.length) {
        //                 this.main.recommends = info.data.attributes.recommends
        //             }
        //             if ("poster" in info.data.attributes && Array.isArray(info.data.attributes.poster) && info.data.attributes.poster.length) {
        //                 this.main.poster = info.data.attributes.poster
        //             }
        //             if ("afisha" in info.data.attributes && Array.isArray(info.data.attributes.afisha) && info.data.attributes.afisha.length) {
        //                 this.main.afisha = info.data.attributes.afisha
        //             }
        //         }
        //     } catch (error) {
        //         console.error("Failed to fetch settings:", error);
        //     }
        // },
        // async fetchContact() {
        //     const {find} = useStrapi4()
        //     const {fetchOptions} = useFetchOptions()
        //     const {localeTransition} = useLocaleTransition()
        //     const params = ref<Strapi4RequestParams>({
        //         locale: localeTransition.value as StrapiLocale,
        //         fields: ["id", "email", "locale", "administrator", "startBox", "endBox", "startTheatre", "endTheatre"],
        //         populate: {
        //             poster: {
        //                 fields: ["id", "ext", "hash", "alternativeText"]
        //             },
        //             contacts: {
        //                 fields: ["id", "name", "email"],
        //                 populate: {
        //                     phone: {fields: ["number"]}
        //                 }
        //             }
        //         }
        //     })
        //     try {
        //         const info = await find<StrapiResponseItem<StrapiContactData>>("contact", params.value, fetchOptions)
        //         if (info.data) {
        //             this.contact = info.data.attributes
        //         }
        //     } catch (error) {
        //         console.error("Failed to fetch settings:", error);
        //     }
        // },
    }
})