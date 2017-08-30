"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemsCache {
    constructor(itemConstructor) {
        this.itemConstructor = itemConstructor;
        this.itemsCache = {};
    }
    createItem(id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        const item = new this.itemConstructor(id);
        this.itemsCache[id] = item;
        return item;
    }
}
class Person {
    constructor(id) {
        this.id = id;
    }
}
function createCache(itemConstructor) {
    return new ItemsCache(itemConstructor);
}
//generic types only for compiler not availabe 
//at runtime. This will not work:
//if (typeof T == 'person') {
//}
//const x = typeof T;
const itemsCache = new ItemsCache(Person);
const person1 = itemsCache.createItem("a");
const person2 = itemsCache.createItem("b");
const person3 = itemsCache.createItem("a");
console.log('person 1', person1);
console.log('person 2', person2);
console.log('person 3', person3);
console.log('person1 === person2', person1 === person2);
console.log('person1 === person3', person1 === person3);
