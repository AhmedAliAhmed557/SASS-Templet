function myFunction() {
  let x = document.querySelector(".toggler");
  let y = document.querySelector(".navbar");
  if (y.style.display === "" || y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

// Slider
let sliderImgs = Array.from(document.querySelectorAll(".slider img"));
let countOfImgs = sliderImgs.length;
let numberImgs = document.querySelector(".slider-number");
let imgCount = 1;
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let bullets = document.querySelector(".bullets");
let ballsBullets = document.querySelectorAll(".bullets li");

next.onclick = nextPic;
prev.onclick = prevPic;

function nextPic() {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    imgCount++;
    checker();
  }
}
function prevPic() {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    imgCount--;
    checker();
  }
}

function checker() {
  numberImgs.textContent = "Slide #" + imgCount + " of " + countOfImgs;
  removeAllActive();
  sliderImgs[imgCount - 1].classList.add("active");
  bullets.children[imgCount - 1].classList.add("active");

  if (imgCount == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  if (imgCount == countOfImgs) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}
checker();

function removeAllActive() {
  sliderImgs.forEach((img) => {
    img.classList.remove("active");
  });
  ballsBullets.forEach((li) => {
    li.classList.remove("active");
  });
}

for (let i = 0; i < ballsBullets.length; i++) {
  ballsBullets[i].onclick = function () {
    imgCount = parseInt(this.getAttribute("data-index"));
    checker();
  };
}
