// Arrays


// Shallow copy
let myArr=[0,1,2,3,4,5];
let arr=myArr;
arr[0]=55;
console.log(myArr)


// Deep copy
let myar1=[25,30,35,40];
let myar2=new Array(myArr);
console.log(myar2);
myar2[2]=555;
console.log(myar1);
console.log(myar2)

let example=[10,20,30,40,50];
const example1=["Rahul","Rohit",4550]
console.log(example1);
const example2=new Array(1,2,3);
console.log(example2)

// Array Methods
example.push(60);
example.push(70);
example.pop();

example.unshift(50);
console.log(example);
example.shift();
console.log(example);

console.log(example.includes(50));
console.log(example.indexOf(40));


const newarr=example.join();

console.log(newarr);
console.log(typeof newarr);

// slice,splice

console.log("A",example);
const mynewarr1=example.slice(1,3)              
console.log(example);
console.log(mynewarr1);
const mynewarr2=example.splice(1,3);
console.log(mynewarr2);
console.log(example);


const hero=["Spiderman","Shinchan"];
const hero2=["Batman","Avengers"];
console.log(hero);
console.log(hero2);
const arr33=[hero,hero2];
console.log("H")
console.log(arr33)
const herohero2=hero.concat(hero2);
console.log(herohero2);

// Spread Operator

const all_new_heros=[...hero,...hero2];         //Can have more values i.e more arrays to concatenate 
console.log(all_new_heros);

const example3=[1,2,3,[4,5,6],7,8,9,[10,[11]]];
const example4=example3.flat(1);
console.log(example4);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));

console.log(Array.from({name:"Ram"}));

let score=100;
let score1=200;
let score2=300;

console.log(Array.of(score,score2,score1));

