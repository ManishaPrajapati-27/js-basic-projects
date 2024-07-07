const sliderContainer = document.querySelector(".slider-container");
const sliderWrapper = document.querySelector(".slider-slides");
const sliderDots = document.querySelector(".slider-dots");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderPrev = document.querySelector(".slider-indicators .prev");
const sliderNext = document.querySelector(".slider-indicators .next");
// const SliderItem = document.querySelectorAll(".slider-item");

sliderItems.forEach((item, index) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  dot.innerHTML = `<span></span>`;
  if (index === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    currentSlide(index);
  });
  sliderDots.appendChild(dot);
});

let currentIndex = 0;

// function currentSlide(index)

currentSlide = (index) => {
  showSlide((currentIndex = index));
};

showSlide = () => {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("active");
    dots[currentIndex].classList.add("active");
  });
  sliderItems.forEach((item) => {
    item.classList.remove("active");
    sliderItems[currentIndex].classList.add("active");
  });
};

// For Previous Button
sliderPrev.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});
// For Next Button
sliderNext.addEventListener("click", () => {
  currentIndex = currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});
