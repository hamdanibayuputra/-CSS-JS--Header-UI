window.addEventListener("load", function(){
   // header
   let links = document.querySelectorAll(".links li");
   links.forEach(function(e, i){
      setTimeout(function(){
         e.classList.add("muncul-li");
      }, 200 * i);
   })
   // -----

   // jumbo kiri 
   let h1 = document.querySelector(".jumbo .col1 h1");
   let p = document.querySelector(".jumbo .col1 p");
   let myContact = document.querySelector(".jumbo .col1 .myContact");
   let mySosialMedia = document.querySelector(".jumbo .col1 .mySosialMedia");

   setTimeout(function(){
      h1.classList.add("muncul-h1");
   }, 1400);
   setTimeout(function(){
      p.classList.add("muncul-p");
   }, 1900);
   setTimeout(function(){
      myContact.classList.add("muncul-myContact");
   }, 2400);
   setTimeout(function(){
      mySosialMedia.classList.add("muncul-mySosialMedia");
   }, 2900);


   // jumbo kanan 
   let img = document.querySelector(".col2 img");
   setTimeout(function(){
      img.classList.add("muncul-gambar");
   }, 3200)
});

// header - "mobile"
let menubar = document.querySelector("header .menubar");
let link = document.querySelector("header .links");

menubar.addEventListener("click", function(){
   link.classList.toggle("active");
});
// -----