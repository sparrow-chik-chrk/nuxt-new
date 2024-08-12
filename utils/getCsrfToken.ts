export default function () {
    if (typeof document === "undefined") {
        return ""
    }
    console.log(document.cookie);
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1] || ""
}
