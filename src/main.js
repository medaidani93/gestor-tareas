import "./style.css";
import { render } from "./dom.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();

/*
// === RETO 1: Predice antes de ejecutar ===

const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);
// Resultado A: 0 0
// Explicación: Todavía no existe ningún elemento con la clase "prueba" en el DOM.

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);
// Resultado B: 1 0
// Explicación: getElementsByClassName devuelve una HTMLCollection "viva" que se actualiza sola al insertar el <li> (1), mientras que querySelectorAll devuelve una NodeList estática ("foto" del momento en que se ejecutó: 0).
// Texto en pantalla del <li>: muestra literalmente "<b>Nueva</b>" (sin negrita) porque textContent escapa las etiquetas HTML y las trata como texto plano.

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);
// Resultado C: Gestor 1
// Explicación: innerHTML sí interpreta la etiqueta <em> como un elemento hijo real (children.length = 1), y textContent devuelve solo el texto limpio interior ("Gestor").

console.log("D:", document.getElementById("#lista"));
// Resultado D: null
// Explicación: getElementById recibe únicamente el nombre del id ("lista"), sin el símbolo "#" de los selectores CSS.


*/
