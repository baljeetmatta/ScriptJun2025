// let xmlRequest=new XMLHttpRequest();
// xmlRequest.open("Get","https://reqres.in/api/users?page=2",true);
// xmlRequest.onload=function(){
//     //console.log(xmlRequest.responseText);
//     let result=JSON.parse(xmlRequest.responseText);
//     console.log(result.data);

// }
// xmlRequest.setRequestHeader("x-api-key","reqres-free-v1");

// xmlRequest.send();

let xmlRequest=new XMLHttpRequest();
xmlRequest.open("POST","https://reqres.in/api/users",true);
xmlRequest.onload=function(){
    //console.log(xmlRequest.responseText);
    let result=JSON.parse(xmlRequest.responseText);
    //console.log(result.data);
    console.log(result)

}
xmlRequest.setRequestHeader("Content-type","application/json");

xmlRequest.setRequestHeader("x-api-key","reqres-free-v1");
let obj={"name":"ABC","job":"Trainer"};
xmlRequest.send(JSON.stringify(obj));

//xmlRequest.send("varialbe=value&variable=value");
