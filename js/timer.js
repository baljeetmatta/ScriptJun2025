const counter=document.querySelector("#counter");
let count=0;
let hrs=0;
let minute=0;
let seconds=0;
let id;
const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
startBtn.addEventListener("click",function(){

    id=setInterval(updateCounter,400);
})

stopBtn.addEventListener("click",function(){
    clearInterval(id);
})
function updateCounter(){
    //count++;
    //counter.innerText=count;
seconds++;
if(seconds>=20)
{
    minute++;
    seconds=0;
}
counter.innerText=hrs+":"+minute+":"+seconds;

}
/*

FORM VALIDATION
*/
const name=document.querySelector("#name");
const age=document.querySelector("#age");
const submitButton=document.querySelector("#submitButton");
const form1=document.querySelector("#form1");
const errorLabel=document.querySelector("#errorLabel");

submitButton.addEventListener("click",function(){

    if(name.value=="")
    {
        errorLabel.innerHTML="Must Specify the name";
        
       // alert("Must specify the name");
        return;
    }
   let namedata= name.value;
   for(i=0;i<namedata.length;i++)
   {
    if(!( (namedata.charAt(i)>='a' && namedata.charAt(i)<='z') || (namedata.charAt(i)>='A' && namedata.charAt(i)<='Z') || namedata.charAt(i)==' '))
    {
          errorLabel.innerHTML="name must have valid characcters";
          return;
    }
   }
    if(age.value=="")

        {
             errorLabel.innerHTML="Must Specify the age";
        
       // alert("Must specify the name");
        return;
        }
    form1.submit();




})
