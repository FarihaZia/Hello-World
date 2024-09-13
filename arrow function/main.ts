const calculator = (digit:number , digit2: number , sign:string) => {
    if(sign=="+"){
        console.log(digit + digit2)
    }
    else if(sign == "-"){
        console.log(digit - digit2)
    }
}
calculator(5,6,"+")
calculator(6, 4 ,"-")


let name2 =() => //"Ali"
//const ans = name2 ()
{console.log("Ali")};
name2()

const isEven = (digit) => {
    if(digit % 2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
isEven(6)
isEven(103)


function add(x:number ,y:number):number{
    return x +y
}

function Greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}
console.log(
Greet(undefined, "fariha"));//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"

let Print = () => console.log("Hello TypeScript");

Print(); //Output: Hello TypeScript

const name3= ()=>{
    return "ali"
}
console.log(name3())