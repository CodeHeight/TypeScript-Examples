let isBird = true;
let birdAge = 5;
let birdName = "Iggy";
let birdNames = ['Snuggles', 'Angel'];
let birdAges = [2, 4, 6, 8.2];
let someUnknownThing = 'string';
let someThingsArray = [4, 'something', true];
function doStuff() {
    console.log('doing stuff');
    return;
}
doStuff();
function throwError(message) {
    throw new Error(message);
}
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["OUT_OF_MEMORY"] = 123] = "OUT_OF_MEMORY";
    ErrorCodes[ErrorCodes["WRONG_INPUT"] = 234] = "WRONG_INPUT";
})(ErrorCodes || (ErrorCodes = {}));
let error = ErrorCodes.WRONG_INPUT;
let tuple = ['Some String', 5];
function getNameAndAge() {
    return ['Josh Yates', 37];
}
let firstItem = tuple[0];
let secondItem = tuple[1];
