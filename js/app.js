//El contenido principal está organizado en una serie de elementos HTML, incluyendo un formulario, una tabla y botones.

// Tu código aquí
//selecciono elementos HTML por sus IDs
const generateButton = document.getElementById('btn');
const nameElement = document.getElementById('first');
const lastNameElement = document.getElementById('last');
const countryElement = document.getElementById('country');
const phoneElement = document.getElementById('phone');
const emailElement = document.getElementById('email');

//agrego un evento de click al botón
generateButton.addEventListener('click', function () {
    console.log('Botón "generate person" clicado');
    //solicitud a la API para obtener datos de una persona aleatoria
    fetch('https://randomuser.me/api/?result=100')
        .then((response) => response.json())
        .then((data) => {
            console.log('Datos obtenidos de la API');

            //extraigo los datos desde la respuesta de la API
            const person = data.results[0];
            const firstName = person.name.first;
            const last = person.name.last;
            const country = person.location;
            const phone = person.phone;
            const email = person.email;
            console.log('Botón "generate person" clicado');


            //mapeo los datos en los campos de la página
            nameElement.textContent = firstName;
            lastNameElement.textContent = last;
            countryElement.textContent = country;
            phoneElement.textContent = phone;
            emailElement.textContent = email;
            
            //obtengo la URL de la imagen
            const profilePicture = person.picture.large;
            //actualizo la imagen del perfil
            const img = document.getElementById('photo');
            img.src = profilePicture;
        });
    });
