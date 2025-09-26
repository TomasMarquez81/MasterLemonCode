import { getAvg } from "./averageService.ts";
import logoImg from "./content/logo.png";
//import "./style.css";
import "./style.scss";

//const randomNumber = Math.random() * 100;
const scores = [2, 3, 2, 1.1, 2, 3];
const averageScore = getAvg(scores);

//const messageToDisplay = `Random number is ${randomNumber}`;
const messageToDisplay = `Media de tiempo de los 500km:  ${averageScore}`;

const messageElement = document.createElement("p");
messageElement.className ="final";
messageElement.textContent = messageToDisplay;
document.body.appendChild(messageElement);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
