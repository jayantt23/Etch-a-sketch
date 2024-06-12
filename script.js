const container = document.querySelector(".container");

function createGrid(rows) {
  side = Math.floor(960 / rows);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      let item = document.createElement("div");
      item.style.height = `${side}px`;
      item.style.width = `${side}px`;
      item.classList.add("item");
      container.appendChild(item);
    }
  }
}

function addHovering() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener(
      "mouseover",
      () => {
        item.style.backgroundColor = "coral";
      },
      { once: true }
    );
  });
}

createGrid(16);
addHovering();
