const accountId=100;
let accountEmail="example@gmail.com";
var accountPassword="1234";
accountCity="Ludhiana";
let accountstate;


// accountId=15;        //Not allowed in case of const
accountEmail="secf.com";
accountPassword="1234456677890";
accountCity="Delhi";


console.log(accountId);

/*
Not use var because of issue in block and function scope .Only use let and const.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])