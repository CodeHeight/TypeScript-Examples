"use strict";
var isBird = true;
var birdAge = 5;
var birdName = "Iggy";
var birdNames = ['Snuggles', 'Angel'];
var birdAges = [2, 4, 6, 8.2];
var someUnknownThing = 'string';
var someThingsArray = [4, 'something', true];
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
var error = ErrorCodes.WRONG_INPUT;
var tuple = ['Some String', 5];
var firstItem = tuple[0];
var secondItem = tuple[1];
function getNameAndAge() {
    return ['Josh Yates', 37];
}
