//1. Console log menampilkan output ke terminal/console
console.log("Hello, World!");

// Intepreter = Menghasilkan nilai
5;
2 + 3;

// Statement = perintah untuk melakukan sesuatu
var nama;

// Comment
// var nama;

//2. Tiga (3) cara untuk mendeklarasikan variabel dalam JavaScript
// Menggunakan var, let dan const
var lastName = "skyWalker";
console.log(lastName);

//3. Contoh expression dan statement
// let fullName = let lastname -> Error karena let lastName merupakan statement
// let fullName = (lastName = "Skywalker");  -> Tidak Error
// let fullName = "Luke" + "Skywalker"; -> Tidak Error

//4. deklarasi var adalah scope global atau scope function sementara let dan const adalah scope blok.

//5. Tipe data pada js
//  Undefine
/*
    let x;
    console.log(typeof(x));

    output: undefined 

    let x = 10; -> tipe data number

    Tipe data big integer dapat dilakukan dengan menambahkan huruf n diakhir
    const bigNumber = 1234567890123456789012345678901234567890n;

    let greet = "Hello"; -> Tipe Data String

    let someLaterData = null; -> Tipe Data Null

*/

// 6. Operator
/*
    Assignment Operator
    x = y;

    let x = 10;
    let y = 5

    x += y;

    console.log(x);

    Comparison Operator (> , < dst..)
*/

// 7. If Else

// 8. Switch Case

/*
    let language = "French";
    let greeting = null;

    switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
    }

    console.log(greeting);
*/

// 9. Looping pada Js
/*
    Looping for of
    
    for(const arrayItem of myArray) {
        console.log(arrayItem)
    }

    /* output
    Luke
    Han
    Chewbacca
    Leia
*/ 

/*
    10. Tipe data object -> bisa menyimpan data dalam bentuk kompleks (menyimpan banyak data dengan tipe data yang berbeda-beda)
*/

const character = {
    name: "Luke Skywalker",
    age: 19,
    species: "Human",
    "Hair Color": "Blond"
    // ^ Menyimpan data dengan key-value pair
};

/*
    const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    };

    console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
    console.log(`Umur saya ${user.age} tahun`);
*/

// 11. Tipe Data Array

// 12. Penggunaan Spread Operators untuk Array

/*
    11. 1 Menggabungkan Array
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
    const others = ["Cake", "Pie", "Donut"];

    const allFavorites = [...favorites, ...others];

    console.log(allFavorites);

    output
    [ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]

    11.2 Menggabungkan Object Literals
    const obj1 = { firstName: 'Obi-Wan', age: 30 };
    const obj2 = { lastName: 'Kenobi', gender: 'M' };

    const newObj = { ...obj1, ...obj2 };

    console.log(newObj);
    { firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/

/*
    12. Destructuring Object
    const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
    }
    
    let firstName = "Dimas";
    let age = 20;
    
    // menginisialisasi nilai baru melalui destructuring object
    ({ firstName, age } = profile);
    
    console.log(firstName);
    console.log(age);
    
    output:
    John
    18
*/

/*
    13. Destructuring Array
    const favorites = ["Seafood"];
 
    const [myFood, herFood = "Salad"] = favorites
    
    console.log(myFood);
    console.log(herFood);
    
    output:
    Seafood
    Salad
*/

// 14. Tipe Data Map
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a Number Key'],
    [true, true]  
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);

  // Fungsi Get digunakan untuk mendapatkan isi dari suatu map   
  console.log(capital.get("London"));

  // Fungsi set digunakan untuk mengisi map   
  capital.set("New Delhi", "India");
  console.log(capital.size);


  console.log(capital.get("New Delhi"));

  console.log(capital);

// Fungsi has digunakan untuk mengecek keberadaan suatu key
console.log(capital.has("London"));
console.log(capital.has("Irlandia"));

// Fungsi delete digunakan untuk menghapus key dari suatu map
capital.delete("London");
console.log(capital.has("London"));

/*
  15. Set
  Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini:

  const numberSet = new Set([1, 4, 6, 4, 1]);

  console.log(numberSet);


  Set(3) { 1, 4, 6 }
*/

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/*
  16. WeakMap dan WeakSet
*/

// Map
const visitsCountMap = new Map(); // Menyimpan daftar user
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"
console.log(visitsCountMap);

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)

// WeakMap
// const { inspect } = require('util');

// const visitsCountMap2 = new WeakMap(); // Menyimpan daftar user

// function countUser(user) {
//   let count = visitsCountMap2.get(user) || 0;
//   visitsCountMap2.set(user, count + 1);
// }

// let jonas2 = { name: "Jonas" };
// countUser(jonas);  // Menambahkan user "Jonas"

// jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function() {
//   console.log(inspect(visitsCountMap2, { showHidden: true }));
// }, 10000);

/* output
  WeakMap {  }
*/

const restaurant = {
    "name" : "Bakso Mang Dicoding",
    "city" : "Bandung",
    "favorite drink" : "Es Teh",
    "favorite food" : "bakso",
    "isVegan" : false
};
  
const {name: name, "favorite drink" : favoriteDrink} = restaurant;

const priceInJPY = 5000;
// Tulis kode di bawah ini
const currency = new Map();
currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

const priceInIDR = currency.get("JPY") * priceInJPY;

// 17. Declaring Function

// 18. Function Parameter

// 19. Arrow Function

// 20. Closure
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}
  
const innerFunc = outerFunction(10); // innerFunc is now a closure

console.log(innerFunc(5)); // Output: 15

function minimal(a, b){
    if(a < b) return a;
    else if(a > b) return b;
    else return a;
}

console.log(minimal(5, 5));

function findIndex(array, number){
for(let i = 0; i < array.length; i++){
    if(array[i] === number){
        return i;
    }
}

return -1;
}

console.log(findIndex([1,2,3,4,5], 3));





