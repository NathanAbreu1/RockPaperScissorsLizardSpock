const resultText = document.querySelector("#result");
const AIText = document.querySelector("#AItext");
const playerText = document.querySelector("#playertext");
const choice = document.querySelector("choice");
let player;
let AI;
let result;

choice.forEach((choice) =>
  choice.addEventListener("click", () => {
    player = choice.playerText;
    AITurn();
  })
);

function AITurn(){

  const randnumber = Math.floor(math.random() * 5) + 1;

  switch(randNum){
    computer 
  }
}
