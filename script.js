"strict mode";

let element = null;
document.querySelector(".choosex").addEventListener("click", () => {
  element = "X";
  console.log("x has been used as the first element");
  document.querySelector(".first_element").classList.add("hidden");
});

document.querySelector(".chooseo").addEventListener("click", () => {
  element = "O";
  console.log("O has been used as the first element");
  document.querySelector(".first_element").classList.add("hidden");
});

const board = document.querySelectorAll(".cell");
for (let i = 0; i < 9; i++) {
  board[i].addEventListener("click", function () {
    if (!board[i].textContent) {
      board[i].textContent = element;
      if (element == "X") {
        element = "O";
      } else if (element == "O") {
        element = "X";
      }
    }
  });
}

document.querySelector(".again").addEventListener("click", () => {
  element = null;
  for (let k = 0; k < 9; k++) {
    board[k].textContent = element;
    console.log(`${k}`);
  }
  document.querySelector(".first_element").classList.remove("hidden");
});
