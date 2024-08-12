// utils/dateUtils.ts

const monthsGenitive: { [key: string]: string } = {
    "січень": "січня",
    "лютий": "лютого",
    "березень": "березня",
    "квітень": "квітня",
    "травень": "травня",
    "червень": "червня",
    "липень": "липня",
    "серпень": "серпня",
    "вересень": "вересня",
    "жовтень": "жовтня",
    "листопад": "листопада",
    "грудень": "грудня",
};

function padWithZero(value: number | string): string {
    return value.toString().padStart(2, "0");
}

export function formatDate(dateStr: string | undefined, useGenitive: boolean = false, separator: string = "-") {
    if (!dateStr) {
        return {
            year: "",
            month: "",
            monthNumber: "",
            day: "",
            dayOfWeek: "",
            time: "",
            dayMonthNumeric: "",
            monthYearShort: "",
            monthYearLong: "",
            fullDateShortYear: "",
            fullDateLongYear: ""
        };
    }
    const date = new Date(dateStr);
    const {locale} = useI18n();
    const year = date.getUTCFullYear();
    const yearShort = year.toString().slice(-2);
    let month = date.toLocaleString(locale.value, {month: "long"});
    const monthNumeric = padWithZero(date.getMonth() + 1);
    const monthNumber = date.getMonth() + 1;
    const day = padWithZero(date.getUTCDate());
    const dayOfWeek = date.toLocaleString(locale.value, {weekday: "long"});
    const time = date.toISOString().split("T")[1].split(":").map(padWithZero).slice(0, 2).join(":");

    if (locale.value === "uk" && useGenitive && month in monthsGenitive) {
        month = monthsGenitive[month];
    }

    const dayMonthNumeric = `${day}${separator}${monthNumeric}`;
    const monthYearShort = `${monthNumeric}${separator}${yearShort}`;
    const monthYearLong = `${monthNumeric}${separator}${year}`;
    const fullDateShortYear = `${day}${separator}${monthNumeric}${separator}${yearShort}`;
    const fullDateLongYear = `${day}${separator}${monthNumeric}${separator}${year}`;

    return {
        year,
        month,
        monthNumber,
        day,
        dayOfWeek,
        time,
        dayMonthNumeric,
        monthYearShort,
        monthYearLong,
        fullDateShortYear,
        fullDateLongYear
    };
}

export function formatTime(timeStr: string | undefined) {
    if (!timeStr) {
        return {
            duration: "",
            time: "",
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    const {t} = useI18n()
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);

    return {
        duration: `${hours} ${t("hr")} ${minutes} ${t("min")}`,
        time: `${padWithZero(hours)}:${padWithZero(minutes)}`,
        hours,
        minutes,
        seconds
    }
}


