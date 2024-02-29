var number5 = document.querySelector(".number5"),
  number5Top = number5.getBoundingClientRect().top,
  start = +number5.innerHTML,
  end = +number5.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number5Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval = setInterval(function () {
      number5.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 50);
  }
});
var number6 = document.querySelector(".number6"),
  number6Top = number6.getBoundingClientRect().top,
  start1 = +number6.innerHTML,
  end1 = +number6.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number6Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval1 = setInterval(function () {
      number6.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval1);
      }
    }, 50);
  }
});
var number7 = document.querySelector(".number7"),
  number7Top = number7.getBoundingClientRect().top,
  start2 = +number7.innerHTML,
  end2 = +number7.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number7Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval2 = setInterval(function () {
      number7.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval2);
      }
    }, 50);
  }
});
