let value:unknown ="Ali"
console.log(
    (value as string).toUpperCase()// here we assigned the type
);
let x: unknown = 'hello';
console.log((x as string).length); //ok .. compile:5

let val:unknown=3
console.log(val as number); //ok

let val1 :unknown= 4
console.log((val1 as string).length) //undefined