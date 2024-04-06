const preguntaasasa = document.getElementById("pregunta")

preguntaasasa.innerHTML= "Quien es este Pokemon"

const preguntas = [
    {
        id: 1,
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: {
            respuesta1: "París",
            respuesta2: "Londres",
            respuesta3: "Madrid",
            respuesta4: "Berlín"
        },
        correcta: 1
    },
    {
        id: 2,
        pregunta: "¿Quién escribió 'El Quijote'?",
        respuestas: {
            respuesta1: "William Shakespeare",
            respuesta2: "Miguel de Cervantes",
            respuesta3: "Federico García Lorca",
            respuesta4: "Jorge Luis Borges"
        },
        correcta: 2
    },
    {
        id: 3,
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: {
            respuesta1: "Yangtsé",
            respuesta2: "Nilo",
            respuesta3: "Misisipi",
            respuesta4: "Amazonas"
        },
        correcta: 4
    }
];

let cantidadPreguntas = preguntas.length 

const indexPreguntas = preguntas.map((e,i)=>i)



const posible1 = document.getElementById("opcion-1")
const posible2 = document.getElementById("opcion-2")
const posible3 = document.getElementById("opcion-3")
const posible4 = document.getElementById("opcion-4")
const posiblesArray = [posible1,posible2,posible3,posible4]

function setQuiz(idNumber) {
    const lugarPregunta = document.getElementById("pregunta")
    


    lugarPregunta.innerHTML = preguntas[idNumber].pregunta

    
    

    
    //chatGPT
    posiblesArray.forEach((element, index) => {
        // Acceder a las respuestas de acuerdo al índice
        const respuestaKey = "respuesta" + (index + 1);
        element.value = preguntas[idNumber].respuestas[respuestaKey];
        element.classList=""

        if ((index+1) === preguntas[idNumber].correcta) {
            element.classList.add("correct")
        }
    });

    
}




const setQuizer = Math.floor(Math.random() * cantidadPreguntas );

// Obtenemos el índice real de la pregunta
setQuiz(indexPreguntas[setQuizer]); // Mostramos la pregunta
console.log(indexPreguntas[setQuizer]);
// Eliminamos la pregunta del array indexPreguntas
console.log("indicies antes",indexPreguntas);
indexPreguntas.splice(setQuizer,1)
console.log("indicies despues",indexPreguntas);
cantidadPreguntas--
console.log("setQuizer",setQuizer);

function responder(respuesta) {
    console.log("holaaaa");
    respuesta.classList += " incorrect-quiz "
    if (respuesta.classList.contains("correct")) {
        respuesta.classList = "correct-quiz"

        console.log("cantidad",cantidadPreguntas);

        let numeroAleatorio = Math.floor(Math.random() * cantidadPreguntas );


        console.log("numeroAle",numeroAleatorio);
        const cososta = indexPreguntas[numeroAleatorio]
        console.log(indexPreguntas,cososta );
        
        setTimeout(() => {setQuiz(cososta)}, 1000);

        cantidadPreguntas--

        console.log("indicies antes",indexPreguntas);

        indexPreguntas.splice(numeroAleatorio,1)

        console.log("indicies despues",indexPreguntas);
    }
    console.log("boton");
    
}

posiblesArray.forEach((element, index) => {
    element.addEventListener("click", () => {
        responder(element);
        
    });
});


