class RegularItem {
    constructor(public price: number){
    }

    public accept(visitor: ItemsVisitor): void {
        visitor.visitRegular(this);
    }
}

class GiftItem{
    constructor(public minimalPriceForGift: number,
    public originalPrice: number) {
    }

    public accept(visitor: ItemsVisitor): void {
        visitor.visitGift(this);
    }
}

class DiscountItem{
    constructor(public originalPrice: number,
    public discount: number) {
    }

    public accept(visitor: ItemsVisitor): void {
        visitor.visitDiscount(this);
    }
}

const items = [
    new RegularItem(10),
    new GiftItem(11, 3),
    new DiscountItem(4, 2)
];

console.log('price', calculateTotalPriceNaive(items));//5
console.log('discount', calculateDiscountNaive(items));//12

type _Item = RegularItem | GiftItem | DiscountItem;

function calculateTotalPriceNaive(items: _Item[]): number {
    let price: number = 0;
    items.forEach(item => {
        if (item instanceof RegularItem){
            price += item.price;
        } else if (item instanceof DiscountItem){
            price += item.originalPrice - item.discount;
        }
    });
    return price;
}

function calculateDiscountNaive(items: _Item[]): number {
    const price: number =
    calculateTotalPriceNaive(items);
    
    let discount = 0;
    items.forEach(item => {
        if (item instanceof DiscountItem){
            discount += item.discount;
        } else if (item instanceof GiftItem &&
            price >= item.minimalPriceForGift) {
                discount += item.originalPrice;
            }
    });
    return discount;
}

interface ItemsVisitor {
    visitRegular(item: RegularItem): void;
    visitGift(item: GiftItem): void;
    visitDiscount(item: DiscountItem): void;
}

class TotalPriceVisitor implements ItemsVisitor {
    public price: number;
    constructor(){
        this.price = 0;
    }

    public calculate(items: _Item[]): void {
        items.forEach(_ => _.accept(this));
    }

    public visitRegular(item: RegularItem): void {
        this.price += item.price;
    }

    public visitGift(item: GiftItem): void {
    }

    public visitDiscount(item: DiscountItem): void{
        this.price += item.originalPrice - item.discount;
    }
}

function calculateTotalPrice(items: _Item[]): number {
    const visitor = new TotalPriceVisitor();
    visitor.calculate(items);
    return visitor.price;
}

class DiscountVisitor implements ItemsVisitor {
    private price: number;
    public discount: number;
    constructor(){
        this.price = 0;
        this.discount = 0;
    }

    public calculate(items: _Item[]): void {
        this.price = calculateTotalPrice(items);
        items.forEach(_ => _.accept(this));
    }

    public visitRegular(item: RegularItem): void {
    }

    public visitGift(item: GiftItem): void {
        if (this.price >= item.minimalPriceForGift){
            this.discount += item.originalPrice;
        }
    }

    public visitDiscount(item: DiscountItem): void{
        this.discount += item.discount;
    }
}

function calculateDiscount(items: _Item[]){
    const visitor = new DiscountVisitor();
    visitor.calculate(items);
    return visitor.discount;
}

console.log('price visitor', calculateTotalPrice(items));//5
console.log('discount visitor', calculateDiscount(items));//12