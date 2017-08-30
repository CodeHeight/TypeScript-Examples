function testAnimal(animal) {
    console.log('Number of legs:', animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood('milk');
    animal.eatFood('meat');
}
class Animal {
    constructor(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    eatFood(food) {
        console.log('yummy ' + food);
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
    makeSound() {
        console.log('woof');
    }
    eatFood(food) {
        if (food !== 'meat') {
            console.log('yuck');
            return;
        }
        super.eatFood(food);
    }
}
testAnimal(new Dog());
