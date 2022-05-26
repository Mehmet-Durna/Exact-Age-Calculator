const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const loading = document.getElementById("loading");

window.addEventListener("load",()=>{
   loading.style.display = "block";
   setTimeout(()=>{
       loading.style.display = "none";
   },1000)
});
