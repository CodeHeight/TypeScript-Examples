let isBird:boolean = true;
let birdAge:number = 5;
let birdName:string = "Iggy";

let birdNames:string[] = ['Snuggles', 'Angel'];
let birdAges:number[] = [2, 4, 6, 8.2];

let someUnknownThing:any = 'string';
let someThingsArray:any[] = [4, 'something', true]

function doStuff(): void {
    console.log('doing stuff');
    return;
}

doStuff();

function throwError(message: string): never {
    throw new Error(message);
}

enum ErrorCodes {
    OUT_OF_MEMORY = 123,
    WRONG_INPUT = 234
}

let error = ErrorCodes.WRONG_INPUT;

let tuple: [string, number] = ['Some String', 5];

let firstItem = tuple[0];
let secondItem: number = tuple[1];

function getNameAndAge(): [string, number] {
    return ['Josh Yates', 37];
}
