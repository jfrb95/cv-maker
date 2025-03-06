function capitalizeFirstLetter(str) {
    if (str === '') {
        return;
    }
    return str[0].toUpperCase() + str.slice(1);
}



export function kebabToTitle(str) {
    return str
        .split('-')
        .map(str => capitalizeFirstLetter(str))
        .join(' ');
}