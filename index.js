var ai;
var user;

function game(x) {
  var list = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];
  var comp_value = Math.floor(Math.random() * 5);
  document.getElementById("computer").innerHTML = list[comp_value];
  document.getElementById("user").innerHTML = user();
}

function user(x) {
  if ((onclick = document.getElementById("rock"))) {
    return rock;
  }
}

function check_winner() {}
