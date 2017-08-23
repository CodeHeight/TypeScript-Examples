class Car {
    //public brandName: string;
    private static SERIES_NUMBER = 0;
    private _seriesNumber: number;
    private _ownerName: string;

    private constructor(public brandName: string){
        //this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }

    public static BuildCar(brandName: string): Car {
        return new Car(brandName);
    }

    public static BuyCar(brandName: string,
        ownerName: string): Car{
        let car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    }

    public startCar(): void {
        this._startEngine();
    }

    private _startEngine(): void {

    }

    public get seriesNumber(): number {
        return this._seriesNumber;
    }

    public get ownerName(): string {
        return this._ownerName;
    }

    public set ownerName(name: string) {
        //do some validation
        this._ownerName = name;
    }
}

//let _car = new Car('Chevy');
let _car = Car.BuyCar('Chevy','Josh Yates');
_car.startCar();
//_car.ownerName = 'Josh Yates'
console.log('Brand number:', _car.brandName);
console.log('Series number:', _car.seriesNumber);
console.log('Owner name:', _car.ownerName);

//let _car2 = new Car('Ford');
let _car2 = Car.BuyCar('Ford','Robert Anton Wilson');
console.log('Brand number 2:', _car2.brandName);
console.log('Series number 2:', _car2.seriesNumber);
console.log('Owner name:', _car2.ownerName);
