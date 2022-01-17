/* Variables */

const colorPicker = document.querySelector(".color-picker"),
  colors = document.querySelectorAll(".color-div"),
  root = document.getElementById("root"),
  uiContainer = document.querySelector(".ui-container");

const eight = document.getElementById("eight"),
  sixteen = document.getElementById("sixteen"),
  thirtyTwo = document.getElementById("thirty-two"),
  sixtyFour = document.getElementById("sixty-four");

const clearBtn = document.getElementById("clear-btn"),
  pickColor = document.getElementById("pick-color");

let globalGridValue = 16;

const RED = '#ff0000',
  ORANGE = '#ffa500',
  YELLOW = '#ffff00',
  GREEN = '#00ff00',
  BLUE = '#0000ff',
  INDIGO = '#4b0082',
  VIOLET = '#ee82ee',
  CLEAR = '#fafaff',
  DEFAULT = '#000030',
  GRAY = '#808080',
  BLACK = '#000000';

const COLORS = {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  VIOLET,
  CLEAR,
  DEFAULT,
  GRAY,
  BLACK,
  RANDOM: function () { return randomColor() }
};

let chosenColor = DEFAULT;



/* Event Listeners */

window.addEventListener('DOMContentLoaded', populate(16));

eight.addEventListener('click', () => clearGrid(8, 8));
sixteen.addEventListener('click', () => clearGrid(16, 16));
thirtyTwo.addEventListener('click', () => clearGrid(32, 32));
sixtyFour.addEventListener('click', () => clearGrid(64, 64));

clearBtn.addEventListener('click', () => clearGrid(globalGridValue, globalGridValue));
pickColor.addEventListener('click', () => {
  colorPicker.style.display = "flex";
  root.style.display = "none";
});



/* Functions */

function penTool(div) {
  div.style.backgroundColor = chosenColor;
}

function populate(grids) {
  if (grids > 100) { grids = 100; alert() }
  for (let i = 1; i <= (grids * grids); i++) {
    let newDiv = document.createElement("div");
    newDiv.id = `grid-div-${i}`;
    newDiv.style.backgroundColor = CLEAR;
    newDiv.style.width = `${100 / grids}%`;
    newDiv.style.height = newDiv.style.width;
    root.appendChild(newDiv);
    newDiv.addEventListener('mouseover', () => penTool(newDiv));
  }

  colors.forEach(color => {
    if (color.id === 'random') {
      color.style.backgroundColor = 'black';
    } else {
      color.style.backgroundColor = COLORS[color.id.toUpperCase()];
    }
    color.addEventListener('click', () => chooseColor(color.id));
  })
}

function clearGrid(grids, newGlobalGridValue) {
  root.innerHTML = '';
  globalGridValue = newGlobalGridValue;
  populate(grids);
}

function chooseColor(color) {
  console.log("chooseColor was called");

  switch (color.toUpperCase()) {
    case "RED":
      chosenColor = COLORS.RED;
      break;
    case "ORANGE":
      chosenColor = COLORS.ORANGE;
      break;
    case "YELLOW":
      chosenColor = COLORS.YELLOW;
      break;
    case "GREEN":
      chosenColor = COLORS.GREEN;
      break;
    case "BLUE":
      chosenColor = COLORS.BLUE;
      break;
    case "INDIGO":
      chosenColor = COLORS.INDIGO;
      break;
    case "VIOLET":
      chosenColor = COLORS.VIOLET;
      break;
    case "CLEAR":
      chosenColor = COLORS.CLEAR;
      break;
    case "DEFAULT":
      chosenColor = COLORS.DEFAULT;
      break;
    case "GRAY":
      chosenColor = COLORS.GRAY;
      break;
    case "BLACK":
      chosenColor = COLORS.BLACK;
      break;
    case "RANDOM":
      chosenColor = COLORS.RANDOM();
      break;
    default:
      chosenColor = DEFAULT;
  }

  colorPicker.style.display = "none";
  root.style.display = "flex";
}

function randomColor() {
  const arr = [RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET, CLEAR, DEFAULT, GRAY, BLACK];
  return arr[Math.floor(Math.random() * arr.length)];
}
