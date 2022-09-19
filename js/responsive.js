//---------------------- GLOBAL ----------------------

// **Excludes "Real Estate Marketing" page**
if (!document.location.pathname === "/html/real-estate-marketing.html") {
  let featurettes = document.getElementsByClassName('featurette');

document.addEventListener('DOMContentLoaded',() => {
    for (f of featurettes) {
      if (window.innerWidth <= 1345) {
        f.children[0].classList.add("col-xl-4");
        f.children[0].classList.remove("col-xl-6");
      } else if (window.innerWidth <= 1565 && window.innerWidth > 992) {
        f.children[0].classList.add("col-xl-5");
        f.children[0].classList.remove("col-xl-6");
      }
    };
});

window.addEventListener('resize', () => {
  for (f of featurettes) {
    if (window.innerWidth <= 1345) {
      f.children[0].classList.add("col-xl-4");
      f.children[0].classList.remove("col-xl-5");
      f.children[0].classList.remove("col-xl-6");
    } else if (window.innerWidth <= 1565 && window.innerWidth > 992) {
      f.children[0].classList.add("col-xl-5");
      f.children[0].classList.remove("col-xl-4");
      f.children[0].classList.remove("col-xl-6");
    } else {
      f.children[0].classList.add("col-xl-6");
      f.children[0].classList.remove("col-xl-4");
      f.children[0].classList.remove("col-xl-5");
    }
  };
})
}

//---------------------- ABOUT ----------------------

// Put something here...

//---------------------- REAL ESTATE MARKETING ----------------------

if (document.location.pathname === "/html/real-estate-marketing.html") {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
}
