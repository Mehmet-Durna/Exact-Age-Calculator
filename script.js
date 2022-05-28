const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown")
const loading = document.getElementById("loading");

window.addEventListener("load",()=>{
   loading.style.display = "block";
   setTimeout(()=>{
       loading.style.display = "none";
       countdown.style.display = "flex";

   },1000)
});

let h2Elements = countdown.querySelectorAll("h2");

h2Elements.forEach(element=>{
    element.innerHTML = "00";
})