const images = document.querySelectorAll(".symbol").forEach((item) => {
  item.addEventListener("click", run);
  item.addEventListener("click", run);
});

function run() {
  let computerSymbol = chooseComputerSymbol();
  let userSymbol = chooseUserSymbol(event);
  compareSymbols(userSymbol, computerSymbol);
}

function chooseComputerSymbol() {
  let number = Math.floor(Math.random() * 3);
  let computerSymbol = "";
  let computerChoice = document.createElement("img");
  let h3Computer = document.getElementById("computer");
  let paragraph = document.getElementById("computer-paragraph");
  let computerContainer = document.getElementById("computer-container");
  if (computerContainer.hasChildNodes()) {
    computerContainer.removeChild(computerContainer.firstChild);
  }

  switch (number) {
    case 0:
      computerSymbol = "rock";
      computerChoice.src = "images/rock.png";
      computerContainer.appendChild(computerChoice);
      break;
    case 1:
      computerSymbol = "paper";
      computerChoice.src = "images/paper.png";
      computerContainer.appendChild(computerChoice);
      break;
    case 2:
      computerSymbol = "scissors";
      computerChoice.src = "images/scissors.png";
      computerContainer.appendChild(computerChoice);
      break;
    default:
  }
  if (paragraph.hasChildNodes()) {
    paragraph.remove();
  }
  paragraph.textContent = computerSymbol;
  h3Computer.appendChild(paragraph);
  return computerSymbol;
}

function chooseUserSymbol(e) {
  let userSymbol = "";
  let h3User = document.getElementById("user");
  let paragraph = document.getElementById("user-paragraph");
  if (e.target.classList.contains("rock")) {
    userSymbol = "rock";
  } else if (e.target.classList.contains("paper")) {
    userSymbol = "paper";
  } else if (e.target.classList.contains("scissors")) {
    userSymbol = "scissors";
  }
  if (paragraph.hasChildNodes()) {
    paragraph.remove();
  }
  paragraph.textContent = userSymbol;
  h3User.appendChild(paragraph);
  return userSymbol;
}

function compareSymbols(userSymbol, computerSymbol) {
  let result = "";
  let paragraph = document.getElementById("result-paragraph");
  let h3Result = document.getElementById("result");
  if (userSymbol === computerSymbol) {
    result = "It's a tie!";
  } else if (
    (userSymbol === "rock" && computerSymbol === "scissors") ||
    (userSymbol === "scissors" && computerSymbol === "paper") ||
    (userSymbol === "paper" && computerSymbol === "rock")
  ) {
    result = "You won!";
  } else {
    result = "The computer won!";
  }

  if (paragraph.hasChildNodes()) {
    paragraph.remove();
  }
  paragraph.textContent = result;
  h3Result.appendChild(paragraph);
}
