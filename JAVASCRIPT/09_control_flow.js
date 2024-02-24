// const balence=1000;

// if(balence>500) console.log("test"),console.log("hello")             not recommended

// if (balence<500) {
//     console.log("less than 500")
// }else if(balence<900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

// let userLoggedIn=true;
// let debitcard=true;

// if(userLoggedIn && debitcard){
//     console.log(true)
//     userLoggedIn=false
//     // debitcard=false
// }

// if(userLoggedIn || debitcard){
//     console.log(true)
// }


// Switch
// const month=3
// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("Mar")
//         // break;
//     case 4:
//         console.log("Apr")
//         break;
//                                                 //if there is no break statement between any of the case then all other below cases will be executed but the default case will not be executed
//     default:
//         break;
// }

// const userEmail=[];

// if (userEmail) {
//     console.log("Got the Email")
// }else{
//     console.log("Don't have user Email")
// }

// Falsy Values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy Values

// "0",'false'," ",[],{},function(){}


// if (userEmail.length===0) {
//     console.log("Array is empty")
// }

// const emptyObj={}
// // console.log(Object.keys(emptyObj))
// if (Object.keys(emptyObj).length===0) {
//     console.log("Obejct is empty");
// }



// Nullish Coalescing Operator (??):null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=undefined ?? 15 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true: false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")