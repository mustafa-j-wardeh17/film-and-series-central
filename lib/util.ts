export const capitalize = (text: string) => {
    return text.replaceAll("-", " ").split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export const RandomArray = (array: any[]) => {
    // Function to shuffle an array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}