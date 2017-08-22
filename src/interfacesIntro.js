"use strict";
var santa = {
    numberOfKidsToVisit: 9988,
    giveGift: function (callback) {
        callback(true);
    },
    fly: function () { }
};
var numberOfKidsToVisit = santa.numberOfKidsToVisit;
//if (santa.fly) {
santa.fly();
//}
//anonymous interface
function getNameAndAge2() {
    return { age: 37, name: 'Josh' };
}
var tuple2 = getNameAndAge2();
var someName = tuple2.name;
var FatSanta;
//FatSanta.eat(); 
