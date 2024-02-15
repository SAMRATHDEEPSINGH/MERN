// Temporal can be tested to use date and time but do not use it in production ..

// Date has been a long-standing pain point in ECMAScript. This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), that brings a modern date/time API to the ECMAScript language.


let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2024,0,25);
// let myCreatedDate=new Date(2024,0,25,5,6,45);
// let myCreatedDate=new Date("2024-01-14");
let myCreatedDate=new Date("01-14-2024");
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now();

console.log(myTimeStamp);                   //Tells the time in milliseconds from 1970s till now
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate=new Date();
console.log(newdate)
console.log(newdate.getMonth());                    //Output is 0 because january is given as index value 0
console.log(myDate.getDay());                       //0 Output as Sunday is at index 0 value

console.log(newdate.toLocaleString('default',{
    weekday:"long",
    year:"2-digit"
}));
