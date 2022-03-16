// Kay Catering catering page js

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger);

var version = 19.5
  ;

var black = "#000000";

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introLeft = ".intro__left-panel-js";  // Left intro panel
var introRight = ".intro__right-panel-js"; // Right intro panel
var introLeftMove = "";  // Amount to move left intro panel on scroll
var introRightMove = "";  // Amount to move right intro panel on scroll
var introLogo = ".intro__logo-js";
var introLogoScale = 1;

var topic1 = "#topic1-js"; // Scrolling frame
var topic1Container = "#topic1-js .topic__cntr-first-js"; // Container with topic elements
var topic1SecondImg = "#topic1-js .topic__second-img-js"; // Secondary topic image
var topic1Text = "#topic1-js .topic__desc-js";  // Topic text

var topic2 = "#topic2-js"; // Scrolling frame
var topic2Container = "#topic2-js .topic__cntr-first-js"; // Container with topic elements
var topic2SecondImg = "#topic2-js .topic__second-img-js"; // Secondary topic image
var topic2Text = "#topic2-js .topic__desc-js";  // Topic text

var topic3 = "#topic3-js"; // Scrolling frame
var topic3Container = "#topic3-js .topic__cntr-first-js"; // Container with topic elements
var topic3SecondImg = "#topic3-js .topic__second-img-js"; // Secondary topic image
var topic3Text = "#topic3-js .topic__desc-js";  // Topic text



/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {

  console.log("catering.js v" + version);

  gsapPrep();
  gsapDevTools();

}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function gsapPrep() {

  //Breakpoints

  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log("Desktop");

    // Set movement amount for barn doors in intro

    introLeftMove = "-50vw";
    introRightMove = "50vw";
    introLogoScale = 3;

    // Add parallax to first topic section

    topicTLPrep();

  } else {
    console.log("Mobile");
    introLeftMove = "-100vw";
    introRightMove = "100vw";
    introLogoScale = 1.5;
  }


  // Timelines that don't depend on breakpoints

  introTLPrep();

}

function gsapDevTools() {

  // Set up GSAP dev tools

  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }

}

function introTLPrep() {

  // Introduction Timeline - Barn Door Open

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: topic1,
      start: "top top",
      end: "50% 25%",
      scrub: true,
      markers: false
    }
  });

  introTL.to(
    introLeft,
    {
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

  introTL.from(
    topic1Container,
    {
      opacity: 0,
      ease: "none"
    },
    "<"
  );

  introTL.from(
    topic1,
    {
      backgroundColor: black,
      ease: "none"
    },
    "<"
  );

  introTL.from(
    introLogo,
    {
      scale: (introLogoScale, introLogoScale),
      ease: "none"
    },
    "<"
  );







}

function topicTLPrep() {

  // Topic 1 - Image Parallax

  var topic1TL = gsap.timeline({
    id: "Topic1",
    scrollTrigger: {
      trigger: topic1,
      start: "50% bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

  topic1TL.fromTo(
    topic1SecondImg,
    {
      yPercent: 75,
      ease: "none"
    },
    {
      yPercent: -175,
      ease: "none"
    }
  );

  topic1TL.fromTo(
    topic1Text,
    {
      yPercent: 175,
      ease: "none"
    },
    {
      yPercent: -25,
      ease: "none"
    },
    "<"
  );

  // Topic 2 - Image Parallax

  var topic2TL = gsap.timeline({
    id: "Topic2",
    scrollTrigger: {
      trigger: topic2,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

  topic2TL.fromTo(
    topic2SecondImg,
    {
      yPercent: 75,
      ease: "none"
    },
    {
      yPercent: -175,
      ease: "none"
    }
  );

  topic2TL.fromTo(
    topic2Text,
    {
      yPercent: 175,
      ease: "none"
    },
    {
      yPercent: -25,
      ease: "none"
    },
    "<"
  );

  // Topic 3 - Image Parallax

  var topic3TL = gsap.timeline({
    id: "Topic3",
    scrollTrigger: {
      trigger: topic3,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

  topic3TL.fromTo(
    topic3SecondImg,
    {
      yPercent: 75,
      ease: "none"
    },
    {
      yPercent: -175,
      ease: "none"
    }
  );

  topic3TL.fromTo(
    topic3Text,
    {
      yPercent: 175,
      ease: "none"
    },
    {
      yPercent: -25,
      ease: "none"
    },
    "<"
  );


}

