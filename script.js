const imagesCont = document.querySelector(".images");
const images = Array.from(imagesCont.children);

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

function updateClasses(direction) {
  if (direction === "left") {
    const first = images.shift();
    images.push(first);
    const firstSelector = selectors.shift();
    selectors.push(firstSelector);
  } else if (direction === "right") {
    const last = images.pop();
    images.unshift(last);
    const lastSelector = selectors.pop();
    selectors.unshift(lastSelector);
  }

  images.forEach((img, index) => {
    img.className = "";
    if (index === 0) img.classList.add("left");
    else if (index === 1) img.classList.add("center");
    else if (index === 2) img.classList.add("right");
    else img.classList.add("back");
  });
  selectors.forEach((selector, index) => {
    selector.classList.remove("selected");
    if (index === 0) selector.classList.add("selected");
  });
}

document
  .getElementById("left")
  .addEventListener("click", () => updateClasses("right"));
document
  .getElementById("right")
  .addEventListener("click", () => updateClasses("left"));

images.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.classList.contains("left")) {
      updateClasses("right");
    } else if (img.classList.contains("right")) {
      updateClasses("left");
    }
  });
});
