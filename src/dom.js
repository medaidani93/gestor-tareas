import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  lista.replaceChildren();

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.dataset.id = String(tarea.id);

    if (tarea.completada) {
      li.classList.add("completada");
    }

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const btnToggle = document.createElement("button");
    btnToggle.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnToggle.dataset.accion = "toggle";

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "✕";
    btnBorrar.dataset.accion = "borrar";

    li.append(span, btnToggle, btnBorrar);
    lista.append(li);
  }

  const pendientes = contarPendientes(estado.tareas);
  const completadas = contarCompletadas(estado.tareas);
  resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}