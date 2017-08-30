class Car {
    constructor(brandName) {
        this.brandName = brandName;
        //this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
    static BuildCar(brandName) {
        return new Car(brandName);
    }
    static BuyCar(brandName, ownerName) {
        let car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    }
    startCar() {
        this._startEngine();
    }
    _startEngine() {
    }
    get seriesNumber() {
        return this._seriesNumber;
    }
    get ownerName() {
        return this._ownerName;
    }
    set ownerName(name) {
        //do some validation
        this._ownerName = name;
    }
}
//public brandName: string;
Car.SERIES_NUMBER = 0;
//let _car = new Car('Chevy');
let _car = Car.BuyCar('Chevy', 'Josh Yates');
_car.startCar();
//_car.ownerName = 'Josh Yates'
console.log('Brand number:', _car.brandName);
console.log('Series number:', _car.seriesNumber);
console.log('Owner name:', _car.ownerName);
//let _car2 = new Car('Ford');
let _car2 = Car.BuyCar('Ford', 'Robert Anton Wilson');
console.log('Brand number 2:', _car2.brandName);
console.log('Series number 2:', _car2.seriesNumber);
console.log('Owner name:', _car2.ownerName);
