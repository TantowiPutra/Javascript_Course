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

// 12. Penggunaan Spread Operatoros untuk 

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


