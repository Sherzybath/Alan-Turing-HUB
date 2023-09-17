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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

//  CIRCLEEEEEEEEEEEEEE
// function circleChaptaKaro() {
//   // define default scale value
//   var xscale = 1;
//   var yscale = 1;

//   var xprev = 0;
//   var yprev = 0;

//   window.addEventListener("mousemove", function (dets) {
//     clearTimeout(timeout);

//     xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     circleMouseFollower(xscale, yscale);

//     timeout = setTimeout(function () {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//     }, 100);
//   });
// }

// function circleMouseFollower(xscale, yscale) {
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector(
//       "#minicircle"
//     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//   });
// }

// circleChaptaKaro();
// circleMouseFollower();

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

// NAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVvv

("use strict");
const body = document.body;
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");

  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});

// SOCIIIIIIIIIIIIIALLLLLLLLLLLLLLLL
// SOCIIIIIIIIIIIIIIIIIALLLLLLLLLLLLLLLLL
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true,
    },
  });
});

// SLIDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRR
// SSSSSSSSSSSSSSSSSLLLLLLLLLLLLLLLLLIIIIIIIIIIIIIIDDDDDDDDDDDDEEEEEEEEEEEEEEERRRRRRRRRRR
const store = {
  ww: window.innerWidth,
  wh: window.innerHeight,
  isDevice:
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i),
};

class Slider {
  constructor(el, opts = {}) {
    this.bindAll();

    this.el = el;

    this.opts = Object.assign(
      {
        speed: 2,
        threshold: 50,
        ease: 0.075,
      },
      opts
    );

    this.ui = {
      items: this.el.querySelectorAll(".js-slide"),
      titles: document.querySelectorAll(".js-title"),
      lines: document.querySelectorAll(".js-progress-line"),
    };

    this.state = {
      target: 0,
      current: 0,
      currentRounded: 0,
      y: 0,
      on: {
        x: 0,
        y: 0,
      },

      off: 0,
      progress: 0,
      diff: 0,
      max: 0,
      min: 0,
      snap: {
        points: [],
      },

      flags: {
        dragging: false,
      },
    };

    this.items = [];

    this.events = {
      move: store.isDevice ? "touchmove" : "mousemove",
      up: store.isDevice ? "touchend" : "mouseup",
      down: store.isDevice ? "touchstart" : "mousedown",
    };

    this.init();
  }

  bindAll() {
    ["onDown", "onMove", "onUp"].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }

  init() {
    return gsap.utils.pipe(this.setup(), this.on());
  }

  destroy() {
    this.off();
    this.state = null;
    this.items = null;
    this.opts = null;
    this.ui = null;
  }

  on() {
    const { move, up, down } = this.events;

    window.addEventListener(down, this.onDown);
    window.addEventListener(move, this.onMove);
    window.addEventListener(up, this.onUp);
  }

  off() {
    const { move, up, down } = this.events;

    window.removeEventListener(down, this.onDown);
    window.removeEventListener(move, this.onMove);
    window.removeEventListener(up, this.onUp);
  }

  setup() {
    const { ww } = store;
    const state = this.state;
    const { items, titles } = this.ui;

    const { width: wrapWidth, left: wrapDiff } =
      this.el.getBoundingClientRect();

    // Set bounding
    state.max = -(
      items[items.length - 1].getBoundingClientRect().right -
      wrapWidth -
      wrapDiff
    );
    state.min = 0;

    // Global timeline
    this.tl = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 1,
          ease: "linear",
        },
      })
      .fromTo(
        ".js-progress-line-2",
        {
          scaleX: 1,
        },
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power3",
        },
        0
      )
      .fromTo(
        ".js-titles",
        {
          yPercent: 0,
        },
        {
          yPercent: -(100 - 100 / titles.length),
        },
        0
      )
      .fromTo(
        ".js-progress-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
        },
        0
      );

    // Cache stuff
    for (let i = 0; i < items.length; i++) {
      const el = items[i];
      const { left, right, width } = el.getBoundingClientRect();

      // Create webgl plane
      const plane = new Plane();
      plane.init(el);

      // Timeline that plays when visible
      const tl = gsap.timeline({ paused: true }).fromTo(
        plane.mat.uniforms.uScale,
        {
          value: 0.65,
        },
        {
          value: 1,
          duration: 1,
          ease: "linear",
        }
      );

      // Push to cache
      this.items.push({
        el,
        plane,
        left,
        right,
        width,
        min: left < ww ? ww * 0.775 : -(ww * 0.225 - wrapWidth * 0.2),
        max:
          left > ww
            ? state.max - ww * 0.775
            : state.max + (ww * 0.225 - wrapWidth * 0.2),
        tl,
        out: false,
      });
    }
  }

  calc() {
    const state = this.state;
    state.current += (state.target - state.current) * this.opts.ease;
    state.currentRounded = Math.round(state.current * 100) / 100;
    state.diff = (state.target - state.current) * 0.0005;
    state.progress = gsap.utils.wrap(0, 1, state.currentRounded / state.max);

    this.tl && this.tl.progress(state.progress);
  }

  render() {
    this.calc();
    this.transformItems();
  }

  transformItems() {
    const { flags } = this.state;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const { translate, isVisible, progress } = this.isVisible(item);

      item.plane.updateX(translate);
      item.plane.mat.uniforms.uVelo.value = this.state.diff;

      if (!item.out && item.tl) {
        item.tl.progress(progress);
      }

      if (isVisible || flags.resize) {
        item.out = false;
      } else if (!item.out) {
        item.out = true;
      }
    }
  }

  isVisible({ left, right, width, min, max }) {
    const { ww } = store;
    const { currentRounded } = this.state;
    const translate = gsap.utils.wrap(min, max, currentRounded);
    const threshold = this.opts.threshold;
    const start = left + translate;
    const end = right + translate;
    const isVisible = start < threshold + ww && end > -threshold;
    const progress = gsap.utils.clamp(
      0,
      1,
      1 - (translate + left + width) / (ww + width)
    );

    return {
      translate,
      isVisible,
      progress,
    };
  }

  clampTarget() {
    const state = this.state;

    state.target = gsap.utils.clamp(state.max, 0, state.target);
  }

  getPos({ changedTouches, clientX, clientY, target }) {
    const x = changedTouches ? changedTouches[0].clientX : clientX;
    const y = changedTouches ? changedTouches[0].clientY : clientY;

    return {
      x,
      y,
      target,
    };
  }

  onDown(e) {
    const { x, y } = this.getPos(e);
    const { flags, on } = this.state;

    flags.dragging = true;
    on.x = x;
    on.y = y;
  }

  onUp() {
    const state = this.state;

    state.flags.dragging = false;
    state.off = state.target;
  }

  onMove(e) {
    const { x, y } = this.getPos(e);
    const state = this.state;

    if (!state.flags.dragging) return;

    const { off, on } = state;
    const moveX = x - on.x;
    const moveY = y - on.y;

    if (Math.abs(moveX) > Math.abs(moveY) && e.cancelable) {
      e.preventDefault();
      e.stopPropagation();
    }

    state.target = off + moveX * this.opts.speed;
  }
}

/***/
/*** GL STUFF ****/
/***/

const backgroundCoverUv = `
vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio 
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio 
      ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
      : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}
`;

const vertexShader = `
precision mediump float;

uniform float uVelo;

varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

void main(){
  vec3 pos = position;
  pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}
`;

const fragmentShader = `
precision mediump float;

${backgroundCoverUv}

uniform sampler2D uTexture;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform float uVelo;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 texCenter = vec2(0.5);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 texture = texture2D(uTexture, texScale);

  texScale.x += 0.15 * uVelo;
  if(uv.x < 1.) texture.g = texture2D(uTexture, texScale).g;

  texScale.x += 0.10 * uVelo;
  if(uv.x < 1.) texture.b = texture2D(uTexture, texScale).b;

  gl_FragColor = texture;
}
`;

const loader = new THREE.TextureLoader();
loader.crossOrigin = "anonymous";

class Gl {
  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
      store.ww / -2,
      store.ww / 2,
      store.wh / 2,
      store.wh / -2,
      1,
      10
    );

    this.camera.lookAt(this.scene.position);
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.setPixelRatio(1.5);
    this.renderer.setSize(store.ww, store.wh);
    this.renderer.setClearColor(0xffffff, 0);

    this.init();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    const domEl = this.renderer.domElement;
    domEl.classList.add("dom-gl");
    document.body.appendChild(domEl);
  }
}

class GlObject extends THREE.Object3D {
  init(el) {
    this.el = el;

    this.resize();
  }

  resize() {
    this.rect = this.el.getBoundingClientRect();
    const { left, top, width, height } = this.rect;

    this.pos = {
      x: left + width / 2 - store.ww / 2,
      y: top + height / 2 - store.wh / 2,
    };

    this.position.y = this.pos.y;
    this.position.x = this.pos.x;

    this.updateX();
  }

  updateX(current) {
    current && (this.position.x = current + this.pos.x);
  }
}

const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
const planeMat = new THREE.ShaderMaterial({
  transparent: true,
  fragmentShader,
  vertexShader,
});

class Plane extends GlObject {
  init(el) {
    super.init(el);

    this.geo = planeGeo;
    this.mat = planeMat.clone();

    this.mat.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: 0 },
      uMeshSize: {
        value: new THREE.Vector2(this.rect.width, this.rect.height),
      },
      uImageSize: { value: new THREE.Vector2(0, 0) },
      uScale: { value: 0.75 },
      uVelo: { value: 0 },
    };

    this.img = this.el.querySelector("img");
    this.texture = loader.load(this.img.src, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      this.mat.uniforms.uTexture.value = texture;
      this.mat.uniforms.uImageSize.value = [
        this.img.naturalWidth,
        this.img.naturalHeight,
      ];
    });

    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.scale.set(this.rect.width, this.rect.height, 1);
    this.add(this.mesh);
    gl.scene.add(this);
  }
}

/***/
/*** INIT STUFF ****/
/***/

const gl = new Gl();
const slider = new Slider(document.querySelector(".js-slider"));

const tick = () => {
  gl.render();
  slider.render();
};

gsap.ticker.add(tick);

// TEAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// TEAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// TEAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// TEAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

window.addEventListener("load", (event) => {
  var swiperWrapper = document.querySelector(".swiper-wrapper");

  /* The Team */
  var team = [
    {
      name: "Alice Stone",
      role: "UI Designer",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
    {
      name: "Adam Turner",
      role: "Project Manager",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
    {
      name: "Nancy Hughes",
      role: "UX Specialist",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
    {
      name: "Jonathan Campbell",
      role: "Front-End Developer",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
    {
      name: "Jack Keller",
      role: "Back-End Developer",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
    {
      name: "Sara Carroll",
      role: "Head of UI Design",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      website: "https://rafaelalucas.com",
      email: "mailto:rafaelavlucas@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      dribbble: "https://dribbble.com/rafaelalucas",
    },
  ];

  /* Social Icons */
  var icons = [
    {
      iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
      iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
      iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
      iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    },
  ];

  var iWebsite = icons[0].iWebsite,
    iEmail = icons[0].iEmail,
    iLinkedin = icons[0].iLinkedin,
    iDribbble = icons[0].iDribbble;

  /* Function to populate the team members */
  function addTeam() {
    for (let i = 0; i < team.length; i++) {
      /* Variables for the team */
      var name = team[i].name,
        role = team[i].role,
        desc = team[i].desc,
        photo = team[i].photo,
        website = team[i].website,
        email = team[i].email,
        linkedin = team[i].linkedin,
        dribbble = team[i].dribbble;

      /* Template for the Team Cards */
      var template = `
              <div class="swiper-slide">
              <div class="card">
                  <span class="bg"></span>
                  <span class="more"></span>
                  <figure class="photo"><img src="${photo}"></figure>
                      <article class="text">
                          <p class="name">${name}</p>
                          <p class="role">${role}</p> 
                          <p class="desc">${desc}</p> 
                      </article>
                      
                      <div class="social">
                      <span class="pointer"></span>
                      <div class="icons">
                          <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
                          <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                          <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
                          <a class="icon" href="${dribbble}" target="_blank" data-index="3"><img src="${iDribbble}"></a>
                          </div>
                          </div>
                  </div>
              </div>`;

      swiperWrapper.insertAdjacentHTML("beforeend", template);
    }
  }

  addTeam();

  /* Swiper Settings */

  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: false,
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 40,
    threshold: 5,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1180: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      799: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
    },
  });

  /* Show More */

  var btnShow = document.querySelectorAll(".more");

  btnShow.forEach(function (el) {
    el.addEventListener("click", showMore);
  });

  function showMore(event) {
    var card = event.target.closest(".swiper-slide");

    if (card.classList.contains("show-more")) {
      card.classList.remove("show-more");
    } else {
      card.classList.add("show-more");
    }
  }

  /* Social Hover */
  var icon = document.querySelectorAll(".icon");

  icon.forEach(function (el) {
    el.addEventListener("mouseenter", followCursor);
  });

  function followCursor(event) {
    var pointer = event.currentTarget
        .closest(".swiper-slide")
        .querySelector(".pointer"),
      index = event.currentTarget.dataset.index,
      sizeIcon = 60 * index + 25;

    pointer.style.transform = `translateX(${sizeIcon}px)`;
  }

  /* end */
});
