const nav = document.getElementById('navbar');
window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 100) {

    nav.style.background = "#172d67";
    nav.style.color = "#22ddd2"

  }
  else {
    nav.style.background = "transparent";
    nav.style.color = "#8c15e9"

  }
});