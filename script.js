function lenis() {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Listen for the 'scroll' event and log the event data to the console
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });
  gsap.ticker.lagSmoothing(0);
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
// lenis();

