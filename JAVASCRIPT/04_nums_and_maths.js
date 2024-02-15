const score=400;

const balance=new Number(100);
console.log(balance);
console.log(typeof balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.555;
console.log(otherNumber.toPrecision(2))             //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds=1000000;
console.log(hundreds.toLocaleString());         //By default this returns the value according to the US standard of number
console.log(hundreds.toLocaleString('en-IN'));         //Specify the type u want to get return for example indian standard number system..

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);



// Maths Library in Javascript
console.log(Math);
console.log(Math.abs(-5));             //Converts Negative Values into positive values but not positive to negative..
console.log(Math.round(4.6));     
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.pow(2,3));
console.log(Math.min(4,50,80,41));
console.log(Math.max(4,50,80,41));
console.log(Math.random());                 //Always gives a value between 0 and 1  (Returns a pseudorandom number between 0 and 1)
console.log((Math.random()*10) +1);

const min=30;
const max=45;

console.log(Math.floor(Math.random() * (max-min +1))+min);

