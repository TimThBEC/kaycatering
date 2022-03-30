// Kay Catering catering page js - version 3

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger);

var version = 1.7;

var black = "#000000";

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

// Connecting vars

var introDiv = "#intro-js";
var introLeft = ".intro__left-panel-js"; // Left intro panel
var introRight = ".intro__right-panel-js"; // Right intro panel
var introLogo = ".intro__logo-js";

var topicOneWrap = "#topic1__wrap-js";

//var topic1 = "#topic1-js"; // Scrolling frame
var topic1Title = "#t1__title-js";
var topic1MainImg = "#t1__main-img-js";
var topic1Img2 = "#t1__img2-js";
var topic1Img3 = "#t1__img3-js";
var topic1Desc = "#t1__desc-js";
var topic1CTA = "#t1__cta-js";
var topic1Other = "#t1__img2-js, #t1__img3-js, #t1__desc-js, #t1__cta-js";

var topicImg2 = ".topic__img-wrap2-js";
var topicImg3 = ".topic__img-wrap3-js";
var topicDesc = ".topic__desc-js";
var topicTitle = ".topic__title-js";

/* For Deletion? 

var topic1Container = "#topic1-js .topic__cntr-first-js"; // Container with topic elements
var topic1SecondImg = "#topic1-js .topic__second-img-js"; // Secondary topic image
var topic1Text = "#topic1-js .topic__desc-js"; // Topic text

var topic2 = "#topic2-js"; // Scrolling frame
var topic2Container = "#topic2-js .topic__cntr-first-js"; // Container with topic elements
var topic2SecondImg = "#topic2-js .topic__second-img-js"; // Secondary topic image
var topic2Text = "#topic2-js .topic__desc-js"; // Topic text

var topic3 = "#topic3-js"; // Scrolling frame
var topic3Container = "#topic3-js .topic__cntr-first-js"; // Container with topic elements
var topic3SecondImg = "#topic3-js .topic__second-img-js"; // Secondary topic image
var topic3Text = "#topic3-js .topic__desc-js"; // Topic text

*/

// Breakpoint vars

var desktop = "(min-width: 992px)";
var nonDesktop = "(max-width: 991px)";
var tablet = "(min-width: 768px) and (max-width: 991px)";
var mobileLandscape = "(min-width: 479px) and (max-width: 767px)";
var mobilePortrait = "(max-width: 478px)";

var introLeftMove = ""; // Amount to move left intro panel on scroll
var introRightMove = ""; // Amount to move right intro panel on scroll

var introLogoScale = 1;

var mainImgWidth = 0;
var mainImgHeight = 0;
var mainImgMove = 0;

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {
  console.log("catering.js v" + version);

  breakpoints();
  introTL();
  imgParallax();
  gsapDevTools();
  //topicTLPrep();
}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function breakpoints() {
  // Desktop values

  introLeftMove = "-50vw";
  introRightMove = "50vw";
  introLogoScale = 3;

  mainImgWidth = "60em";
  mainImgHeight = "33.75em";

  // Values for all non-desktop devices
  if (window.matchMedia(nonDesktop).matches) {
    console.log("Non-Desktop");

    introLeftMove = "-100vw";
    introRightMove = "100vw";
    introLogoScale = 1.5;
  }

  if (window.matchMedia(tablet).matches) {
    console.log("Tablet");
    mainImgWidth = "40em";
    mainImgHeight = "22.5em";
  }

  if (window.matchMedia(mobileLandscape).matches) {
    console.log("Mobile Landscape");
    mainImgWidth = "30em";
    mainImgHeight = "16.875em";
  }

  if (window.matchMedia(mobilePortrait).matches) {
    console.log("Mobile Portrait");
    mainImgWidth = "25em";
    mainImgHeight = "14.0625em";
    mainImgMove = -100;
  }
}

function introTL() {
  // Introduction Timeline - Barn Door Open

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: topicOneWrap,
      start: "top top",
      end: "90% bottom",
      scrub: 2,
      markers: true
    }
  });

  introTL
    .to(introLeft, { x: introLeftMove, ease: "none" })
    .to(introRight, { x: introRightMove, ease: "none" }, "<")
    .from(introLogo, { scale: (introLogoScale, introLogoScale) }, "<")
    .to(topic1MainImg, { width: mainImgWidth, height: mainImgHeight }, ">+0.5")
    .to(topic1MainImg, { yPercent: mainImgMove }, "<")
    .from(topic1Title, { scale: (3, 3), opacity: 0 }, "<+0.25")
    .from(topic1Other, { scale: (0, 0), opacity: 0 }, "<")
    .set(introDiv, { pointerEvents: "none" }, "<");
}

function imgParallax() {
  // Image 2s

  var allImg2 = gsap.utils.toArray(topicImg2);
  var img2TL = [];

  allImg2.forEach((img, imgNum) => {
    // Add var for image timeline array here

    img2TL[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    img2TL[imgNum].fromTo(img, { yPercent: 75 }, { yPercent: -25 });
  }); // end forEach

  // Image 3s

  var allImg3 = gsap.utils.toArray(topicImg3);
  var img3TL = [];

  allImg3.forEach((img, imgNum) => {
    // Add var for image timeline array here

    img3TL[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    img3TL[imgNum].fromTo(img, { yPercent: 125 }, { yPercent: -75 });
  }); // end forEach

  // Image descriptions

  var allDesc = gsap.utils.toArray(topicDesc);
  var descTL = [];

  allDesc.forEach((img, imgNum) => {
    // Add var for image timeline array here

    descTL[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    descTL[imgNum].fromTo(img, { yPercent: 20 }, { yPercent: -20 });
  }); // end forEach

  // titles

  var allTitles = gsap.utils.toArray(topicTitle);
  var titleTL = [];

  allTitles.forEach((img, imgNum) => {
    // Add var for image timeline array here

    titleTL[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    titleTL[imgNum].fromTo(img, { yPercent: 150 }, { yPercent: -20 });
  }); // end forEach
}

/* function topicTLPrep() {
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
 */

function gsapDevTools() {
  // Set up GSAP dev tools

  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}
