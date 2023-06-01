let cerrar = document.getElementById("btn-close");
let abrir = document.getElementById("btn-open");
let naav = document.getElementById("naav");


cerrar.addEventListener("click", ()=>{

    naav.style.right = "-300px";
    naav.style.transitionProperty = "right";
    naav.style.transitionDuration = "2s";
    naav.style.transitionTimingFunction = "easy";


});



abrir.addEventListener("click", ()=>{

    naav.style.right  ="0px";
    naav.style.transitionProperty = "right";
    naav.style.transitionDuration = "2s";
    naav.style.transitionTimingFunction = "easy";

});



