const nav = document.getElementById('navbar');
const bg_nav = document.getElementById('nav_div_mobile');
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
  var x = document.getElementById("nav_div_mobile");
  if (x.style.display === "none") {
    x.style.animationName = "slidein";
    setTimeout(() => {
      x.style.display = "block", 200;
      nav.style.background = "#172d67";
      bg_nav.style.background = "#172d67"
    })
  } else {
    x.style.animationName = "slideout"
    setTimeout(() => {
      x.style.display = "none", 200;
      nav.style.background = "transparent";
      bg_nav.style.background = "transparent"
    })
  }
}

