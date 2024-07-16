

let megaMenuOpener = document.getElementById("megaMenuBtn");
let megaMenu = document.getElementById("megaMenu");

megaMenu.style.display = "none";

megaMenuOpener.addEventListener("click",function(){

   
    if(megaMenu.style.display ==="block"){
        megaMenu.style.display ="none";
        console.log("vamos");
    }
    else{
        megaMenu.style.display ="block";
    }
})