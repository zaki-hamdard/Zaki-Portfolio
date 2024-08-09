const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const paginationList = document.querySelectorAll(".carousel-pagination-dot");

const slideWidth = slides[0].getBoundingClientRect().width;
const cardsAtOnce = 2;

// next Button click handler
const nextSlideHandler = () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentSlideTriangles = currentSlide.querySelectorAll(".triangle");
  const nextSlideTriangles =
    currentSlide.nextElementSibling.querySelectorAll(".triangle");
  console.log(currentSlideTriangles);
  currentSlideTriangles.forEach((triangle) => {
    triangle.style.transform = "rotate(0deg)";
  });
  nextSlideTriangles.forEach((triangle) => {
    triangle.style.transform = "rotate(0deg)";
  });
  const currentIndex = slides.indexOf(currentSlide) + 1;
  const slidesLength = slides.length;

  // active state of pagination
  paginationList?.forEach((dot) => dot.classList.remove("active"));
  paginationList?.[currentIndex].classList.add("active");
  if (currentIndex + cardsAtOnce > slidesLength) {
    track.style.transition = "none";
    track.style.transform = `translateX(0px)`;
    currentSlide.classList.remove("current-slide");
    slides[0].classList.add("current-slide");
    return;
  }
  track.style.transition = "transform 1s ease-in-out";
  track.style.transform = `translateX(-${(slideWidth + 14) * currentIndex}px)`;
  currentSlide.classList.remove("current-slide");
  currentSlide.nextElementSibling.classList.add("current-slide");
};

// prev button click handler
const prevSlideHandler = () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndex = slides.indexOf(currentSlide);
  if (currentIndex === 0) return;
  track.style.transform = `translateX(-${
    (slideWidth + 14) * (currentIndex - 1)
  }px)`;
  currentSlide.classList.remove("current-slide");
  currentSlide.previousElementSibling.classList.add("current-slide");
};

// adding interval to auto slide
var slideInterval = setInterval(nextSlideHandler, 2000);

// pagination dots click handler
paginationList?.forEach((item) => {
  item.addEventListener("click", () => {
    clearInterval(slideInterval);
    const currentSlide = track.querySelector(".current-slide");
    const currentIndex = slides.indexOf(currentSlide);
    const clickedIndex = Array.from(paginationList).indexOf(item);
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = `translateX(-${
      (slideWidth + 14) * clickedIndex
    }px)`;
    currentSlide.classList.remove("current-slide");
    slides[clickedIndex].classList.add("current-slide");

    slideInterval = setInterval(nextSlideHandler, 2000);
  });
});

const carouselInit = () => {
  slides?.[0].classList.add("current-slide");
  paginationList?.[0].classList.add("active");
};

carouselInit();
