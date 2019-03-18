// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
let left = 0;
var timer;

function autoSlider() {
  timer = setTimeout(function() {
    let strip = document.getElementById("strip");
    left = left - 150;

    if (left < -450) {
      left = 0;
      clearTimeout(timer);
    }
    strip.style.left = left + "px";
    autoSlider();
  }, 2000);
}
