const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async Task is Complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved")
})


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Samrath",email:"sam@example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)

})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Sam",password:"1234"})
        }else{
            reject('ERROR Something went Wrong')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The Promise is resolved or rejected"))


const promise5=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"JS",password:"1234"})
        }else{
            reject('ERROR JS')
        }
    },1000)
})

async function consumePromise5(){
    try{
   const response=await promise5;
   console.log(response)
}catch(error){
    console.log(error)
}
}

consumePromise5()


// async function getAllusers(){
//     try{
//    const response= await fetch('https://randomuser.me/api/')
//    const data= await response.json()
//    console.log(data)
//     }catch(error){
//         console.log("ERROR !",error)
//     }
// }

// getAllusers()

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()

}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})

