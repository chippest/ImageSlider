const imagesCont = document.querySelector(".images");
const images = Array.from(imagesCont.children);

function updateClasses(direction) {
  if (direction === "left") {
    const first = images.shift();
    images.push(first);
  } else if (direction === "right") {
    const last = images.pop();
    images.unshift(last);
  }

  images.forEach((img, index) => {
    img.className = "";
    if (index === 0) img.classList.add("left");
    else if (index === 1) img.classList.add("center");
    else if (index === 2) img.classList.add("right");
    else img.classList.add("back");
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
