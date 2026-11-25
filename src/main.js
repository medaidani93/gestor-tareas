import "./style.css";
import { render } from "./dom.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();