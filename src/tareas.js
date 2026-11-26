// 1. Contadores
export function contarPendientes(tareas) {
  return tareas.filter((tarea) => !tarea.completada).length;
}

export function contarCompletadas(tareas) {
  return tareas.filter((tarea) => tarea.completada).length;
}

// 2. Crear tarea (inmutable con spread)
export function agregarTarea(tareas, texto) {
  const nuevaTarea = {
    id: Date.now(),
    texto,
    completada: false,
  };
  return [...tareas, nuevaTarea];
}

// 3. Alternar completado (.map() + spread)
export function toggleTarea(tareas, id) {
  return tareas.map((tarea) =>
    tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
  );
}

// 4. Borrar tarea (.filter())
export function borrarTarea(tareas, id) {
  return tareas.filter((tarea) => tarea.id !== id);
}