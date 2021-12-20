// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let firstLetter = str.slice(0,1).toUpperCase();
    let restStr = str.slice(1);
    return firstLetter+restStr;
}