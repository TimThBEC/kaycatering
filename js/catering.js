// Kay Catering catering page js

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger);

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools
var introLeft = ".intro__left-panel-js";
var introRight = ".intro__right-panel-js";
var topicScroll = ".topic__scroll-js";
var mainImg = ".topic__main-img-js";
var secondImg = ".topic__second-img-js";
var topicDesc = ".topic__desc-js";

var introTL = gsap.timeline({
  id: "intro",
  scrollTrigger: {
    trigger: topicScroll,
    start: "top top",
    end: "50% top",
    scrub: true,
    markers: false
  }
}); // Page intro timeline

var firstSection = gsap.timeline({
  id: "Sectn 1",
  scrollTrigger: {
    trigger: topicScroll,
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  }
}); // First Section Parallax timeline

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {
  console.log("catering.js loaded and ready");
  gsapTLs();

  // GSAP Dev Tools

  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function gsapPrep (){

  //Breakpoints

  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log("Desktop");
    var introLeftMove = "-50vw";
    var introRightMove = "50vw";
  } else {
    console.log("Mobile");
    introLeftMove = "-100vw";
    introRightMove = "100vw";
  }

}

function gsapTLs() {
  

  // Introduction Timeline - Barn Door Open

  introTL.to(introLeft, {
    x: introLeftMove,
    ease: "none"
  });

  introTL.to(
    introRight,
    {
      x: introRightMove,
      ease: "none"
    },
    "<"
  );

  // First Topic - Image Parallax

  firstSection.to(mainImg, {
    yPercent: -25,
    ease: "none"
  });

  firstSection.to(
    secondImg,
    {
      yPercent: 12,
      ease: "none"
    },
    "<"
  );

  firstSection.to(
    topicDesc,
    {
      yPercent: 50,
      ease: "none"
    },
    "<"
  );
}
