"use strict";
var Car = (function () {
    function Car(brandName) {
        this.brandName = brandName;
        //this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
    Car.BuildCar = function (brandName) {
        return new Car(brandName);
    };
    Car.BuyCar = function (brandName, ownerName) {
        var car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    };
    Car.prototype.startCar = function () {
        this._startEngine();
    };
    Car.prototype._startEngine = function () {
    };
    Object.defineProperty(Car.prototype, "seriesNumber", {
        get: function () {
            return this._seriesNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (name) {
            //do some validation
            this._ownerName = name;
        },
        enumerable: true,
        configurable: true
    });
    //public brandName: string;
    Car.SERIES_NUMBER = 0;
    return Car;
}());
//let _car = new Car('Chevy');
var _car = Car.BuyCar('Chevy', 'Josh Yates');
_car.startCar();
//_car.ownerName = 'Josh Yates'
console.log('Brand number:', _car.brandName);
console.log('Series number:', _car.seriesNumber);
console.log('Owner name:', _car.ownerName);
//let _car2 = new Car('Ford');
var _car2 = Car.BuyCar('Ford', 'Robert Anton Wilson');
console.log('Brand number 2:', _car2.brandName);
console.log('Series number 2:', _car2.seriesNumber);
console.log('Owner name:', _car2.ownerName);
