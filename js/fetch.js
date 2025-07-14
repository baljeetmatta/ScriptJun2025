 const container=document.querySelector("#container");
/*
 var blogs=JSON.parse(xmlRequest.responseText);
           blogs.forEach(function(blog){
                addBlog(blog);

           })
                "https://jsonplaceholder.typicode.com/posts"
    */

                //double promise
   
     fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{//fetch is resolved
        //console.log(data);
       return data.json();//promise



     }).then((data)=>{//data is converted to json
        console.log(data);

     })

        function addBlog(blog)
        {
                let divMain=document.createElement("div");
                let divTitle=document.createElement("div");
                let divBody=document.createElement("div");
                let divHr=document.createElement("hr");
                divTitle.innerText=blog.title;
                 divBody.innerText=blog.body;
                 divMain.appendChild(divTitle);
                 divMain.appendChild(divBody);
                 divMain.appendChild(divHr);
                 

                 container.appendChild(divMain);





        }