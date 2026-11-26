import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const contenedorTabla = document.querySelector("#tabla-notas");
  const resumenNotas = document.querySelector("#resumen-notas");

  // 1. Limpiamos el contenedor antes de repintar
  contenedorTabla.replaceChildren();

  // 2. Creamos la tabla y su cabecera (<thead>)
  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const filaCabecera = document.createElement("tr");

  const thAlumno = document.createElement("th");
  thAlumno.textContent = "Alumno";

  const thNota = document.createElement("th");
  thNota.textContent = "Nota";

  filaCabecera.append(thAlumno, thNota);
  thead.append(filaCabecera);

  // 3. Creamos el cuerpo (<tbody>) con los alumnos ordenados sin mutar el original
  const tbody = document.createElement("tbody");
  const alumnosOrdenados = alumnos.toSorted((a, b) => b.nota - a.nota);

  for (const alumno of alumnosOrdenados) {
    const tr = document.createElement("tr");

    if (alumno.nota >= 5) {
      tr.classList.add("aprobado");
    } else {
      tr.classList.add("suspenso");
    }

    const tdNombre = document.createElement("td");
    tdNombre.textContent = alumno.nombre;

    const tdNota = document.createElement("td");
    tdNota.textContent = alumno.nota;

    tr.append(tdNombre, tdNota);
    tbody.append(tr);
  }

  tabla.append(thead, tbody);
  contenedorTabla.append(tabla);

  // 4. Pintamos el resumen usando las funciones puras
  const media = calcularMedia(alumnos);
  const aprobados = contarAprobados(alumnos);
  resumenNotas.textContent = `Media: ${media} · Aprobados: ${aprobados} de ${alumnos.length}`;
}