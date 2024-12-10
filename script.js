function lenis() {
  const locomotiveScroll = new LocomotiveScroll();
}

function pageview() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

pageview();
lenis();

gsap.to(".scroll", {
  scrollTrigger: {
    trigger: ".horizon",
    start: "23% top", // Changed to more standard starting position
    end: "+=300%", // More precise end point based on scroll distance
    scrub: 1, // Added smoothing value for more natural scrolling
    pin: true,
    anticipatePin: 1, // Added to prevent jerky start
    invalidateOnRefresh: true, // Added to handle resize events
    markers: false, // Disabled markers for production
  },
  x: "-300%",
  ease: "none", // Changed to none for smoother scrolling
});

var tl = gsap.timeline({
  Scrolltrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom bottom",
  },
});

tl.from(".header .logo, .header .navbar",{
  y:-100,
  opacity:0,
  delay:0.5,
  scale:0.5,
  duration:1,
  stagger:0.1,
  ease:"power4"
},"<")
.from(".hero-content h1, .hero-content .buttons a",{
  y:100,
  x:200,
  opacity:0,
  duration:.8,
  stagger:0.1,
  ease:"power4.out"
})