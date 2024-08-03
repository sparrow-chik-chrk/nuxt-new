export function strapiTextToHtml(content: StrapiJsonText[], wrapFirstLetter = false): string {
    return content.map(block => {
        if (block.type === "paragraph") {
            const paragraphHtml = block.children.map(convertTextNode).join("");
            return wrapFirstLetter ? wrapFirstLetterInSpan(paragraphHtml) : `<p class="azbuka body-reg text-justify paragraph">${paragraphHtml}</p>`;
        }
        if (block.type === "heading" && block.level) {
            const level = block.level
            const headingHtml = block.children.map(convertTextNode).join("")
            return `<h${level} class="azbuka text-justify heading">${headingHtml}</h${level}>`
        }
        if (block.type === "quote") {
            const quoteHtml = block.children.map(convertTextNode).join("")
            return `<p class="azbuka text-justify body-reg quote">${quoteHtml}</p>`
        }
        if (block.type === "list" && block.format && block.children.length) {
            const listHtml = block.children.map(listItem => {
                if (listItem.children) {
                    return `<li class="azbuka text-justify body-reg">${listItem.children.map(convertTextNode).join("")}</li>`
                }
                return ""
            }).join("");
            return block.format === "ordered" ? `<ol class="ordered-list">${listHtml}</ol>` : `<ul class="unordered-list">${listHtml}</ul>`
        }
        if (block.type === "image" && block.image && block.image.hash) {
            return generatePictureTag(block.image.hash, block.image.alternativeText);
        }
        return "";
    }).join("");
}

function convertTextNode(node: StrapiJsonTextItem): string {
    let text = node.text || ""

    if (node.bold) text = `<b>${text}</b>`
    if (node.italic) text = `<i>${text}</i>`
    if (node.underline) text = `<u>${text}</u>`
    if (node.strikethrough) text = `<s>${text}</s>`
    if (node.code) text = `<span><code class="margin-none w-fit code-text">${text}</code></span>`
    if (node.type === "link" && node.url) text = `<a href="${node.url}">${node.children?.map(convertTextNode).join("")}</a>`

    return text;
}

function wrapFirstLetterInSpan(paragraphHtml: string): string {
    const firstLetterMatch = paragraphHtml.match(/^[\s]*<[^>]+>|^[\s]*([^<\s])/)
    if (firstLetterMatch) {
        const firstLetter = firstLetterMatch[1] || ""
        const restOfParagraph = paragraphHtml.slice(firstLetter.length)
        return `<p class="azbuka text-justify body-reg paragraph"><span class="first-letter color-bordo text-upper">${firstLetter}</span>${restOfParagraph}</p>`
    }
    return `<p class="azbuka text-justify body-reg paragraph">${paragraphHtml}</p>`
}

function generatePictureTag(hash: string, alt?: string) {
    const extensions = ["avif", "webp", "png"];
    const smallSources = extensions.map(ext => `<source srcset="${useRuntimeConfig().public.mediaUrl}small_${ext}_${hash}.${ext}" media="(max-width: 1339.99px)" type="image/${ext}">`).join("");
    const largeSources = extensions.map(ext => `<source srcset="${useRuntimeConfig().public.mediaUrl}large_${ext}_${hash}.${ext}" media="(min-width: 1440px)" type="image/${ext}">`).join("");
    const fallbackImage = `${useRuntimeConfig().public.mediaUrl}large_png_${hash}.png`;

    return `
        <picture class="flex-col h-full pos-relative about-image">
            ${smallSources}
            ${largeSources}
            <img src="${fallbackImage}" alt="${alt}"  loading="lazy">
        </picture>
    `;
}