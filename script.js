const inputTextEl =document.getElementById("inputText");
const btnEl = document.getElementById("btn");
const imgEl = document.getElementById("image");
const insertEl = document.getElementById("qr-box");


btnEl.addEventListener("click", () =>{
    
    const text = inputTextEl.value; 
    btnEl.innerText= "Generating...";
    if(text==""){
     insertEl.innerText="Please Enter Some Text";
     insertEl.style.color="red";
     btnEl.innerText= "Generate QR Code";
     return ; 
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    
    insertEl.innerHTML =`<img id="image" src="${url}" alt=""> `
    insertEl.classList.add("qr"); 
    btnEl.innerText= "Generate QR Code";
     
   console.log(url); 
})


