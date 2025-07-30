// Turn strings seperated by dashes into camel-cased strings
// Ex. border-left-width --> borderLeftWidth
// 1. Turn string inputed into function camelize() into an array spliting words by each dash
// 2. Capitalize first letter of every word after the first word
// 3. Join the array back together into a camelized string, then return the string.
function camelize(string) {
    // Splits string into an array
    let array = string.split('-');
    let firstWord = array.shift();
    return "First word " + firstWord + " " + "Array " + array;

}
console.log(camelize("border-left-width"));
