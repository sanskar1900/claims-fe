export const getSuffix = (number) => {
    if (number % 10 === 1) {
        return "st";
    }
    if (number % 10 === 2) {
        return "nd";
    }
    if (number % 10 === 3) {
        return "rd";
    }
    return "th";
}