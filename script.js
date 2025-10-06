const result = document.querySelector("#result");
const humanScore = document.querySelector(".humanScore");
const machineScore = document.querySelector(".machineScore");

let humanPoints = 0;
let machinePoints = 0;

const humanChoice = (choice) => {
  console.log(choice);

  playRound(choice, machineChoice());
};

const machineChoice = () => {
  const choices = ["pedra", "pepel", "tissoura"];
  const random = Math.floor(Math.random() * 3);

  console.log(choices[random]);
  return choices[random];
};

const playRound = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Empate!";
  } else if (
    (human === "pedra" && machine === "tissoura") ||
    (human === "tissoura" && machine === "papel") ||
    (human === "papel" && machine === "pedra")
  ) {
    humanPoints++;
    humanScore.innerHTML = humanPoints;
    result.innerHTML = "Você GANHOU!";
  } else {
    machinePoints++;
    machineScore.innerHTML = machinePoints;
    result.innerHTML = "A maquina GANHOU!";
  }
};
