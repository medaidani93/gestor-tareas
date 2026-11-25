// ==========================================
// ARCHIVO: src/dom.js
// ==========================================

import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  // 1. Vaciamos la lista para repintar desde cero
  lista.replaceChildren();

  // 2. Iteramos sobre los datos y generamos los nodos correspondientes
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;

    if (tarea.completada) {
      li.classList.add("completada");
    }

    lista.append(li);
  }

  // 3. Sincronizamos el recuento de pendientes
  const pendientes = contarPendientes(estado.tareas);
  resumen.textContent = `Tienes ${pendientes} tareas pendientes`;
}