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


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const animalesDisponibles = [
    { nombre: 'Luna', raza: 'Labrador', edad: '2 años' },
    { nombre: 'Rocky', raza: 'Pastor Alemán', edad: '1 año' },
    { nombre: 'Bella', raza: 'Golden Retriever', edad: '3 años' },
    { nombre: 'Max', raza: 'Husky', edad: '2 años' },
    { nombre: 'Coco', raza: 'Beagle', edad: '1 año' }
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

        
        await delay(500);
        actualizarProgreso(30);
        await delay(500);
        actualizarProgreso(60);
        await delay(500);
        actualizarProgreso(90);
        await delay(500);
        actualizarProgreso(100);

       
        await delay(500);

        
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

boton.addEventListener('click', obtenerAnimales);




  