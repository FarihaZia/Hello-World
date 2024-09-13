var calculator = function (digit, digit2, sign) {
    if (sign == "+") {
        console.log(digit + digit2);
    }
    else if (sign == "-") {
        console.log(digit - digit2);
    }
};
calculator(5, 6, "+");
calculator(6, 4, "-");
var name2 = function () { console.log("Ali"); };
name2();
var isEven = function (digit) {
    if (digit % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
};
isEven(6);
isEven(103);
function add(x, y) {
    return x + y;
}
function Greet(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(Greet(undefined, "fariha")); //returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
var Print = function () { return console.log("Hello TypeScript"); };
Print(); //Output: Hello TypeScript
var name3 = function () {
    return "ali";
};
console.log(name3());
