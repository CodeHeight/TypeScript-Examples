interface Santa {
    readonly numberOfKidsToVisit: number;
    weight?: number;
    giveGift(callback: GiftGivenCallback): void;
    drinkMilk?(): void;
}

interface Santa {
    fly(): void;
}

interface FatSanta extends Santa {
    eat(): void;
}

interface GiftGivenCallback {
    (success: boolean): void;
}

let santa: Santa = {
    numberOfKidsToVisit: 9988,
    giveGift: (callback: GiftGivenCallback) => {
        callback(true);
    },
    fly: () => {}
};

let numberOfKidsToVisit = santa.numberOfKidsToVisit;

//if (santa.fly) {
santa.fly();
//}

//anonymous interface
function getNameAndAge2(): { name: string, age: number } {
    return { age: 37, name: 'Josh'};
}

let tuple2 = getNameAndAge2();
let someName = tuple2.name;
let FatSanta: FatSanta;
//FatSanta.eat();