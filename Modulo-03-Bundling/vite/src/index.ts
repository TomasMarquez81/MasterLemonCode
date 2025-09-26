import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import titleclass from "./title.module.scss";
import logoImg from "./content/logo.png";

console.log(import.meta.env.VITE_ENV_MESSAGE);

const titleText = "Superman en Vite"
const title =document.getElementById("title")
title.textContent = titleText
title.classList.add(titleclass.titleClass)

const msgConsole = "My Vite Superman";
console.log(`Mensaje:  ${msgConsole}!`);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
