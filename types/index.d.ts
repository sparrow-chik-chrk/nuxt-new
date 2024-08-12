// declare global {
// // ______________LOCAL__________________
//     interface MainNews {
//         id: number
//         title: string
//         slug: string
//         poster: string
//         date: string
//         alt: string | undefined
//     }
//
//     interface FooterSponsors {
//         id: number,
//         type: string,
//         url: string,
//         logo: string,
//         logoAlternativeText: string
//     }
//
//     interface GenreFilter {
//         id: number,
//         name: string,
//         code: string
//     }
//
//     interface VenueFilter {
//         id: number,
//         name: string,
//         slug: string
//     }
//
// // ______________STRAPI__________________
//     interface StrapiNumber {
//         number: string
//     }
//
//     interface StrapiGenreAttributes {
//         name: string,
//         code?: string,
//         locale: string,
//         localizations?: StrapiGenreList
//     }
//
//     interface StrapiGenreData {
//         id: number
//         attributes: StrapiGenreAttributes
//     }
//
//     interface StrapiGenre {
//         data: StrapiGenreData
//     }
//
//     interface StrapiGenreList {
//         data: StrapiGenreData[]
//     }
//
//     interface StrapiImgAttributes {
//         ext: string,
//         hash: string,
//         alternativeText?: string
//     }
//
//     interface StrapiImgData {
//         id: number
//         attributes: StrapiImgAttributes
//     }
//
//     interface StrapiImg {
//         data: StrapiImgData
//     }
//
//     interface StrapiGallery {
//         data: StrapiImgData[]
//     }
//
//     interface StrapiComponentIdNumber {
//         id: number
//         number: string
//     }
//
//     interface StrapiSettingAttributes {
//         season: number,
//         year: number,
//         createdAt: string,
//         updatedAt: string,
//         facebook: string,
//         instagram: string,
//         youtube: string,
//         cashbox?: StrapiComponentIdNumber[]
//     }
//
//     interface StrapiSettingData {
//         id: number,
//         attributes: StrapiSettingAttributes
//     }
//
//     interface StrapiNewsArticleAttributes {
//         title: string,
//         publishedAt: string,
//         updatedAt: string,
//         locale: string,
//         slug: string,
//         poster: StrapiImg
//     }
//
//     interface StrapiNewsArticleData {
//         id: number
//         attributes: StrapiNewsArticleAttributes
//     }
//
//     interface StrapiNewsArticleList {
//         data: StrapiNewsArticleData[]
//     }
//
//     interface StrapiVenueAttributes {
//         name: string,
//         slug?: string,
//         locale?: string
//         localizations?: StrapiVenueList
//     }
//
//     interface StrapiVenueData {
//         id: number
//         attributes: StrapiVenueAttributes
//     }
//
//     interface StrapiVenue {
//         data: StrapiVenueData
//     }
//
//     interface StrapiVenueList {
//         data: StrapiVenueData[]
//     }
//
//     interface StrapiVideoUrl {
//         id: number,
//         url: string
//     }
//
//     interface StrapiEmployeePage {
//         video: StrapiVideoUrl[],
//         photo: StrapiGallery
//     }
//
//     interface StrapiEmployeeAttributes {
//         name: string,
//         honorific?: string,
//         position?: string,
//         avatar?: StrapiImg,
//         slug?: string,
//         page?: StrapiEmployeePage
//     }
//
//     interface StrapiEmployeeData {
//         id: number,
//         attributes: StrapiEmployeeAttributes
//     }
//
//     interface StrapiEmployees {
//         data: StrapiEmployeeData
//     }
//
//     interface StrapiEmployeesList {
//         data: StrapiEmployeeData[]
//     }
//
//     interface StrapiCharactersAttributes {
//         name: string,
//         photo?: StrapiImg
//     }
//
//     interface StrapiCharactersData {
//         id: number
//         attributes: StrapiCharactersAttributes
//     }
//
//     interface StrapiCharacters {
//         data: StrapiCharactersData
//     }
//
//     interface StrapiCharactersList {
//         data: StrapiCharactersData[]
//     }
//
//     interface StrapiSecondaryCharacters {
//         role: string,
//         team: string
//     }
//
//     interface StrapiJsonTextItem {
//         type: string,
//         text?: string,
//         bold?: boolean,
//         italic?: boolean,
//         underline?: boolean,
//         strikethrough?: boolean,
//         code?: boolean,
//         url?: string,
//         children?: StrapiJsonTextItem[],
//     }
//
//     interface StrapiJsonText {
//         type: string,
//         level?: number,
//         format?: string,
//         image?: StrapiImgAttributes,
//         children: StrapiJsonTextItem[]
//     }
//
//     interface StrapiSpectacleAbout {
//         text: StrapiJsonText[],
//         is_left: boolean
//     }
//
//     interface StrapiSpectacleDescriptionScene {
//         text: StrapiJsonText[],
//     }
//
//     interface StrapiSpectacleDescription {
//         act: number,
//         scene?: StrapiSpectacleDescriptionScene[]
//     }
//
//     interface StrapiSpectacleAttributes {
//         name: string
//         composer: string
//         duration: string
//         slug: string
//         locale: string
//         libretto?: string
//         language_descr?: string
//         seo_description?: string
//         updatedAt?: string
//         language?: string
//         genre_additional?: string
//         about?: StrapiSpectacleAbout[],
//         short_descr?: StrapiSpectacleDescription[]
//         video?: StrapiVideoUrl[]
//         gallery?: StrapiGallery
//         news_articles?: StrapiNewsArticleList
//         afisha_img?: StrapiImg
//         poster_img?: StrapiImg
//         announcement_img?: StrapiImg
//         genre?: StrapiGenre
//         shows?: StrapiShowList
//         characters?: StrapiCharactersList
//         directors?: StrapiEmployeesList
//         secondary_characters?: StrapiSecondaryCharacters
//         localizations?: StrapiSpectacleList
//     }
//
//     interface StrapiSpectacleData {
//         id: number
//         attributes: StrapiSpectacleAttributes
//     }
//
//     interface StrapiSpectacleList {
//         data: StrapiSpectacleData[]
//     }
//
//     interface StrapiSpectacle {
//         data: StrapiSpectacleData
//     }
//
//     interface StrapiShowRole {
//         id: number,
//         is_premiere: boolean,
//         is_guest: boolean,
//         character?: StrapiCharacters,
//         employee?: StrapiEmployees
//     }
//
//     interface StrapiShowAttributes {
//         datetime: string
//         is_canceled?: boolean
//         updatedAt?: string
//         locale?: string,
//         hash?: string,
//         is_premiere?: boolean
//         is_rescheduled?: boolean
//         is_tour?: boolean
//         rescheduled_datetime?: string
//         country?: string
//         address?: string
//         spectacle: StrapiSpectacle,
//         venue?: StrapiVenue,
//         announcement_img?: StrapiImg,
//         led_by?: StrapiEmployees,
//         role?: StrapiShowRole[]
//     }
//
//     interface StrapiShowData {
//         id: number
//         attributes: StrapiShowAttributes
//     }
//
//     interface StrapiShowList {
//         data: StrapiShowData[]
//     }
//
//     interface StrapiShow {
//         data: StrapiShowData
//     }
//
//     interface StrapiMainRecommends {
//         data: StrapiShowData[]
//     }
//
//     interface StrapiMainPoster {
//         id: number
//         show: StrapiShow
//         photo: StrapiImg
//     }
//
//     interface StrapiMainAttributes {
//         recommends: StrapiMainRecommends
//         poster: StrapiMainPoster[]
//         afisha: StrapiMainPoster[]
//     }
//
//     interface StrapiMainData {
//         id: number
//         attributes: StrapiMainAttributes
//     }
//
//     interface StrapiContactItem {
//         id: number
//         name: string
//         email: string
//         phone: StrapiNumber[]
//     }
//
//     interface StrapiContactAttributes {
//         email: string
//         administrator: string
//         locale: string
//         startBox: string
//         endBox: string
//         startTheatre: string
//         endTheatre: string
//         poster: StrapiImg
//         contacts: StrapiContactItem[]
//     }
//
//     interface StrapiContactData {
//         id: number
//         attributes: StrapiContactAttributes
//     }
//
//     interface StrapiSponsorsAttributes {
//         label?: string,
//         type: string,
//         sort: number,
//         is_footer?: boolean,
//         is_page?: boolean,
//         url?: string | null,
//         logo: StrapiImg
//     }
//
//     interface StrapiSponsorsData {
//         id: number
//         attributes: StrapiSponsorsAttributes
//     }
//
//     interface StrapiSponsors {
//         data: StrapiSponsorsData[]
//     }
//
//     interface StrapiItem<T> {
//         id: number
//         attributes: T | StrapiSettingAttributes | StrapiNewsArticleAttributes | StrapiMainAttributes | StrapiShowAttributes | StrapiSpectacleAttributes
//     }
//
//     interface StrapiResponseList<T> {
//         // data: StrapiItem[] | StrapiShowData[] | StrapiSpectacleData[] | StrapiNewsArticleData[]
//         data: T[]
//         meta: {
//             pagination?: {
//                 page: number
//                 pageSize: number
//                 pageCount: number
//                 total: number
//             }
//         }
//     }
//
//     interface StrapiResponseItem<T> {
//         // data: StrapiItem | StrapiMainData | StrapiSettingData | StrapiContactData
//         data: T
//         meta: {}
//     }
// }
//
//
// export {
//     StrapiResponseList,
//     StrapiMainRecommends,
//     StrapiItem,
//     MainNews
// }