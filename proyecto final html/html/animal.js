
const nombreInput = document.getElementById("nombre");
const especieInput = document.getElementById("especie");
const identificacionSelect = document.getElementById("identificacion");
const adopcionSelect = document.getElementById("adopcion");
const botonEnviar = document.getElementById("enviar");
const listaAnimales = document.getElementById("listaAnimales");

let animales = [];


botonEnviar.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const especie = especieInput.value.trim();
  const identificacion = identificacionSelect.value;
  const adopcion = adopcionSelect.value;

  if (!nombre || !identificacion ) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const nuevoAnimal = {
    nombre,
    especie,
    identificacion,
    adopcion,
  };

  animales.push(nuevoAnimal);
  actualizarLista();

  
  nombreInput.value = "";
  especieInput.value = "";
  identificacionSelect.value = "";
  adopcionSelect.value = "";
});


function actualizarLista() {
  listaAnimales.innerHTML = "";

  if (animales.length === 0) {
    listaAnimales.innerHTML = "<li>No hay animales registrados aún</li>";
    return;
  }

  animales.forEach((animal, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${animal.nombre} - ${animal.especie} - ${animal.identificacion} - ${animal.adopcion}`;
    listaAnimales.appendChild(li);
  });
}


  if (animales.length === 0) {
    listaAnimales.innerHTML = "<li>No hay animales registrados aún</li>";
  }
