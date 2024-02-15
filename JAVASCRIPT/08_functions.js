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
}
console.log(a,b,c);