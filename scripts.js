const nav = document.getElementById('navbar');
window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 100) {

    nav.style.background = "#172d67";
    nav.style.color = "#22ddd2";
  

  }
  else {
    nav.style.background = "transparent";
    nav.style.textDecoration = "none";
    nav.style.color = "#22ddd2";

  }
});

function burger() {
  var x = document.getElementById("nav_div");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}