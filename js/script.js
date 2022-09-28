// Variable que guarda la referencia al formulario
const form = document.querySelector('#formQuestion')
// Variable que guarda la referencia al input
const question = document.querySelector('#question')
// Variable que guarda la referencia de container
const  container = document.querySelector('#container')
// Variable que guarda el contenido del html
const content = document.querySelector('#content')


// addEventListener: añadir un evento, escuchar un evento.
// e = es como una variable que el evento submit le pasa a la funcion que se ejecuta.
// preventDefault: para evitar que se recargue la pagina al darle enviar al form. 
// .value = sacar el valor
// document.querySelector('#h1').innerHTML = question.value ====  innerhtml busca el div con el h1 y escribe html dentro de ese div.
// then permite capturar las promesas. cuando se resuelva, hace algo. 

const getDecision = async () => {
    return await fetch ('https://yesno.wtf/api').then(res => res.json())
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(question.value);
    const questionValue = question.value.trim() // limpia de espacios al principio y final de la frase del input para que no les muestre en pantalla
    if (questionValue.length === 0) return; // si el texto del input esta vacio, no hará nada. 
    if (questionValue.charAt(questionValue.length-1) != '?') return; /* con charAt detecta una palabra de un string. Con esto le decimos que SI NO TIENE
     el simbolo interrogante dentro de la ultima posicion de questionValue (texto del input), entonces no haga nada. */

    const decision = await getDecision();
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${decision.image})`;

    // Crear estilos a ese documento, mostrará la pregunta y la respuesta
    let html = `<h1>${question.value}</h1>`;
    html += `<h1 class="decision">${decision.answer}</h1>`
    content.innerHTML = html;
    question.value = ''; // para que el input se vacie una vez le de al enter


    // console.log(decision)
    // document.querySelector('#content').innerHTML = `<h1>${question.value}</h1>
    // <img src="${decision.image}">
    // `
}) 



