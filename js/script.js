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

//EVENTS
/*
const input1=document.querySelector("#input1");
const input2=document.querySelector("#input2");
const result=document.querySelector("#result");
const addButton=document.querySelector("#addButton");
const subButton=document.querySelector("#subButton");
subButton.addEventListener("click",operate);
addButton.addEventListener("click",operate);
function operate(event)//addition arguments to event
{ 
    console.log(event.target);
    let a=parseInt( input1.value);
    let b=parseInt(input2.value);
    //console.log(event.target.getAttribute("id")=="addButton");
    if(event.target.getAttribute("id")=="addButton")
    {
        let c=a+b;
        result.value=c;

    }
    if(event.target.getAttribute("id")=="subButton")
    {
        let c=a-b;
        result.value=c;

    }
    


}*/
/*
subButton.addEventListener("click",function(){
     let a=parseInt( input1.value);
    let b=parseInt(input2.value);
    let c=a-b;
    result.value=c;
})
addButton.addEventListener("click",function(){
    let a=parseInt( input1.value);
    let b=parseInt(input2.value);
    let c=a+b;
    result.value=c;

})
    */
/*
let button1=document.querySelector("#button1");
let button2=document.querySelector("#button2");
let button3=document.querySelector("#button3");
let button4=document.querySelector("#button4");
let button5=document.querySelector("#button5");
let button6=document.querySelector("#button6");
button1.addEventListener("click",buttonHandler);
button2.addEventListener("click",buttonHandler);
button3.addEventListener("click",buttonHandler);
button4.addEventListener("click",buttonHandler);
button5.addEventListener("click",buttonHandler);
button6.addEventListener("click",buttonHandler);


const displayBox=document.querySelector("#displayBox");

function buttonHandler(event)
{
    // let id=event.target.getAttribute("id");
    // if(id=="button1")
    //     displayBox.value=displayBox.value+"1";
    // if(id=="button2")
    //     displayBox.value=displayBox.value+"2";
    
    displayBox.value+=event.target.innerText;


}

*/


/*
const displayBox=document.querySelector("#displayBox");
const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(item){
    item.addEventListener("click",buttonHandler);

})
function buttonHandler(evt){
    displayBox.value+=evt.target.innerText;

}
//console.log(buttons);

*/
const btns=document.querySelector(".btns");
let operand1=0;
let operator="";
let isClear=false;
const equal=document.querySelector("#equal");
equal.addEventListener("click",process);
function process(){
    if(operator=="+")
    {
        let result=operand1+parseInt(displayBox.value);
        displayBox.value=result;
        
    }
}
function createButtons()
{
    for(i=0;i<=9;i++)
    {
    const btn=  document.createElement("button");
    btn.innerText=i;
    btn.addEventListener("click",buttonHandler);
    btns.appendChild(btn);


    }
}
function createOperations()
{
    let arr=["+","-","*","/"]
    arr.forEach(function(item){
        const btn=document.createElement("button");
        btn.innerText=item;
        btn.addEventListener("click",operationHandler);
        btns.appendChild(btn);

    })
}
function operationHandler(evt){
    operand1=parseInt(displayBox.value);
    operator=evt.target.innerText;
    isClear=true;



}
function buttonHandler(evt)
{
    if(displayBox.value=="0" || isClear==true)
    {
        displayBox.value="";
        isClear=false;
    }


     displayBox.value+=evt.target.innerText;
}
createButtons();
createOperations();


