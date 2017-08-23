export interface Item {
    id: string;
}

interface ItemConstructor<T extends Item> {  //Type Safe
    new(id: string): T;
}

interface IdToItemMap<T extends Item> {
    [id: string]: T;
}

class ItemsCache<T extends Item> {
    private itemsCache: IdToItemMap<T>;

    constructor(private itemConstructor: 
        ItemConstructor<T>) {
            this.itemsCache = {};
        }

    public createItem(id: string): T {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }

        const item: T = 
            new this.itemConstructor(id);
        this.itemsCache[id] = item;
        return item;
    }
}

class Person implements Item {
    constructor(public id: string) {

    }
}

function createCache<T extends Item>(
    itemConstructor: ItemConstructor<T>
): ItemsCache<T> {
    return new ItemsCache(itemConstructor);
}

//generic types only for compiler not availabe 
//at runtime. This will not work:
//if (typeof T == 'person') {
//}
//const x = typeof T;


const itemsCache = new ItemsCache(Person);

const person1: Person = itemsCache.createItem("a");
const person2: Person = itemsCache.createItem("b");
const person3: Person = itemsCache.createItem("a");

console.log('person 1', person1);
console.log('person 2', person2);
console.log('person 3', person3);

console.log('person1 === person2', person1 === person2);
console.log('person1 === person3', person1 === person3);