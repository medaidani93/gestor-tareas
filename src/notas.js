export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export function calcularMedia(listaAlumnos) {
  if (listaAlumnos.length === 0) return 0;
  const suma = listaAlumnos.reduce((acc, alumno) => acc + alumno.nota, 0);
  return Number((suma / listaAlumnos.length).toFixed(1));
}

export function contarAprobados(listaAlumnos, notaCorte = 5) {
  return listaAlumnos.filter((alumno) => alumno.nota >= notaCorte).length;
}