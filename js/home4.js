// Kay Catering home page js

/* 
    ---------- Init Stuff ----------
*/

let version = 1.3;

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {
  console.log("home.js version rc" + version);

  constructSplide();

  // Event Handlers

  $(".next-splide").click(function () {
    $(".splide__arrow.splide__arrow--next").click();
    console.log("next clicked");
  });

  $(".prev-splide").click(function () {
    $(".splide__arrow.splide__arrow--prev").click();
    console.log("prev clicked");
  });
}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function constructSplide() {
  // Construct first slider

  new Splide("#slider1", {
    perPage: 3,
    perMove: 3,
    speed: 1500,
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    type: "loop",
    focus: "center",
    breakpoints: {
      767: {
        perPage: 1
      }
    }
  }).mount();

  // Construct testimonial slider

  new Splide("#slider2", {
    perPage: 1,
    perMove: 1,
    speed: 1200,
    // autoplay: true,
    // interval: 6000,
    // pauseOnHover: false,
    type: "loop",
    focus: "center"
  }).mount();
}
