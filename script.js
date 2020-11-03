const images = document.querySelectorAll(".symbol").forEach((item) => {
  item.addEventListener("click", run);
  item.addEventListener("click", run);
});

const computerContainer = document.getElementById("computer-container");

function run(e) {
  const chosenSymbol = e.target.id;
  const computerSymbol = chooseComputerSymbol();
  outputResults(chosenSymbol, "user", "user-paragraph");
  compareSymbols(chosenSymbol, computerSymbol);
}

function chooseComputerSymbol() {
  const number = Math.floor(Math.random() * 3);
  let computerSymbol = "";
  const computerChoice = document.createElement("img");
  
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
      break;
  }
  outputResults(computerSymbol, "computer", "computer-paragraph");

  return computerSymbol;
}

function compareSymbols(userSymbol, computerSymbol) {
  let result = "";

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

  outputResults(result, "result", "result-paragraph");
  
  return result;
}

function outputResults(outPut, headingType, paragraphType){
  const paragraph = document.getElementById(paragraphType);
  const resultHeading = document.getElementById(headingType);
  if (paragraph.hasChildNodes()){
    paragraph.remove();
  }
  paragraph.textContent = outPut;
  resultHeading.appendChild(paragraph);
}

