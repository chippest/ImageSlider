const imagesCont = document.querySelector(".images");
const images = Array.from(imagesCont.children);

let currentIndex = 0;
let autoSlideInterval;

function setInitialClasses() {
  images.forEach((img, index) => {
    img.className = "";
    if (index === currentIndex) img.classList.add("center");
    else if (index === (currentIndex + 1) % images.length)
      img.classList.add("right");
    else if (index === (currentIndex - 1 + images.length) % images.length)
      img.classList.add("left");
    else img.classList.add("back");
  });
}

setInitialClasses();

const selectorsCont = document.querySelector(".selectors");
let firstDone = false;
for (let i = 0; i < images.length; i++) {
  const selector = document.createElement("div");
  selector.classList.add("selector");
  !firstDone && selector.classList.add("selected");
  selectorsCont.appendChild(selector);
  firstDone = true;
}
const selectors = Array.from(selectorsCont.children);

function updateClasses(newIndex) {
  currentIndex = newIndex;
  setInitialClasses();
  selectors.forEach((selector, index) => {
    selector.classList.remove("selected");
    if (index === currentIndex) selector.classList.add("selected");
  });
  resetAutoSlide();
}

function autoSlide() {
  updateClasses((currentIndex + 1) % images.length);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 7000);
}

document
  .getElementById("left")
  .addEventListener("click", () =>
    updateClasses((currentIndex - 1 + images.length) % images.length)
  );
document
  .getElementById("right")
  .addEventListener("click", () =>
    updateClasses((currentIndex + 1) % images.length)
  );

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (img.classList.contains("left")) {
      updateClasses((currentIndex - 1 + images.length) % images.length);
    } else if (img.classList.contains("right")) {
      updateClasses((currentIndex + 1) % images.length);
    }
  });
});

selectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    updateClasses(index);
  });
});

resetAutoSlide();
