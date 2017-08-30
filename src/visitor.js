class RegularItem {
    constructor(price) {
        this.price = price;
    }
    accept(visitor) {
        visitor.visitRegular(this);
    }
}
class GiftItem {
    constructor(minimalPriceForGift, originalPrice) {
        this.minimalPriceForGift = minimalPriceForGift;
        this.originalPrice = originalPrice;
    }
    accept(visitor) {
        visitor.visitGift(this);
    }
}
class DiscountItem {
    constructor(originalPrice, discount) {
        this.originalPrice = originalPrice;
        this.discount = discount;
    }
    accept(visitor) {
        visitor.visitDiscount(this);
    }
}
const items = [
    new RegularItem(10),
    new GiftItem(11, 3),
    new DiscountItem(4, 2)
];
console.log('price', calculateTotalPriceNaive(items)); //5
console.log('discount', calculateDiscountNaive(items)); //12
function calculateTotalPriceNaive(items) {
    let price = 0;
    items.forEach(item => {
        if (item instanceof RegularItem) {
            price += item.price;
        }
        else if (item instanceof DiscountItem) {
            price += item.originalPrice - item.discount;
        }
    });
    return price;
}
function calculateDiscountNaive(items) {
    const price = calculateTotalPriceNaive(items);
    let discount = 0;
    items.forEach(item => {
        if (item instanceof DiscountItem) {
            discount += item.discount;
        }
        else if (item instanceof GiftItem &&
            price >= item.minimalPriceForGift) {
            discount += item.originalPrice;
        }
    });
    return discount;
}
class TotalPriceVisitor {
    constructor() {
        this.price = 0;
    }
    calculate(items) {
        items.forEach(_ => _.accept(this));
    }
    visitRegular(item) {
        this.price += item.price;
    }
    visitGift(item) {
    }
    visitDiscount(item) {
        this.price += item.originalPrice - item.discount;
    }
}
function calculateTotalPrice(items) {
    const visitor = new TotalPriceVisitor();
    visitor.calculate(items);
    return visitor.price;
}
class DiscountVisitor {
    constructor() {
        this.price = 0;
        this.discount = 0;
    }
    calculate(items) {
        this.price = calculateTotalPrice(items);
        items.forEach(_ => _.accept(this));
    }
    visitRegular(item) {
    }
    visitGift(item) {
        if (this.price >= item.minimalPriceForGift) {
            this.discount += item.originalPrice;
        }
    }
    visitDiscount(item) {
        this.discount += item.discount;
    }
}
function calculateDiscount(items) {
    const visitor = new DiscountVisitor();
    visitor.calculate(items);
    return visitor.discount;
}
console.log('price visitor', calculateTotalPrice(items)); //5
console.log('discount visitor', calculateDiscount(items)); //12
