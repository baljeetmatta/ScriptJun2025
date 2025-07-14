/*

1.Pending
2.fulfilled resolved-done
3.Rejected rejected-not done

*/
//Check Even
let number=4;

let prom=new Promise(function(resolve,reject){
setTimeout( function(){
    if(number%2===0)
        resolve({x:number,message:"is a even"});
    else    
        reject("abc");
},4000);
})

console.log(prom);
prom.then(function(data){ //resolved
    console.log("Even...",data.x, data.message)
}).catch((x)=>{ //reject

    console.log("Not even..",x)

}).finally(()=>{
    
})
//callback

// function test(){

// }
// let data=test;
// let fun=function(){
//     return 10;

// }
// let fun1=()=> 10;
// console.log(fun1())
Promise.allSettled([
    Promise.resolve("Task 1 resolved"),
    Promise.reject("Task 2 reject"),
    Promise.resolve("Task 3  Resolved")
]).then((results)=>{
    console.log(results);
})
Promise.all([
    Promise.resolve("Task 1 resolved"),
    Promise.reject("Task 2 reject"),
    Promise.resolve("Task 3  Resolved")
]).then((results)=>{
    console.log(results);
})

