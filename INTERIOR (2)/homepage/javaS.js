const img = document.querySelectorAll(".img-box");
const win = document.querySelector(".window");
const win2 = document.querySelector(".window2");
const win3 = document.querySelector(".window3");
const win4 = document.querySelector(".window4");
const win5 = document.querySelector(".window5");
const win6 = document.querySelector(".window6");
const win7 = document.querySelector(".window7");
const win8 = document.querySelector(".window8");
const fullImg = document.querySelector(".full-img");
const abc=document.querySelector("data-value");
var wind = ["window", "window2", "window3","window4","window5","window6","window7","window8"];
var slide=["mySlides","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8"];
var slideIndex = 1;
console.log(abc);
img.forEach((imgs) => {
  imgs.addEventListener("click", () => {
    const val = imgs.getAttribute("data-value");
    console.log(val);
    if(val=="1"){
    win.classList.add("open");
showSlides(slideIndex,0);
    }
    else {
      if(val=="2"){
      win2.classList.add("open");
      showSlides(slideIndex,1);
      }
      else {
        if(val=="3"){
        win3.classList.add("open");
        showSlides(slideIndex,2);
        }
      else {
        if(val=="4"){
        win4.classList.add("open");
        showSlides(slideIndex,3);
        }
        else {
          if(val=="5"){
          win5.classList.add("open");
          showSlides(slideIndex,4);
          }
          else {
            if(val=="6"){
            win6.classList.add("open");
            showSlides(slideIndex,5);
            }
            else {
              if(val=="7"){
              win7.classList.add("open");
              showSlides(slideIndex,6);
              }
              else {
                if(val=="8"){
                win8.classList.add("open");
                showSlides(slideIndex,7);
                }
              }
            }
          }
        }
      }
    }
  }
  });
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[0])) {
    win.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[1])) {
    win2.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[2])) {
    win3.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[3])) {
    win4.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[4])) {
    win5.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[5])) {
    win6.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[6])) {
    win7.classList.remove("open");
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains(wind[7])) {
    win8.classList.remove("open");
  }
});
function plusSlides(n,i) {
  showSlides(slideIndex += n,i);
}

function showSlides(n,cnt) {
  var i;
  var slides = document.getElementsByClassName(slide[cnt]);
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(i);
  }
  slides[slideIndex-1].style.display = "block";
  console.log("abc"+slideIndex-1);
}
