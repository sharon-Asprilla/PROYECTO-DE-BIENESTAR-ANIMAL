fetch('https://dog.ceo/api/breeds/image/random')
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

  