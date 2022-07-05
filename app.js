let header = document.querySelector("header");

let hero_slide = document.querySelector("#hero-slide");

let hero_slide_items = hero_slide.querySelectorAll(".slide");

let hero_slide_control_items = hero_slide.querySelectorAll(
  ".slide-control-item"
);

let prevBtn = document.querySelector(".slide-prev");

let nextBtn = document.querySelector(".slide-next");

let hero_slide_index = 0;

let hero_slide_play = true;

const showSlide = (index) => {
  hero_slide.querySelector(".slide.active").classList.remove("active");
  hero_slide
    .querySelector(".slide-control-item.active")
    .classList.remove("active");
  hero_slide_control_items[index].classList.add("active");
  hero_slide_items[index].classList.add("active");
};

const nextSlide = () => {
  hero_slide_index =
    hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
  showSlide(hero_slide_index);
};

const prevSlide = () => {
  hero_slide_index =
    hero_slide_index - 1 < 0
      ? hero_slide_items.length - 1
      : hero_slide_index - 1;
  showSlide(hero_slide_index);
};
//pause event when mouseover slide
hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));

//when mouse leave out slide
hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));

//when click nextBtn
nextBtn.addEventListener("click", () => nextSlide());

//when click prevBtn
prevBtn.addEventListener("click", () => prevSlide());

setTimeout(() => {
  hero_slide_items[0].classList.add("active");
}, 100);
setInterval(() => {
  if (!hero_slide_play) return;
  nextSlide();
}, 4000);

//header onScroll

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let el_to_show = document.querySelectorAll(".show-on-scroll");

isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  let distance = 200;

  return (
    rect.top <=
    (window.innerHeight - distance ||
      document.documentElement.clientHeight - distance)
  );
};

loop = () => {
  el_to_show.forEach((el) => {
    if (isElInViewPort(el)) el.classList.add("show");
  });

  scroll(loop);
};

loop();
