const name="Example";
const acc=120;


console.log(name+acc+" Some text");                 //Old method

//String interpolation
console.log(`Your name is ${name} and acount number is ${acc}`);            //More readable also easymethod can also be implemented.


// Declration of String using object i.e using new keyword

const employeeName=new String('employee-no1');              //Stored in key value pairs
console.log(employeeName)
console.log(typeof employeeName)                //type is object 

console.log(employeeName[0]);
console.log(employeeName.__proto__);            //returns empty here but when u do console.log in browser then u re shown all its objects.


// Important String Methods
console.log(employeeName.length);
console.log(employeeName.toUpperCase());
console.log(employeeName.charAt(2));
console.log(employeeName.indexOf('p'));

const newString=employeeName.substring(0,4);        //4 is not included because it takes n-1 character
console.log(newString);

// const anotherString=employeeName.slice(-12,4);
// console.log(anotherString)


const newString1="  ra   ";
console.log(newString1);
console.log(newString1.trim());                     //Remove Spaces


const url="https://rahul.com/rahul%50example";

console.log(url.replace('%50','-'));

console.log(url.includes('%50'));

console.log(employeeName.split('-'))