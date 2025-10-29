const boton = document.getElementById('btn-animales');
const textoAnimales = document.getElementById('texto-animales');

// Función asíncrona para consumir la API
async function obtenerRazasDePerros() {
  textoAnimales.textContent = 'Cargando la lista de razas disponibles para adoptar...';

  try {
    const respuesta = await fetch('https://dog.ceo/api/breeds/list/all');

    if (!respuesta.ok) {
      throw new Error(`Error al obtener razas: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    const razas = Object.keys(datos.message);

    // Simulamos carga con setTimeout
    setTimeout(() => {
      textoAnimales.innerHTML = ''; // Limpiar mensaje de carga

      const lista = document.createElement('ul');
      razas.forEach(raza => {
        const item = document.createElement('li');
        item.textContent = raza;
        lista.appendChild(item);
      });

    


      textoAnimales.appendChild(lista);
    }, 5000); // 1.5 segundos de espera

  } catch (error) {
    textoAnimales.textContent = 'No se pudieron cargar los datos. Intenta más tarde.';
    console.error('Error al consumir la API:', error);
  }
}

// Evento al hacer clic
boton.addEventListener('click', obtenerRazasDePerros);
