//---------------------- INDEX ----------------------

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

//---------------------- ABOUT ----------------------