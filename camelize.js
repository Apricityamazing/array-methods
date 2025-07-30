// Turn strings seperated by dashes into camel-cased strings
// Ex. border-left-width --> borderLeftWidth
// 1. Turn string inputed into function camelize() into an array spliting words by each dash
// 2. Capitalize first letter of every word after the first word
// 3. Join the array back together into a camelized string, then return the string.
function camelize(string) {
    // Splits string into an array
    let endingWords = string.split('-');
    // Seperates first word from the array
    let firstWord = array.shift();
    // Function to capitalize the first letter of each word
    function capitalize(str) {
        let capitaletter = str.charAt(0);
        let restofword = str.slice(1);
        return capitaletter.toUpperCase() + restofword;
    }
    // Iterating over each element of the array to capitalized 
        let capitalizedWords = endingWords.map(capitalize);
    return capitalizedWords;

}
console.log(camelize("border-left-width"));
