/*fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error al consumir la API:', error);
  });

  

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error al consumir la API:', error);
  });
  */



const boton = document.getElementById('btn-animales');
const textoAnimales = document.getElementById('texto-animales');




const animalesDisponibles = [
    { nombre: 'Luna', raza: 'Labrador', edad: '2 años' },
    { nombre: 'Rocky', raza: 'Pastor Alemán', edad: '5 años' },
    { nombre: 'mindy', raza: 'Golden Retriever', edad: '3 años' },
    { nombre: 'Max', raza: 'Husky', edad: '2 años' },
    { nombre: 'mona', raza: 'Beagle', edad: '1 año' }
];


function actualizarProgreso(porcentaje) {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${porcentaje}%`;
    }
}

// Función  asíncrona de los animales que en realidad son perros
async function obtenerAnimales() {
    try {
      
        textoAnimales.innerHTML = `
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
            <div class="mensaje-contenedor">
                <p>Cargando lista de animales...</p>
            </div>
        `;

        
    // Usamos setTimeout para simular la cosa cargar
    actualizarProgreso(0);

    setTimeout(() => actualizarProgreso(70), 600);
    setTimeout(() => actualizarProgreso(100), 3500);
    setTimeout(() => actualizarProgreso(100), 3500);
    setTimeout(() => actualizarProgreso(200), 3000);

    setTimeout(() => {
      try {
        const contenidoHTML = animalesDisponibles
          .map(animal => `
            <div class="animal-card">
              <h3>${animal.nombre}</h3>
              <p>Raza: ${animal.raza}</p>
              <p>Edad: ${animal.edad}</p>
            </div>
          `)
          .join('');

        textoAnimales.innerHTML = `
          <div class="animales-grid">
            ${contenidoHTML}
          </div>
        `;
      } catch (renderErr) {
        textoAnimales.innerHTML = `
          <div class="mensaje-error">
            <p>Error al mostrar los datos.</p>
          </div>
        `;
        console.error('Error renderizando animales:', renderErr);
      }
    }, 2300);

    } catch (error) {
        textoAnimales.innerHTML = `
            <div class="mensaje-error">
                <p>Error: No se pudo cargar la lista de animales.</p>
                <p>Por favor, intenta de nuevo.</p>
            </div>
        `;
        console.error('Error:', error);
    }
}


async function fetch() {
  const contenedor = document.getElementById('texto-animales');
  if (!contenedor) throw new Error('No existe ');

  contenedor.innerHTML = '<div class="mensaje-contenedor"><p>Cargando...</p></div>';

  const url = 'https://dog.ceo/api/breeds/list/all';

  try {
    const respuesta = await fetch(url); 
    if (!respuesta.ok) {
     
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json(); 

    
    return datos; 

  } catch (error) {
   
    contenedor.innerHTML = '<div class="mensaje-error"><p>No se pudieron cargar los datos. Intenta más tarde.</p></div>';
    console.error('Error ', error);
    
    throw error;
  }
}

boton.addEventListener('click', obtenerAnimales);




  