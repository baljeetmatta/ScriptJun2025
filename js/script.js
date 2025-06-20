// let input1=document.querySelector("#input1");
// function clickHandler()
// {
//     console.log(input1.value);

// }
// let bigImage=document.querySelector("#bigImage");
// function changeOverImage(source)
// {
  
//     bigImage.src=source;


// }


// const input1=document.querySelector("#input1");
// const button1=document.querySelector("#button1");
// /*
// button1.addEventListener("click",clickHandler);
// function clickHandler()
// {
//     console.log("Clicked");

// }
// */
// button1.addEventListener("click",function(){
//     console.log("clciked..",input1.value);


// })

const input1=document.querySelector("#input1");
const input2=document.querySelector("#input2");
const result=document.querySelector("#result");
const addButton=document.querySelector("#addButton");

addButton.addEventListener("click",function(){
    let a=parseInt( input1.value);
    let b=parseInt(input2.value);
    let c=a+b;
    result.value=c;

})
