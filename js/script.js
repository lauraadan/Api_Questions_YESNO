// Variable que guarda las referencias del html
const form = document.querySelector('#formQuestion')
const question = document.querySelector('#question')
const  container = document.querySelector('#container')
const content = document.querySelector('#content')


// document.querySelector('#h1').innerHTML = question.value ====  innerhtml busca el div con el h1 y escribe html dentro de ese div.
/* Then retorna una promesa. Recibe dos argumentos: funciones callback para los casos de exito y fallo de Promise. Permite capturar promesas, 
cuando se resuelve, hace algo */

const getDecision = async () => {
    return await fetch ('https://yesno.wtf/api').then(res => res.json()) // se guarda la informacion de la api en la variable res
}

/* obtenemos el formulario del html y le aplicamos una funcion addeventlistener, 
que al enviar la informacion escrita en el input realice la siguiente funcion asincrona */
// preventDefault: para evitar que se recargue la pagina al darle enviar al form. 
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log(question.value); // visualizamos por consola el valor del input escrito en su interior

    const questionValue = question.value.trim() // trim limpia de espacios al principio y final de la frase del input para que no les muestre en pantalla
    if (questionValue.length === 0) return; // si el texto del input esta vacio, no hará nada. 
    if (questionValue.charAt(questionValue.length-1) != '?') return; /* con charAt detecta una palabra de un string. Con esto le decimos que SI NO TIENE
     el simbolo interrogante dentro de la ultima posicion de questionValue (texto del input), entonces no haga nada. */

    const decision = await getDecision(); // llamamos a los datos obtenidos de la api anteriormente
    //console.log(decision)
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${decision.image})`; /* Inserta una imagen
    cuando se añade el input correctamente y se envian los datos. Como resultado de backgrounImage obtenemos un gif que proviene de la api*/

    // Crear estilos a ese documento, mostrará la pregunta y la respuesta
    let html = `<h1>${question.value}</h1>`; // crear un h1 que muestre nuestra pregunta en pantalla
    html += `<h1 class="decision">${decision.answer}</h1>` // crear un h1 que muestre la respuesta en pantalla. Esta respuesta (answer) se obtiene de la api
    content.innerHTML = html; // añadimos la pregunta y la respuesta dentro del div content creado en html.
    question.value = ''; // El input se vacía cuando le damos al enter
}) 



