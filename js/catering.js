// Kay Catering catering page js

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger);

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools
var introLeft = ".intro__left-panel-js";
var introRight = ".intro__right-panel-js";
var introLeftMove = "";
var introRightMove = "";
var topicScroll = ".topic__scroll-js";
var mainImg = ".topic__main-img-js";
var secondImg = ".topic__second-img-js";
var topicDesc = ".topic__desc-js";

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {

  console.log("catering.js loaded and ready");

  gsapPrep();
  gsapDevTools();
  introTLPrep();
  
}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function gsapPrep (){

  //Breakpoints

  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log("Desktop");

    // Set movement amount for barn doors in intro

    introLeftMove = "-50vw";
    introRightMove = "50vw";

    console.log("ILM from gsapPrep = " + introLeftMove);


    // Add parallax to first topic section

    section1TLPrep();


  } else {
    console.log("Mobile");
    introLeftMove = "-100vw";
    introRightMove = "100vw";
  }

}

function gsapDevTools (){

// Set up GSAP dev tools

if (devToolsOn) {
  gsap.set(gsapDevToolsContainer, { display: "block" });
  GSDevTools.create({ container: gsapDevToolsContainer });
}

}

function introTLPrep() {
  
  // Introduction Timeline - Barn Door Open

console.log("ILM from introTLPrep = " + introLeftMove);

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: topicScroll,
      start: "top top",
      end: "50% top",
      scrub: true,
      markers: false
    }
  });

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
  
}

function section1TLPrep (){

// First Topic - Image Parallax

var section1TL = gsap.timeline({
  id: "Sectn 1",
  scrollTrigger: {
    trigger: topicScroll,
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  }
});

section1TL.to(mainImg, {
  yPercent: -25,
  ease: "none"
});

section1TL.to(
  secondImg,
  {
    yPercent: 12,
    ease: "none"
  },
  "<"
);

section1TL.to(
  topicDesc,
  {
    yPercent: 50,
    ease: "none"
  },
  "<"
);

}
