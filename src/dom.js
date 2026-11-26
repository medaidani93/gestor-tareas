import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  /* 
      Error 1:
      (a) Qué veo: En pantalla no se muestra ni el resumen ni la lista de tareas, y en consola sale:
          Uncaught TypeError: Cannot read properties of null (reading 'replaceChildren')
      (b) Qué línea lo provoca y por qué: La línea `document.getElementById("#lista")`,
          porque getElementById no usa el símbolo "#" de los selectores CSS y al no encontrar el nodo devuelve null.
  */
  const lista = document.getElementById("lista");
  const resumen = document.querySelector("#resumen");

  /*
      Error 2:
      (a) Qué veo: En pantalla solo aparece la última tarea ("Pintar la lista desde el estado con render()") en lugar de toda la lista.
      (b) Qué línea lo provoca y por qué: La línea `lista.replaceChildren();` está dentro del bucle `for...of`, por lo que en cada iteración borra los <li> creados en las vueltas anteriores y solo sobrevive el último.
  */
  lista.replaceChildren();

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
        /*
        Error 3:
        (a) Qué veo: Todas las tareas de la lista aparecen tachadas en pantalla, aunque algunas no estén completadas.
        (b) Qué línea lo provoca y por qué: La condición `if (tarea.completada = true)` usa el operador de asignación (`=`) en lugar de comparación, por lo que modifica todas las tareas a `true` y siempre entra en el `if` añadiendo la clase `"completada"`.
        */
    if (tarea.completada) {
      li.classList.add("completada");
    }
    if (tarea.completada = true) {
      li.classList.add("completada");
    }
    lista.append(li);
  }

  resumen.textContent = `Tienes ${contarPendientes} tareas pendientes`;
}