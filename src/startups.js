import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import { SplitText } from "gsap/all";
import { Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);
function startups() { 

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
}



export default startups