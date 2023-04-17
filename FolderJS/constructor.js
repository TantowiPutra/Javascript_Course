// Js bukan bahasa pemrogramman OOP, melainkan prototype-based language

// function Car(brand, color, maxSpeed, chassisNumber)
// {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function()
// {
//     console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function()
// {
//     console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turn = function() {
//   console.log(`${this.brand} ${this.color} is turning`);
// }

// Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();
// car2.drive();
// car3.drive();

// class Car {
//     constructor(brand, color, maxSpeed, chassisNumber)
//     {
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.chassisNumber = chassisNumber; 
//     }
// }

// class Mail{
//     constructor(sender, receiver, subject, body)
//     {
//         this.sender = sender;
//         this.receiver = receiver;
//         this.subject = subject;
//         this.body = body;
//     }
// }

// car1 = new Car('BMW', 'red', 200, 'b-1');
// car2 = new Car('Audi', 'blue', 220, 'a-1');
// car3 = new Car('BMW', 'black', 250, 'b-2');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// Pengerjaan Quiz OOP Js
class Animal {
    constructor(name, age, isMammal)
    {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal = true)
    {
        super(name, age, isMammal);
    }

    eat()
    {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal = false)
    {
        super(name, age, isMammal);
    }

    fly()
    {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

