 const container=document.querySelector("#container");

        //1.
        let xmlRequest = new XMLHttpRequest();
        //GET,POST
        //2.
        xmlRequest.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        //false, sync
        //xmlRequest.onload
        /*xmlRequest.addEventListener("load",function(){

        });*/
        //3.
        xmlRequest.onload = function () {
          //  if(xmlRequest.status==200)
           // console.log('response',xmlRequest.responseText);
           var blogs=JSON.parse(xmlRequest.responseText);
           blogs.forEach(function(blog){
                addBlog(blog);

           })


        }
        /*
            0 Unsent
            1 Opened
            2. Headers Recieved
            3. Loading
            4. Done

        */
        xmlRequest.onreadystatechange=function()
        {
           // console.log(xmlRequest.readyState);
         // console.log(xmlRequest.status)
       //     if(xmlRequest.readyState==4 && xmlRequest.status==200)
         //   console.log('response ok',xmlRequest.responseText);

        }
        //4.
        xmlRequest.send();
        //halt->false, 
      ///  console.log('err',xmlRequest.responseText);

        //API- APPLICATOIN PROGRAM INTERFACE ->SET OF FUNCTIONS
        //MS-PAINT ->SET OF FUNCTIONS->PROGRAM
        //XYZ PROGRAMMING -API
        //JAVA ->function->classes ->API->Classes
        //Web ->functions->URL->endpoint

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