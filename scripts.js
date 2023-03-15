const nav = document.getElementById('navbar');
const bg_nav = document.getElementById('nav_div');
window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 100) {

    nav.style.background = "#172d67";
    bg_nav.style.display = "none";
    bg_nav.style.background = "#172d67"
    nav.style.color = "#22ddd2";


  }
  else {
    nav.style.background = "transparent";
    bg_nav.style.background = "transparent"
    nav.style.textDecoration = "none";
    nav.style.color = "#22ddd2";

  }
});



function burger() {
  var x = document.getElementById("nav_div");
  if (x.style.animationName === "slidein") {
    x.style.animationName = "slideout";

   

  } else {
    x.style.display = "block";
    x.style.animationName = "slidein"
  }
}


function codingCourse() {
  console.log("freeCodeCamp");
}