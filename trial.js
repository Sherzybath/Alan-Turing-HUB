// let btn = document.querySelectorAll(".magnet").forEach((btn) => {
//   btn.addEventListener("mousemove", (e) => {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     let btnWidth = btn.clientWidth;
//     let btnHeight = btn.clientHeight;
//     let transX = x - btnWidth;
//     let transY = y - btnHeight;
//     btn.style.transform = "translateX(${transX}px) translateY(${transY}px)";
//   });
//   btn.addEventListener("mouseout", (e) => {
//     btn.style.transform = "";
//   });
// });

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform =
      "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function (e) {
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

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
