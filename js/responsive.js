//---------------------- GLOBAL ----------------------
// **Excludes "Real Estate Marketing" page**
if (!document.location.pathname.includes("real-estate-marketing")) {
  let featurettes = document.getElementsByClassName('featurette');

document.addEventListener('DOMContentLoaded',() => {
    //breakpoint adjustments
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

//SEARCH BAR NONSENSE (prepare for redundancy)
const buySellSelector = document.getElementById("buy-sell");
console.log(document.getElementById('search-btn'))
//generate the default bar
if(buySellSelector.value === "buy-button") {
  let submitBtn = document.getElementById('search-btn');
  submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>START SEARCH`;
  document.querySelector('#box-target').insertAdjacentHTML('afterend',
  `<div id="search-bar-buy" class="col-md-auto flex-grow-1">
  <div>
    <input type="text" class="form-control" placeholder="City, Address, Postal Code">
  </div>
</div>`
  )
}

//logic for changing buy/sell dropdown
buySellSelector.addEventListener("change", () => {
  if(buySellSelector.value === "buy-button") {
    let submitBtn = document.getElementById('search-btn');
    submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>START SEARCH`;
    let oldElement = document.getElementById('search-bar-sell');
    oldElement.remove();
    document.querySelector('#box-target').insertAdjacentHTML('afterend',
    `<div id="search-bar-buy" class="col-md-auto flex-grow-1">
    <div>
      <input type="text" class="form-control" placeholder="City, Address, Postal Code">
    </div>
  </div>`
    )
  } else if (buySellSelector.value === "sell-button") {
    let submitBtn = document.getElementById('search-btn');
    submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>GET VALUE`;
    let oldElement = document.getElementById('search-bar-buy');
    oldElement.remove();
    document.querySelector('#box-target').insertAdjacentHTML('afterend',
    `<div id="search-bar-sell" class="col-md-auto d-flex flex-row flex-grow-1">
    <div class="col-md-6 flex-grow-1">
      <input type="text" class="form-control" placeholder="Your home address">
    </div>
    <div class="col-md-6 flex-grow-1">
      <input type="text" class="form-control" placeholder="Your email address">
    </div>
  </div>`
    )
  }
})




//---------------------- ABOUT ----------------------

// Put something here...

//---------------------- REAL ESTATE MARKETING ----------------------

if (document.location.pathname.includes("real-estate-marketing")) {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      // } else {
      //   reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
}
