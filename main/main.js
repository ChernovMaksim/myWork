$(document).ready(function() {
  $(".menu_icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("blue");
  } else {
    $("nav").removeClass("blue");
  }
});

function show(state) {
  document.getElementById("window").style.display = state;
  document.getElementsByClassName("form-bg").style.display = state;
}
function menu(state) {
  document.getElementById("menu").style.display = state;
}
