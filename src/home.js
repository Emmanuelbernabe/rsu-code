import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import { SplitText } from "gsap/all";
import { Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);
function home() {

    // smooth scroll
    document.addEventListener('DOMContentLoaded', () => {
      let smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      smoothTouch: 0.1,
      effects: true
    });

    ScrollTrigger.refresh();   

  });

  // BG nav dropdown open

  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".c-dropdown");
    const navBg = document.querySelector(".c-nav-bg-open");
    let lastOpenedDropdown = null;
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();
  
        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if click on same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          // If another dropdown is clicked, close the others and open the new one.
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove("open");
          });
          dropdown.classList.add("open");
          navBg.style.display = "block";
          lastOpenedDropdown = dropdown;
        }
      });
    });
  
    document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("c-dropdown")) {
        // If you click outside of all the dropdowns, close them all
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
        });
        navBg.style.display = "none";
        lastOpenedDropdown = null; // Reinitialise the last open dropdown
      }
    });
  
    navBg.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = "none";
      lastOpenedDropdown = null; // Reinitialise the last open dropdown
    });
  });
  
// anim Fast txt

const quotes = document.querySelectorAll(".cc-split");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "play none none reverse",
        start: "top 80%",
      },
      duration: 0.5, 
      opacity: 0,
      y: 5,
      stagger: 0.05,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

// Anim fast yellow circle

gsap.timeline({
  scrollTrigger: {
    trigger: ".cc-pin",
    pin: true,
    start: "top 20%",
    end: "+=2000",
    scrub: true,
    onEnterBack: () => {
      // Code à exécuter lorsque vous faites défiler vers le haut
      const reverseTimeline = gsap.timeline(); // Créez une nouvelle timeline

      reverseTimeline
        .to(".c-fast-cards-wrapper", {
          opacity: "0%",
        })
        .to(".c-yellow-wrapper", {
          scaleX: "100%",
          scaleY: "100%",
          x: "0%",
          y: "0%",
          duration: 1,
        });
        
      return reverseTimeline; // Renvoie la timeline inverse

    },
  },
  defaults: {
    ease: "none",
  },
})
.to(
  ".c-yellow-circle-wrapper",
  {
    x: "110vw",
    rotate: "500%",
    onComplete: () => {
      // Code à exécuter lorsque l'animation se termine (défilement vers le bas)
      const innerTimeline = gsap.timeline(); // Créez une nouvelle timeline

      innerTimeline
        .to(".c-yellow-wrapper", {
          scaleX: "800%",
          scaleY: "800%",
          x: "-380%",
          y: "-300%",
          duration: 1,
        })
        .to(".c-fast-cards-wrapper", {
          opacity: "100%",
        })
        .fromTo(".swiper", {
          scale:0.5,
          opacity:0
        }, {
          scale:1,
          duration: 0.9,
          opacity: 1,
        })
        
        var tl = gsap.timeline(),
        mySplitText = new SplitText(".cc-split-chars", { type: "words,chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character
        gsap.set(".cc-split-chars", { perspective: 400 });

        tl.from(chars, {
        duration: 2,
        delay:0.5,
        opacity: 0,
        scale: 0,
        ease: "back",
        stagger: 0.01
});


      // Vous pouvez également ajouter d'autres animations à cette timeline interne ici

      // Si vous souhaitez que la timeline interne se joue, décommentez la ligne suivante

      innerTimeline.play();

    },
  },
  "start"
);

// anim fast yellow test

// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".cc-pin",
//     pin: true,
//     start: "top 20%",
//     end: "+=2000",
//     scrub: true,
//     onEnterBack: () => {
//       // Code à exécuter lorsque vous faites défiler vers le haut
//       const reverseTimeline = gsap.timeline(); // Créez une nouvelle timeline

//       reverseTimeline
//         .to(".c-yellow-wrapper", {
//           display:"block",
//         })
//         .to(".c-fast-cards-wrapper", {
//           opacity: "0%",
//         })
//         .to('.c-bg-wrapper', {
//           backgroundColor: "transparent",
//         })
//         .to(".c-yellow-wrapper", {
//           scaleX: "100%",
//           scaleY: "100%",
//           x: "0vw",
//           y: "0vw",
//           duration: 1,
//         });
        
//       return reverseTimeline; // Renvoie la timeline inverse

//     },
//   },
//   defaults: {
//     ease: "none",
//   },
// })
// .to(
//   ".c-yellow-circle-wrapper",
//   {
//     x: "110vw",
//     rotate: "500%",
//     onComplete: () => {
//       // Code à exécuter lorsque l'animation se termine (défilement vers le bas)
//       const innerTimeline = gsap.timeline(); // Créez une nouvelle timeline

//       innerTimeline
//         .to(".c-yellow-wrapper", {
//           scaleX: "1400%",
//           scaleY: "1400%",
//           x: "-60vw",
//           y: "-100vw",
//           duration: 1,
//         })
//         .to(".c-fast-cards-wrapper", {
//           opacity: "100%",
//         })
//         .to('.c-bg-wrapper', {
//           backgroundColor: "#fffdb2",
//         })
//         .to(".c-yellow-wrapper", {
//           display:"none",
//         })
//         .fromTo(".swiper", {
//           scale:0.5,
//           opacity:0
//         }, {
//           scale:1,
//           duration: 0.9,
//           opacity: 1,
//         })
        
//         var tl = gsap.timeline(),
//         mySplitText = new SplitText(".cc-split-chars", { type: "words,chars" }),
//         chars = mySplitText.chars; //an array of all the divs that wrap each character
//         gsap.set(".cc-split-chars", { perspective: 400 });

//         tl.from(chars, {
//         duration: 2,
//         delay:0.5,
//         opacity: 0,
//         scale: 0,
//         ease: "back",
//         stagger: 0.01
// });


//       // Vous pouvez également ajouter d'autres animations à cette timeline interne ici

//       // Si vous souhaitez que la timeline interne se joue, décommentez la ligne suivante

//       innerTimeline.play();

//     },
//   },
//   "start"
// );

// tag us line growing

gsap.fromTo(".c-tag-line.cc-one", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-one',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-two", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-two',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-three", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-three',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-four", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-four',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-five", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-five',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-six", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-six',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-line.cc-seven", {
  scaleX: 0,
  opacity: 0
}, {
  scaleX: 1, 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-seven',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".c-tag-button-container", {
  scaleX: 0.5,
  opacity: 0,
}, {
  scaleX: 1,
  opacity:1, 
  duration: 0.6,
  scrollTrigger:{
    trigger:'.c-tag-line.cc-seven',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});


// Growing img cta footer

gsap.to(".c-img-cta-footer.cc-one", {
  scrollTrigger: {
      trigger: ".c-cta-footer-wrapper",
      start: "top 100%",
      scrub: true,
  },
  scaleX: '300%',
  scaleY: '300%',
  x: "21rem",
  ease: "quart.easeOut",
  });

  gsap.to(".c-img-cta-footer.cc-two", {
    scrollTrigger: {
        trigger: ".c-cta-footer-wrapper",
        start: "top 100%",
        scrub: true,
    },
    scaleX: '1000%',
    scaleY: '1000%',
    x: "-20rem",
    y:"5rem",
    ease: "quart.easeOut",
    });

    gsap.to(".c-img-cta-footer.cc-three", {
      scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
      },
      scaleX: '780%',
      scaleY: '780%',
      x: "-10rem",
      y:"5rem",
      ease: "quart.easeOut",
      });
  
// Marquee on scroll
gsap.to(".c-scroll-marquee-wrapper", {
  scrollTrigger: {
      trigger: ".c-scroll-marquee-wrapper",
      start: "top 100%",
      scrub: true,
  },
  xPercent: -20,
  ease: "quart.easeOut",
  });

// footer chart anim

gsap.to(".c-img-chart-footer.cc-one", {
  scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
  },
  y: '-11rem',
  ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-two", {
    scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
    },
    y: '-20rem',
    ease: "quart.easeOut",
    });
  
    gsap.to(".c-img-chart-footer.cc-three", {
      scrollTrigger: {
          trigger: ".c-chart-footer-wrapper",
          start: "top 100%",
          end: "bottom -10%",
          scrub: true,
      },
      y: '-7rem',
      ease: "quart.easeOut",
      });
    
      gsap.to(".c-img-chart-footer.cc-four", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-2rem',
        ease: "quart.easeOut",
        });
      
        gsap.to(".c-img-chart-footer.cc-five", {
          scrollTrigger: {
              trigger: ".c-chart-footer-wrapper",
              start: "top 100%",
              end: "bottom -10%",
              scrub: true,
          },
          y: '-6rem',
          ease: "quart.easeOut",
          });

          gsap.to(".c-img-chart-footer.cc-six", {
            scrollTrigger: {
                trigger: ".c-chart-footer-wrapper",
                start: "top 100%",
                end: "bottom -10%",
                scrub: true,
            },
            y: '-11rem',
            ease: "quart.easeOut",
            });
          
        
  
  

}

export default home
