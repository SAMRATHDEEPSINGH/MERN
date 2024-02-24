// For loops
// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element==5) {
//         console.log("5 occured")
//     }
//     console.log(element)
    
// }


// for (let i = 0; i <= 20; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} => ${i*j}`)
//     }    
//     console.log()
// }

// const myarray=["Rohan","Sahil","Ramesh"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

// for (let i = 0; i < 10; i++) {
//     const element=i;
//     if(element==5){
//         break;
//     }
//     console.log(element)
    
// }


// for (let i = 0; i < 10; i++) {
//     const element=i;
//     if(element==5){
//         continue;
//     }
//     console.log(element)
    
// }


// // While loop
// let index=0
// while (index<=10) {
//     console.log(`Value of index is ${index}`)
//     index=index+2;
// }

// let myarray=["flash","batman","superman"]
// let arr=0;
// while(arr<myarray.length){
//     console.log(`Value is ${myarray[arr]}`)
//     arr++;
// }

// // do while loop
// let score=11;
// do{
//     console.log(`Score is ${score}`)
//     score++;
// }while (score<=10);

// for of loop

// const arr=[1,2,3,4,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings="Hello world";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)

// }

// const map=new Map();                    //Take unique value i.e no similar data can be inserted again and the order remains same as it was when inserted which is not in the case of objects

// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// // map.set('IN',"India")
// console.log(map)

// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`)
// }

// const myObj={
//     Game1:'NFS',
//     Game2:'Spiderman'

// }
// for (const [key,value] of myObj) {
//     console.log(`${key} :- ${value}`)
// }

// for (const key in myObj) {
//    console.log(`${key} for ${myObj[key]}`)
// }

// const programming=["js","rb","py","java","cpp"];

// for (const key in programming) {
//     console.log(`${key} for ${programming[key]}`)
// }

// for (const key in map) {
//   console.log(`${key}`)
// }


// for each loop

// const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach(  (val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe);


// coding.forEach( (item,index,arr)=>{
//     // console.log(`${item},${index},${arr}`)
//     console.log(item,index,arr)
// })

// const myCoding=[
//     {
//         languageName:"Javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"C++",
//         languageFileName:"cpp"
//     },
//     {
//         languageName:"Java",
//         languageFileName:"java"
//     }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.languageName)
// })

// const coding=["js","ruby","java","python","cpp"];


// const values=coding.forEach( (item) => {
//     // console.log(item)
//     return item
// });

// console.log(values)

// Filter
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num > 4);
// const newNums=myNums.filter( (num)=>{
//     return num > 4
// });
// console.log(newNums);

// const newNums=[];

// myNums.forEach( (num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


//   let userBooks=books.filter( (item)=> item.genre==='Non-Fiction');
//   userBooks=books.filter( (item)=>{return item.edition>=1995 && item.genre==='History'})
//   console.log(userBooks)


// Map

// const myNumbers=[1,2,3,4,5,6,7,8,9,10];

// // const newNum=myNumbers.map( (num)=>num+10);
// const newNum=myNumbers.map( (num)=>{return num+10});

// console.log(newNum)

// method chaining

// const anotherNumbers=[1,2,3,4,5,6,7,8,9,10];

// const neew=anotherNumbers.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40);

// console.log(neew);


// Reduce
const myNums=[1,2,3]
// const myTotal=myNums.reduce( function(acc,currval){
//     console.log(`${acc},${currval}`)
//     return acc+currval
// },0);

// const myTotal=myNums.reduce( (acc,currval)=>acc+currval,0)

// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:5999
    },
    {
        itemName:"Python course",
        price:7000
    },
    {
        itemName:"DataScience course",
        price:13000
    }
];

const myTotal=shoppingCart.reduce( (acc,item)=>acc+item.price,0);

console.log(myTotal)
