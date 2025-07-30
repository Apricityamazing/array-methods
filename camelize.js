// Turn strings seperated by dashes into camel-cased strings
// Ex. border-left-width --> borderLeftWidth
// 1. Turn string inputed into function camelize() into an array spliting words by each dash
// 2. Capitalize first letter of every word after the first word
// 3. Join the array back together into a camelized string, then return the string.
function camelize(string) {
    // Splits string into an array
    let words = string.split('-');
    // Seperates first word from the array
    let firstWord = words.shift();
    // Function to capitalize the first letter of each word
    function capitalize(str) {
        let capitalLetter = str.charAt(0);
        let restOfWord = str.slice(1);
        return capitalLetter.toUpperCase() + restOfWord;
    }
    // Iterating over each element of the array to capitalize
    let capitalizedWords = words.map(capitalize);
    return firstWord + capitalizedWords.join('');

}
console.log(camelize("border-left-width"));
