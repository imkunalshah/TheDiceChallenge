var random1 = Math.random() * 6 + 1;
random1 = Math.floor(random1);

var random2 = Math.random() * 6 + 1;
random2 = Math.floor(random2);

if (random1===1) {

}

switch (random1) {
  case 1:
    document.querySelector("#dice1").setAttribute("src","dice-one-solid.svg");
    break;
  case 2:
    document.querySelector("#dice1").setAttribute("src","dice-two-solid.svg");
    break;
  case 3:
    document.querySelector("#dice1").setAttribute("src","dice-three-solid.svg");
    break;
  case 4:
    document.querySelector("#dice1").setAttribute("src","dice-four-solid.svg");
    break;
  case 5:
    document.querySelector("#dice1").setAttribute("src","dice-five-solid.svg");
    break;
  case 6:
    document.querySelector("#dice1").setAttribute("src","dice-six-solid.svg");
    break;
}

switch (random2) {
  case 1:
    document.querySelector("#dice2").setAttribute("src","dice-one-solid.svg");
    break;
  case 2:
    document.querySelector("#dice2").setAttribute("src","dice-two-solid.svg");
    break;
  case 3:
    document.querySelector("#dice2").setAttribute("src","dice-three-solid.svg");
    break;
  case 4:
    document.querySelector("#dice2").setAttribute("src","dice-four-solid.svg");
    break;
  case 5:
    document.querySelector("#dice2").setAttribute("src","dice-five-solid.svg");
    break;
  case 6:
    document.querySelector("#dice2").setAttribute("src","dice-six-solid.svg");
    break;
}

if (random1 > random2) {
  document.querySelector("#heading").innerHTML = "Player 1 Wins";
}
else if(random2 > random1) {
  document.querySelector("#heading").innerHTML = "Player 2 Wins";
}
else {
  document.querySelector("#heading").innerHTML = "It's a draw";
}
