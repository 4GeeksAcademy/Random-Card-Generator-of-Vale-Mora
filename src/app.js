/* eslint-disable */
import "bootstrap";
import "./style.css";

const numbersOfCards = [
  "A",
  "J",
  "Q",
  "K",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
const cardsSuits = ["♦", "♥", "♠", "♣"];

window.onload = () => {
  const randomCards = document.getElementById("Cards");

  let randomNumbersOfCards =
    numbersOfCards[Math.floor(Math.random() * numbersOfCards.length)];
  let randomCardsSuits =
    cardsSuits[Math.floor(Math.random() * cardsSuits.length)];

  const leftSuit = document.createElement("div");
  randomCards.appendChild(leftSuit);
  leftSuit.innerHTML = randomCardsSuits;
  leftSuit.style.fontSize = "90px";
  leftSuit.style.paddingLeft = "15px";

  const newBodyOfCard = document.createElement("div");
  randomCards.appendChild(newBodyOfCard);
  newBodyOfCard.innerHTML = randomNumbersOfCards;
  newBodyOfCard.style.fontSize = "90px";
  newBodyOfCard.style.textAlign = "center";

  const rightSuit = document.createElement("div");
  randomCards.appendChild(rightSuit);
  rightSuit.innerHTML = randomCardsSuits;
  rightSuit.style.fontSize = "90px";
  rightSuit.style.textAlign = "start";
  rightSuit.style.transform = "rotate(180deg)";
  rightSuit.style.paddingLeft = "15px";

  if (randomCardsSuits === "♦" || randomCardsSuits === "♥") {
    newBodyOfCard.style.color = "red";
    leftSuit.style.color = "red";
    rightSuit.style.color = "red";
  } else {
    newBodyOfCard.style.color = "black";
    leftSuit.style.color = "black";
    rightSuit.style.color = "black";
  }
};
