let santa = {
    numberOfKidsToVisit: 9988,
    giveGift: (callback) => {
        callback(true);
    },
    fly: () => { }
};
let numberOfKidsToVisit = santa.numberOfKidsToVisit;
//if (santa.fly) {
santa.fly();
//}
//anonymous interface
function getNameAndAge2() {
    return { age: 37, name: 'Josh' };
}
let tuple2 = getNameAndAge2();
let someName = tuple2.name;
let FatSanta;
//FatSanta.eat(); 
