export function capitalizeFirstLetter(word) {
    const capitalized =
        word.charAt(0).toUpperCase()
        + word.slice(1)
    return capitalized
}