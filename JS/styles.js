//Make a variable with a data of a string and check the type of this variable.
let fullName = "Tyhiesha Julia Johnson";
//console.log(typeof fullName);
fullName = 11;
console.log(typeof fullName);
//Go ahead and create a variable with every data type you know of. 
// Double check that you covered all of them by using the typeof check.
// 1. Boolean
let data = true;
if (data) {
    console.log('Booleans rule!')
}   else {
    console.log('Boolean are lame.');
}
typeof true;

// 2. Null
let n = null;
console.log(n * 32);
typeof n;

// 3. Undefined
let a;
console.log(a +2);
//Nan = NOT A Number - Undefined
typeof a;

// 4. Number
let num = 3.6;
let ber = 6.4;
console.log(num + ber);
typeof num;

// 5. String
let name = "Ty"
console.log("Hi! My name is " + name);
typeof name;

// 6. Symbol
let sym1 = Symbol("mySymbol");
let sym2 = Symbol("mySymbol");
console.log(sym1 === sym2);
console.log (String(sym1));
typeof sym1;

// 7. Object - Array 
let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make);
typeof myCar;

// 8. Function
function greeting() {
    //the code that will be executed
    console.log("Hello, Tyhiesha");
}
//this will evoke the function
greeting();
typeof greeting;