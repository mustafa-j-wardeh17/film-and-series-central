export const capitalize = (text: string) => {
    return text.replaceAll("-", " ").split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}