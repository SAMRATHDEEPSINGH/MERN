// Object can be declared using two ways- i.e using literals and second is using constructor.
// Singleton 
// When made with literals then it is not singleton but if it made using constructor then it is singleton (Object.create)

// Object literals

const mysy=Symbol("Key");


const user={
    name:"Rahul",
    age:22,
    location:"Ludhiana",
    [mysy]:"Exy",
    email:"example@gmail.com",
    isLoggedIn:false,
    "ssvaloue":"YourName",
    lastLoginDays:["Thursday","Saturday"]
}

console.log(user.email)
console.log(user["email"])
console.log(user["ssvaloue"])
// console.log(typeof user.mysy);
console.log(user[mysy])   
// Refer              
// https://javascript.info/symbol

user.isLoggedIn=true;
console.log(user.isLoggedIn);
// If u want to freeze your object information then do the following way
// Object.freeze(user);
// user.isLoggedIn=false;                      //will not be implemented although no error will be given
// console.log(user)

user.get=function(){
    console.log("HelloWorld");
}
user.see=function(){
    console.log(`Are u logged in ? ${this.isLoggedIn}`);
}

console.log(user.get());
console.log(user.see());


// const yourappname=new Object();      Singleton method for making Object

// console.log(yourappname);

const yourappname={};

yourappname.id="101";
yourappname.name="Ramesh";
yourappname.isLoggedIn=false;

console.log(yourappname);

const multinestobject={
    innerobj:{
        deepobj:{
            areuloggedin:"Yes"
        }
    }
}

console.log(multinestobject.innerobj.deepobj.areuloggedin)

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3={obj1,obj2};
// console.log(obj3)

// const obj3=Object.assign({},obj1,obj2);                                //target and rest all other parameters are source here also an empty array can be added to ensure exact output.
// console.log(obj3);
// console.log(obj1);
// console.log(obj1===obj3);


// use spread operator to merge

const obj3={...obj1,...obj2};

console.log(obj3);

const example1=[
    {
        yourname:"example",
        areuloggedin:"false"
    }
]

console.log(example1[0]);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("isLoggedIn"));
console.log(user.hasOwnProperty("isLogged"));

const course={
    courseInstructor:"Inst1"
}

const {courseInstructor:Ins}=course;

console.log(Ins);

// API
// JSON(javascript object notation)
// {
//     "name": "Example",
//     "class": "Raj"
// }