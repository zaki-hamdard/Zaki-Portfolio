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
const worksTabParent = document.querySelector(".recent-works-tab");
const galleryEl = document.querySelector(".work-gallery");
const badge = document.querySelector(".button-active-badge");

//    <i class="fa fa-arrow-right" aria-hidden="true"></i>

// Functions
const tabChangeFunction = (e) => {
  // place active badge
  placeActiveBadge(e);

  // load the gallery
  const galleryCardChildren = document.querySelectorAll(".work-card");
  galleryCardChildren.forEach((child) => {
    galleryEl.removeChild(child);
  });

  const buttonType = e.target.dataset.type;
  const contents = workTypeToContentMap[buttonType];

  // Hide visibility style to work-gallery element
  galleryEl.classList.remove("gallery-visible");

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  }).then(() => {
    const cardElements = contents?.map((item) => {
      const cardEl = document.createElement("div");
      cardEl.classList.add("work-card");
      const cardImg = document.createElement("img");
      cardImg.src = item.image;

      const workCardInfoWrapper = document.createElement("div");
      workCardInfoWrapper.classList.add("work-card-info-wrapper");

      const workCardInfo = document.createElement("div");
      workCardInfo.classList.add("work-card-info");

      const workCardTextInfo = document.createElement("div");
      workCardTextInfo.classList.add("work-card-text-info");

      const h3 = document.createElement("h3");
      h3.textContent = item.title;

      const p = document.createElement("p");
      p.textContent = item.description;

      workCardTextInfo.appendChild(h3);
      workCardTextInfo.appendChild(p);

      const workCardArrowIcon = document.createElement("div");
      workCardArrowIcon.classList.add("work-card-arrow-icon");

      const icon = document.createElement("i");
      icon.classList.add("fa", "fa-arrow-right", );
      icon.setAttribute("aria-hidden", "true");

      workCardArrowIcon.appendChild(icon);

      workCardInfo.appendChild(workCardTextInfo);
      workCardInfo.appendChild(workCardArrowIcon);

      workCardInfoWrapper.appendChild(workCardInfo);
      cardEl.appendChild(workCardInfoWrapper);
      cardEl.appendChild(cardImg);
      return cardEl;
    });

    cardElements.forEach((cardEl) => {
      galleryEl.appendChild(cardEl);
    });

    // add visibility style to work-gallery element
    galleryEl.classList.add("gallery-visible");
  });
};
worksTabButtons.forEach((button) => {
  button.addEventListener("click", tabChangeFunction);
});

// place Active button badge position
const placeActiveBadge = (e) => {
  const button = e.target;
  const parentRect = worksTabParent.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  badge.style.left = `${buttonRect.left - parentRect.left}px`;
  badge.style.width = `${buttonRect.width}px`;
  badge.style.height = `${buttonRect.height}px`;
  badge.style.opacity = 1;
};

// init function --> called in page load
const init = () => {
  tabChangeFunction({ target: worksTabButtons[0] });
  placeActiveBadge({ target: worksTabButtons[0] });
};

init();
