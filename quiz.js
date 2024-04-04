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





setQuiz(1)


function responder(respuesta) {
    console.log("holaaaa");
    respuesta.classList += " incorrect-quiz "
    if (respuesta.classList.contains("correct")) {
        respuesta.classList = "correct-quiz"
        const numeroAleatorio = Math.floor(Math.random() * 3);
        setTimeout(() => {setQuiz(numeroAleatorio)}, 1000);
        console.log("boton correcto");
    }
    console.log("boton");
    
}

posiblesArray.forEach((element, index) => {
    element.addEventListener("click", () => {
        responder(element);
        
    });
});


