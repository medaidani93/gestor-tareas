import "./style.css";
import { render } from "./dom.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();

// --- Mini-Reto 2 (temporal) ---
const lista = document.querySelector("#lista");
const textosDemo = ["Primera demo", "Segunda demo", "Tercera demo"];

textosDemo.forEach((texto) => {
  const li = document.createElement("li");
  li.classList.add("demo");
  li.textContent = texto;
  lista.appendChild(li);
});

const itemsDemo = document.querySelectorAll(".demo");
itemsDemo.forEach((item) => {
  item.textContent = `- ${item.textContent}`;
});

// --- Mini-Reto 2b: getElementById, getElementsByClassName y HTMLCollection ---

// 1. Seleccionar #lista con getElementById:
// Respuesta: NO lleva "#", porque el método ya espera directamente el nombre del id (no un selector CSS).
const listaPorId = document.getElementById("lista");

// 2. Seleccionar elementos con clase demo usando getElementsByClassName (sin punto):
const demosHtmlCollection = document.getElementsByClassName("demo");

// 3. Intentar recorrerlos con .forEach:
// demosHtmlCollection.forEach((item) => console.log(item));
// Mensaje de error de la consola: Uncaught TypeError: demosHtmlCollection.forEach is not a function
// (Ocurre porque getElementsByClassName devuelve un HTMLCollection, no un Array ni una NodeList con .forEach).

// 4. Recorrer correctamente con Array.from(...) y cambiar "- " por "✓ ":
Array.from(demosHtmlCollection).forEach((item) => {
  item.textContent = item.textContent.replace("- ", "✓ ");
});

// 5. ¿La HTMLCollection es viva o estática? ¿Y la NodeList de querySelectorAll?
// - La HTMLCollection (getElementsByClassName) es VIVA (live): se actualiza automáticamente si el DOM cambia.
// - La NodeList que devuelve querySelectorAll es ESTÁTICA (static): es una foto fija del momento en que se consulta.