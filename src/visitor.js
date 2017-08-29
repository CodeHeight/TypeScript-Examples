"use strict";
var RegularItem = (function () {
    function RegularItem(price) {
        this.price = price;
    }
    RegularItem.prototype.accept = function (visitor) {
        visitor.visitRegular(this);
    };
    return RegularItem;
}());
var GiftItem = (function () {
    function GiftItem(minimalPriceForGift, originalPrice) {
        this.minimalPriceForGift = minimalPriceForGift;
        this.originalPrice = originalPrice;
    }
    GiftItem.prototype.accept = function (visitor) {
        visitor.visitGift(this);
    };
    return GiftItem;
}());
var DiscountItem = (function () {
    function DiscountItem(originalPrice, discount) {
        this.originalPrice = originalPrice;
        this.discount = discount;
    }
    DiscountItem.prototype.accept = function (visitor) {
        visitor.visitDiscount(this);
    };
    return DiscountItem;
}());
var items = [
    new RegularItem(10),
    new GiftItem(11, 3),
    new DiscountItem(4, 2)
];
console.log('price', calculateTotalPriceNaive(items)); //5
console.log('discount', calculateDiscountNaive(items)); //12
function calculateTotalPriceNaive(items) {
    var price = 0;
    items.forEach(function (item) {
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
    var price = calculateTotalPriceNaive(items);
    var discount = 0;
    items.forEach(function (item) {
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
var TotalPriceVisitor = (function () {
    function TotalPriceVisitor() {
        this.price = 0;
    }
    TotalPriceVisitor.prototype.calculate = function (items) {
        var _this = this;
        items.forEach(function (_) { return _.accept(_this); });
    };
    TotalPriceVisitor.prototype.visitRegular = function (item) {
        this.price += item.price;
    };
    TotalPriceVisitor.prototype.visitGift = function (item) {
    };
    TotalPriceVisitor.prototype.visitDiscount = function (item) {
        this.price += item.originalPrice - item.discount;
    };
    return TotalPriceVisitor;
}());
function calculateTotalPrice(items) {
    var visitor = new TotalPriceVisitor();
    visitor.calculate(items);
    return visitor.price;
}
var DiscountVisitor = (function () {
    function DiscountVisitor() {
        this.price = 0;
        this.discount = 0;
    }
    DiscountVisitor.prototype.calculate = function (items) {
        var _this = this;
        this.price = calculateTotalPrice(items);
        items.forEach(function (_) { return _.accept(_this); });
    };
    DiscountVisitor.prototype.visitRegular = function (item) {
    };
    DiscountVisitor.prototype.visitGift = function (item) {
        if (this.price >= item.minimalPriceForGift) {
            this.discount += item.originalPrice;
        }
    };
    DiscountVisitor.prototype.visitDiscount = function (item) {
        this.discount += item.discount;
    };
    return DiscountVisitor;
}());
function calculateDiscount(items) {
    var visitor = new DiscountVisitor();
    visitor.calculate(items);
    return visitor.discount;
}
console.log('price visitor', calculateTotalPrice(items)); //5
console.log('discount visitor', calculateDiscount(items)); //12
