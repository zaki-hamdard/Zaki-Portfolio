// Variables

const AppsWorks = [
  {
    title: "Sabatain",
    description: "It is a wonderful mobile app",
    link: "https://substian.io",
    image: "./assets/images/work3.webp",
  },
  {
    title: "Zaki intro",
    description: "My intro mobile app",
    link: "https://zaki.io",
    image: "./assets/images/work2.webp",
  },
];
const brandingWorks = [
  {
    title: "JS Dojo",
    description: "Its my friends website",
    link: "https://jsdojo.dev",
    image: "./assets/images/work1.webp",
  },
];
const uiUXWorks = [
  {
    title: "JS Dojo",
    description: "Its my friends website",
    link: "https://jsdojo.dev",
    image: "./assets/images/work1.webp",
  },
  {
    title: "Sabatain",
    description: "It is a wonderful mobile app",
    link: "https://substian.io",
    image: "./assets/images/work3.webp",
  },
  {
    title: "Zaki intro",
    description: "My intro mobile app",
    link: "https://zaki.io",
    image: "./assets/images/work2.webp",
  },
];
const allWorks = [...AppsWorks, ...brandingWorks, ...uiUXWorks];
const workTypeToContentMap = {
  apps: AppsWorks,
  branding: brandingWorks,
  "ui-ux": uiUXWorks,
  all: allWorks,
};
const worksTabButtons = document.querySelectorAll(".recent-works-tab button");
const galleryEl = document.querySelector(".work-gallery");

// Functions
const tabChangeFunction = (e) => {
  const galleryCardChildren = document.querySelectorAll(".work-card");
  galleryCardChildren.forEach((child) => {
    galleryEl.removeChild(child);
  });

  const buttonType = e.target.dataset.type;
  const contents = workTypeToContentMap[buttonType];

  const cardElements = contents?.map((item) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("work-card");
    const cardImg = document.createElement("img");
    cardImg.src = item.image;
    cardEl.appendChild(cardImg);
    return cardEl;
  });

  cardElements.forEach((cardEl) => {
    galleryEl.appendChild(cardEl);
  });
};
worksTabButtons.forEach((button) => {
  button.addEventListener("click", tabChangeFunction);
});

tabChangeFunction({ target: worksTabButtons[0] });
