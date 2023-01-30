/* Variables */

const root = document.getElementById("root"),
  uiContainer = document.querySelector(".ui-container");

const eight = document.getElementById("eight"),
  sixteen = document.getElementById("sixteen"),
  thirtyTwo = document.getElementById("thirty-two"),
  sixtyFour = document.getElementById("sixty-four");

const clearBtn = document.getElementById("clear-btn"),
  colorPicker = document.getElementById("color-picker"),
  pickColor = document.getElementById("pick-color"),
  randomColorBtn = document.getElementById("random-color");

let gridDivs = [];

let globalGridValue = 16;

let penUp = true;

let chosenColor = "#000";



/* Event Listeners */

window.addEventListener("DOMContentLoaded", () => {
  populate(16);

  const draw = (e) => penTool(e.target);

  root.addEventListener("click", () => {
    gridDivs.forEach(div => {
      if (penUp) {
        div.addEventListener("mouseover", draw)
      } else {
        div.removeEventListener("mouseover", draw)
      }
    })
    penUp = !penUp;
  })
});

eight.addEventListener("click", () => clearGrid(8));
sixteen.addEventListener("click", () => clearGrid(16));
thirtyTwo.addEventListener("click", () => clearGrid(32));
sixtyFour.addEventListener("click", () => clearGrid(64));

clearBtn.addEventListener("click", () => clearGrid(globalGridValue, globalGridValue));
randomColorBtn.addEventListener("click", () => chosenColor = randomColor());
colorPicker.addEventListener("input", (e) => chosenColor = e.target.value);



/* Functions */

function penTool(div) {
  div.style.backgroundColor = chosenColor;
}

function populate(grids) {
  for (let i = 1; i <= (grids * grids); i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-div");
    newDiv.id = `grid-div-${i}`;
    newDiv.style.backgroundColor = "#fff";
    newDiv.style.width = `${100 / grids}%`;
    newDiv.style.height = newDiv.style.width;
    root.appendChild(newDiv);
  }
  gridDivs = Array.from(document.getElementsByClassName("grid-div"));
}

function clearGrid(grids) {
  root.innerHTML = "";
  globalGridValue = grids;
  populate(grids);
}

function randomColor() {
  const arr = ["0", "1", "2", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let randomVal = () => Math.floor(Math.random() * arr.length);
  const hexVals = [];
  for (let i = 0; i < 6; i++) {
    hexVals.push(arr[randomVal()]);
  }
  return "#" + hexVals.join("");
}
