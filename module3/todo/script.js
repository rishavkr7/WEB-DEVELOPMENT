let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keydown',function(e){
    console.log(e);
    let key = e.key;
    console.log(key);

     if(key=='Enter'){
         let value=inputTag.value;
         //console.log(value);

     if(value.length == 0){
         return;
     }

         inputTag.value="";                        //UI INPUT UPDATE

    let liTag=document.createElement("li");
    
    // <i class="fa fa-trash"></i>
    //liTag.innerText=value;                            //innerText  ------>  write text

    liTag.innerHTML= `   <div> ${value} </div>         
                         <div class="delete"> <i class="fa fa-trash"></i></div>`

  
    handleRemoval(liTag);
    ulTag.appendChild(liTag);
     }
})

function handleRemoval(liTag){
    let deletebtn = liTag.querySelector(".delete");
    deletebtn.addEventListener('click',function(){
        liTag.remove();
    })
}
