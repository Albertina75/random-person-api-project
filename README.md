# Gente random

[Random Person Api](https://randomuser.me/)
 

Disponemos de una API https://randomuser.me/api/ que cada vez que la invocamos, nos trae información sobre una persona ficticia.

Mapea los datos de dicha persona tal como se aprecia en esta [Demo](https://js-beginners.github.io/random-person-api-project/)

NOTA: El campo Location/Country no está en la demo, pero tú si deberías mapearlo.

## NUEVOS REQUISITOS 2022

1. Elimina el botón de obtener persona. Ahora, al cargar la aplicación, cada 5 segundos, debe generarse una persona totalmente nueva

2. Vamos a simular que eres la responsable de RRHH. Usa el botón con id="btnInterview", de manera que guarde el nombre de la persona junto a su teléfono en la tabla id="call-interview" , en una nueva fila (simula una tabla con la lista de personas ). 

Para hace el punto 2; se recomienda crear una función que simplemente se encargue de añadir una nueva fila a la tabla. 

```
function addNewContact(name, phone) {
    // ...
}
```

Y luego gestionar el click para que invoque esta función con los parámetros adecuados.
