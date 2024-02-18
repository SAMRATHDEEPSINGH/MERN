// functon definition and calling

function saysomething(){
    console.log("Hello World");
}

saysomething();             //function referene with () parnthesis to call the function and run it

function add(number1,number2){
    console.log(number1+number2);
}

add();
add(4,5);
add(4,"5");
add(5,null);
add(6,1.0);
const add1=add(4,9);
console.log(add1);

function add2(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const addresult=add2(7,10);
console.log(addresult)

function exa(username="sam"){
    if(!username){
        console.log("Give username")
        return
    }
    return `${username} just logged in`;
}

console.log(exa("haa"))

function calculateCartPrice(val1,...num1){                      //use of rest operator to add multiple values to an array i.e to pass multiple values to an function without making the parameters and stroing in an array .It is similar to the spread operator but use case is different in case of functions
    return num1;
}

console.log(calculateCartPrice(200,400,500,600,80));


// Passing an object to the function
const username={
    Name:"Rahul",
    isLoggedIn:false
}
function passingObj(user){
    console.log(`${user.Name} is Logged in ${user.isLoggedIn}`);
}

passingObj(username);
// psssing the object directly as argument in function call
passingObj({
    Name:"Sohan",
    isLoggedIn:true
})

// Passing an array to function

const mynewArray=[200,400,500,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([500,600,700]))

// Local and Global Scope
const a=10;
let b=20;
var c=30;

console.log(a,b,c);

if(true){
    const a=50;
    let b=30;
    var c=56;
    var d=99;
}
// var c=55;
console.log(a,b,c);

function one(){
    const username="Raesh";

    function two(){
        const website="Facebook"
        console.log(username);
    }
    // console.log(website);                cannot be executed
    two();
}

one();


console.log(addone(50));              //Do not gives an Error
function addone(num){
    return num+1;

}

// addTwo(50);                      //Gives Error if stored using a variable
const addTwo=function(num){
    return num + 2;

}

const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username="sam";
user.welcomeMessage();
console.log(this)                   //Refereces to empty object.

function freetip(){
    let username="sam";
    console.log(this)
    console.log(this.username)
}

freetip();              //undefined because this only works in case of object here ..

// How to declare function using arrow function

const code=()=>{
    let username="Sam";
    console.log(this.username)
}

const addTwoex=(num1,num2)=>{                           //Explicit return 
    return num1+num2;
}
console.log(addTwoex(1,2));

// const addTwoex1=(num1,num2)=> num1+num2                 //Implcit return 
// const addTwoex1=(num1,num2)=> (num1+num2)                 //Implcit return with round parentheses

const addTwoex1=(num1,num2)=> ({username:"Sam"})                 //if want to return object
console.log(addTwoex1(1,2));


// Immediately Invoked Function Expression (IIFE)
// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function example2() {
    console.log(`example`);
})();

((name)=>{
    console.log(`${name} HelloWorld`)
})('Sam');

