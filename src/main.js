// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Calcula las pendientes y completadas y muestra un resumen en el contenedor de la página
const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);

document.querySelector("#app").textContent = `${completadas} completadas, ${pendientes} pendientes`;