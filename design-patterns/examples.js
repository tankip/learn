// Classes design pattern

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

const civic =  new Car(4, 'V6', 'RED');
console.log(civic);

console.log('---------------------------------------------------------------------------------');

// Constructor design pattern

class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const hyundai = new Suv(5, 'v10', 'BLACK');
console.log(hyundai);

console.log('---------------------------------------------------------------------------------');


// Factory design pattern 
class CarFactory {
    createCar(type) {
        switch(type) {
            case 'corolla':
                return new Car(4, 'dit', 'green');
            case 'subaru':
                return new Car(4, 'boxer', 'blur');
        }
    }
}

const carFactory = new CarFactory();

const corolla = carFactory.createCar('corolla');
const subaru =  carFactory.createCar('subaru');
console.log('corolla', corolla);
console.log('subaru', subaru);

class SuvFactory {
    createSuv(type) {
        switch(type) {
            case 'hummer':
                return new Suv(6, 'v10', 'grey');
            case 'jeep':
                return new Suv(6, 'v12', 'yellow');
        }
    }
}

const suvFactory = new SuvFactory();

console.log('---------------------------------------------------------------------------------');

// Singconston design pattern
let instance = null;

class Dog {
    constructor(breed, color) {
        if (!instance) {
            this.breed = breed;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const dogOne = new Dog('German', 'Brown');
const dogTwo = new Dog('Briton', 'Black');
console.log('dogone', dogOne);
console.log('dogTwo', dogTwo);

console.log('---------------------------------------------------------------------------------');

// Abstract factory design pattern

const carManufacturer = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}

const corollaTwo = carManufacturer('car', 'corolla');
const hummer = carManufacturer('suv', 'hummer');
console.log('corolla', corollaTwo);
console.log('hummer', hummer);

// Mixin pattern

const carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing vroom vroom`);
    }
}

Object.assign(Car.prototype, carMixin);

const newSubaru = carManufacturer('car', 'subaru');
newSubaru.revEngine();