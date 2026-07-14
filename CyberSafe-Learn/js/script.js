window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

alert("Lesson Opened!");

});

});

const darkButton=document.getElementById("darkMode");

darkButton.onclick=function(){

document.body.classList.toggle("dark");

}

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);


});