console.log("DataTypes in java");

let name="javascrpt";
let age=18;
let isloggedIn=true;
console.table([name,age,isloggedIn]);


// Types of perimitive data type in javascript
// number integer type has some range.
// bigint
// string
// boolean => true/false
// null => standalone value
// undefined 
// symbol =>uniqueness

// Non Permitive

// object
// Arrays

console.log(typeof "Alpha");
console.log(typeof age);
console.log(typeof null);                       //object
console.log(typeof undefined);                  //undefined

// Conversion of DataTypes

let score=20;

console.log(typeof score);
console.log(typeof(score));

let numbertostring=String(score);
console.log(numbertostring)
console.log(typeof numbertostring);

let myname="ram";

console.log(typeof myname);

let stringtoNumber=Number(myname);

console.log(typeof stringtoNumber);

// 20=> "20" or vice-versa

let ex="52abc";
console.log(typeof ex);

let stn=Number(ex);
console.log(stn);
console.log(typeof stn);

// "52abc"=> NaN(Not a Number)

// let isLogged=1;                //As number 1
// let isLogged=0;                //As number 0
// let isLogged=""                   //As empty string
let isLogged="Ramesh"                   //As a string
console.log(typeof isLoggedIn);

let booleanisLoggedIn=Boolean(isLogged);
console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);


// Operations

let value=3;
let negativevalue=-value;
console.log(negativevalue);

// Basic Javascript Operations
console.log(2+2);       //Addition
console.log(2-2);       //Subtraction
console.log(2*2);       //Multiplication
console.log(2**2);      //Power
console.log(2/3);       //Divide
console.log(2%3);       //Modulo


let str1="Hello";
let str2=" World";

let str3=str1+str2;
console.log(str3);

console.log("1" +2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");                   //Here the datatype written first will be carried for the other types of datatypes also i.e here 1+2+"2" 1+2 will be added and "2" will be concatenated as a String.


console.log(+true);
console.log(+"");                   //Not recommended Practices code readability is must..

let counter=50;
counter++;
++counter;
console.log(counter);

// For postfix and prefix increment and decrement operators follow the MDN official Documentation

// https://developer.mozilla.org/en-US/docs/Web/JavaScript


// Important Comparisons 

console.log("2">1);
console.log("02">1);            //javascript allows comparison of two different datatypes but typescript does not..

console.log(null>0);
console.log(null==0);
console.log(null>=0);           //Reason -> as == & <> < > >= <= work differetly. Comparisons convert null to a number treating it as 0.
                                //i.e null>=0 is true and null>0 is false

console.log(undefined>0);
console.log(undefined==0);      //In case of undefined it gives the same result i.e false
console.log(undefined>=0);

// Note->Avoid these types of Comparisons for null and undefined types..

// Strict Check->Not only checks the value but also the datatype    (===)

console.log("2"===2);

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);                //when using Symbol datatype both return unique values..

const bigNumber=54946216550885484970948n   //BigInt        
console.log(bigNumber)
console.log(typeof bigNumber)




// Some Important Interview Points

// Primitives
// There are 7 types of Primitive dattypes;
// String,Number,Boolean,null,undefined,Symbol,BigInt
// Here in case of Primitive a copy of data is given whenever these are copied i.e reference to the memory is not given(simply call by value)

// Reference Type or Non Primtive
// Here reference to memory is allocated directly
// Arrays,Objects,Functions

// What type of language javascript is?
// Dynamically-typed languages are those (like JavaScript)
// where the interpreter assigns variables a type at runtime based on the variable's value at the time.

// Decimal value comes under Number datatype.

// Example of Non Primitive datatypes

const arr=["Raj","Rohan","Shami"];

let myObj={
    name:"Rohit",
    age:25
}

const myFunction=function(){
    console.log("Hello Folks");
}

console.log(typeof arr);
console.log(typeof myObj);
console.log(typeof myFunction);


// Stack(Primitve),Heap(Non-Primitive);

// Example with Primitive datatypes
let exaa1="Rohit"
let exaa2=exaa1
exaa2="Ram";

console.log(exaa1);
console.log(exaa2);

// Example with Non-Primitive datatypes
let exa1={
    name:"Raju",
    email:"Example@gmail.com"
}

let exa2=exa1;
exa2.name="Rajat"
console.log(exa1.name);
console.log(exa2.name);