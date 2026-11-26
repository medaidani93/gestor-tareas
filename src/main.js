import "./style.css";
import { estado } from "./estado.js";
import { agregarTarea, toggleTarea, borrarTarea } from "./tareas.js";
import { render } from "./dom.js";

// 1. Pintamos la vista inicial
render();

// 2. Primer evento: botón de modo oscuro
const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

// 3. Interceptamos el envío del formulario para crear tareas
const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const texto = input.value.trim();
  if (!texto) return;

  estado.tareas = agregarTarea(estado.tareas, texto);
  input.value = "";
  input.focus();
  render();
});

// 4. Delegación de eventos sobre la lista para completar y borrar
const lista = document.querySelector("#lista");

lista.addEventListener("click", (e) => {
  const boton = e.target.closest("button[data-accion]");
  if (!boton) return;

  const li = boton.closest("li");
  const id = Number(li.dataset.id); // Convertimos el string de dataset a Number
  const accion = boton.dataset.accion;

  if (accion === "toggle") {
    estado.tareas = toggleTarea(estado.tareas, id);
    render();
  } else if (accion === "borrar") {
    estado.tareas = borrarTarea(estado.tareas, id);
    render();
  }
});