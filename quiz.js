const preguntaasasa = document.getElementById("pregunta")

preguntaasasa.innerHTML= "Quien es este Pokemon"

const preguntas = [
    {
        id: 1,
        pregunta: "¿Cuál es el Pokémon inicial de tipo fuego en la región de Kanto?",
        respuestas: {
            respuesta1: "Charmander",
            respuesta2: "Squirtle",
            respuesta3: "Bulbasaur",
            respuesta4: "Pikachu"
        },
        correcta: 1
    },
    {
        id: 2,
        pregunta: "¿Qué tipo de Pokémon es Pikachu?",
        respuestas: {
            respuesta1: "Eléctrico",
            respuesta2: "Fuego",
            respuesta3: "Agua",
            respuesta4: "Planta"
        },
        correcta: 1
    },
    {
        id: 3,
        pregunta: "¿Cuál es el Pokémon legendario de tipo dragón en la región de Sinnoh?",
        respuestas: {
            respuesta1: "Rayquaza",
            respuesta2: "Dialga",
            respuesta3: "Palkia",
            respuesta4: "Giratina"
        },
        correcta: 2
    },
    {
        id: 4,
        pregunta: "¿Cuál es el Pokémon inicial de tipo planta en la región de Johto?",
        respuestas: {
            respuesta1: "Chikorita",
            respuesta2: "Cyndaquil",
            respuesta3: "Totodile",
            respuesta4: "Pichu"
        },
        correcta: 1
    },
    {
        id: 5,
        pregunta: "¿Cuál es el Pokémon legendario que representa el equilibrio del tiempo en la región de Sinnoh?",
        respuestas: {
            respuesta1: "Rayquaza",
            respuesta2: "Dialga",
            respuesta3: "Palkia",
            respuesta4: "Giratina"
        },
        correcta: 2
    },
    {
        id: 6,
        pregunta: "¿Cuál es el Pokémon inicial de tipo agua en la región de Kalos?",
        respuestas: {
            respuesta1: "Froakie",
            respuesta2: "Chespin",
            respuesta3: "Fennekin",
            respuesta4: "Pikachu"
        },
        correcta: 1
    },
    {
        id: 7,
        pregunta: "¿Cuál es el Pokémon que evoluciona en Blastoise?",
        respuestas: {
            respuesta1: "Charmander",
            respuesta2: "Squirtle",
            respuesta3: "Bulbasaur",
            respuesta4: "Pikachu"
        },
        correcta: 2
    },
    // Añade más preguntas aquí...
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


let Correctas = 0
let Racha = 0
function responder(respuesta) {
    console.log("holaaaa");
    respuesta.classList += " incorrect-quiz "
    if (respuesta.classList.contains("correct")) {
        respuesta.classList = "correct-quiz"
        Correctas++



        

        let numeroAleatorio = Math.floor(Math.random() * cantidadPreguntas );


        console.log("numeroAle",numeroAleatorio);
        const cososta = indexPreguntas[numeroAleatorio]
        console.log(indexPreguntas,cososta );


        if (cantidadPreguntas === 0) {
            setTimeout(() => {
                if (Correctas > Racha) {
                    Racha = Correctas
                }
                const contenedorRespustas = document.querySelector('.contenedor-respuestas')
                while (contenedorRespustas.firstChild) {
                    contenedorRespustas.removeChild(contenedorRespustas.firstChild);
                }
                const lugarPregunta = document.getElementById("pregunta")
                lugarPregunta.innerHTML='Fin'
                contenedorRespustas.innerHTML = `Racha = ${Racha}`
                contenedorRespustas.style['grid-template-columns'] = '1fr';
            },1000);
            
            
        }else{
            setTimeout(() => {setQuiz(cososta)}, 1000);

            cantidadPreguntas--

            console.log("indicies antes",indexPreguntas);

            indexPreguntas.splice(numeroAleatorio,1)

            console.log("indicies despues",indexPreguntas);
        }
        
        
    }else{
        if (Correctas > Racha) {
            Racha = Correctas
        }
        Correctas = 0
    }
    console.log("boton");


    
}

posiblesArray.forEach((element, index) => {
    element.addEventListener("click", () => {
        responder(element);
        
    });
});


