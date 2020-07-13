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
  outputResults(computerSymbol, "computer", "computer-paragraph");

  return computerSymbol;
}

function chooseUserSymbol(e) {
  let userSymbol = "";
  
  if (e.target.classList.contains("rock")) {
    userSymbol = "rock";
  } else if (e.target.classList.contains("paper")) {
    userSymbol = "paper";
  } else if (e.target.classList.contains("scissors")) {
    userSymbol = "scissors";
  }
  outputResults(userSymbol, "user", "user-paragraph");
  
  return userSymbol;
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
  let paragraph = document.getElementById(paragraphType);
  let resultHeading = document.getElementById(headingType);
  if (paragraph.hasChildNodes()){
    paragraph.remove();
  }
  paragraph.textContent = outPut;
  resultHeading.appendChild(paragraph);
}

