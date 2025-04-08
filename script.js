window.addEventListener("load", () => {
  // GSAP Image Strip Animation
  const strip = document.getElementById("imageStrip");
  strip.innerHTML += strip.innerHTML;
  const totalWidth = strip.scrollWidth / 2;
  gsap.to(strip, {
    x: `-=${totalWidth}`,
    duration: 40,
    ease: "linear",
    repeat: -1,
  });

  // Clock
  function updateClock() {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    };
    const timeString = now.toLocaleTimeString("en-US", options);
    document.getElementById("clock").textContent = timeString + " ET";
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Locomotive Scroll
 
  import(
    "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"
  ).then(({ default: LocomotiveScroll }) => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  });

  // Circle Mouse Follower
  function CircleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
      const circle = document.querySelector("#minicircle")
      circle.style.opacity = 1;
      circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    });
  }
  CircleMouseFollower();

  function CircleSqueeze() {
    var xscale = 1;
    var yscale = 1;

    var xprev= 0;
    var yprev = 0;

    window.addEventListener('mousemove',function(dets){
    
      xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
      yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);


      xprev = dets.clientX;
      yprev = dets.clientY;

     
     CircleMouseFollower(xscale,yscale);


    })
  }

  CircleSqueeze()

  // First Page Animation
  function firstPageAnim() {
    console.log("running");
    var tl = gsap.timeline();
    tl.from("#nav", {
      y: 10,
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut",
    })
    .to(".boundingelem", {
      y: 0,
      duration:1.5,
      ease: "expo.inOut",
      stagger:0.2,
      delay:-1,
      
    })
    .from(".herofooteralign", {
      y: -10,
      opacity:0,
      duration:1.5,
      ease: 'expo.inOut',
      stagger:0.2,
      delay:-1,
    });
  }
  firstPageAnim();
});
