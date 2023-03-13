const nav = document.getElementById('navbar');
window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 100) {

    nav.style.background = "#8c15e9";
    nav.style.color = "black"

  }
  else {
    nav.style.background = "transparent";
    nav.style.color = "#8c15e9"

  }
});