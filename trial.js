var timeout;

let btn = document.querySelectorAll(".magnet").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;
    let transX = x - btnWidth;
    let transY = y - btnHeight;
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  });
  btn.addEventListener("mouseout", (e) => {
    btn.style.transform = "";
  });
});

// const btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("mousemove", function (e) {
//     const position = btn.getBoundingClientRect();
//     const x = e.pageX - position.left - position.width / 2;
//     const y = e.pageY - position.top - position.height / 2;

//     btn.children[0].style.transform =
//       "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
//   });
// });

// btns.forEach((btn) => {
//   btn.addEventListener("mouseout", function (e) {
//     btn.children[0].style.transform = "translate(0px, 0px)";
//   });
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//  CIRCLEEEEEEEEEEEEEE
function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();

// CIRCLEEEEE ENDDDD

// IMG FOLLOWERRRR
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX - 400,
      rotate: gsap.utils.clamp(-15, 15, diffrot * 0.5),
    });
  });
});

// SPLASH SCREEEENNNNN
let intro = document.querySelector(".intro");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2800);
});
