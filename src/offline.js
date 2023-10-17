import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import { SplitText } from "gsap/all";
import { Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);
function offline() { 

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

    // sticky section

    let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "bottom 90%",
        markers: true,
      });

// growing img cta footer

    gsap.to(".c-img-cta-footer.cc-circle", {
        scrollTrigger: {
            trigger: ".c-cta-footer-wrapper",
            start: "top 100%",
            scrub: true,
        },
        scaleX: '300%',
        scaleY: '300%',
        ease: "quart.easeOut",
        });
      
// footer animation

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

export default offline
