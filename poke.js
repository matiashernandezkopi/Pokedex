/*
<div class="body">

    <div class="pokemon">
            <div class="info">
                <nav class="gen">S1</nav>
                <h3 class="nombre">Charmander</h3>
                <nav class="numero">004</nav>
            </div>
            
            <div class="imagen">imagen</div>
            
            <div class="tipos">
                
                <input type="button" value="Fuego"class="tipo tipo1">
                
            </div>
    </div>
             
*/
const body = document.getElementById("pokeSection")

function PokeInsertar(poke) {
    
    let tipos = poke.types.map((type, index)=> `<p class="${type.type.name} tipo tipo${index+1}">${type.type.name}</p>`) 
    tipos = tipos.join('')

    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML=`
    
            <div class="info">
                <nav class="gen">S1</nav>
                <h3 class="nombre">${poke.name}</h3>
                <nav class="numero">${poke.id.toString().padStart(3, '0')}</nav>
            </div>
            
            <div class="imagen"><img src="${poke.sprites.front_default}" alt="${poke.name}"></div>
            
            <div class="tipos">
                ${tipos}
                
            </div>
    
    
    `

    



    body.append(div)


}


for (let i = 1; i <= 151; i++) {
    const pokemon = "https://pokeapi.co/api/v2/pokemon/"+i;
    fetch(pokemon)
        .then((respuesta)=>respuesta.json())
        .then(data=>PokeInsertar(data))
}



const filtroInput = document.getElementById("filtro");


function filtrarPokemons() {
    const filtroTexto = filtroInput.value.toLowerCase(); // Obtener el texto del filtro en minúsculas
    const pokemons = document.querySelectorAll('.pokemon'); // Obtener todos los elementos con la clase .pokemon
    
    pokemons.forEach(pokemon => {
        const nombrePokemon = pokemon.querySelector('.nombre').textContent.toLowerCase(); // Obtener el nombre del pokemon en minúsculas
        const numeroPokemon = parseInt(pokemon.querySelector('.numero').textContent); // Obtener el número del pokemon y convertirlo a entero
        
        // Comprobar si el nombre del pokemon o el número del pokemon coincide con el filtro
        if (nombrePokemon.includes(filtroTexto) || numeroPokemon.toString().includes(filtroTexto)) {
             pokemon.style.display = 'block'; // Mostrar el pokemon si coincide con el filtro
        } else {
            pokemon.style.display = 'none'; // Ocultar el pokemon si no coincide con el filtro
        }
    });

    
    pokemons.forEach(pokemon => {

        if (tiposSelec.length === 0) {
            
        }else{
            
            tiposSelec.forEach((tipo)=>{
                const tipo1PokemonElement = pokemon.querySelector('.tipo1');
                const tipo2PokemonElement = pokemon.querySelector('.tipo2');
                
                // Verificar si los elementos de tipo existen antes de acceder a su contenido
                const tipo1Pokemon = tipo1PokemonElement ? tipo1PokemonElement.textContent.toLowerCase() : '';
                const tipo2Pokemon = tipo2PokemonElement ? tipo2PokemonElement.textContent.toLowerCase() : '';
                
                // Comprobar si el nombre del pokemon o el número del pokemon coincide con el filtro
                if (tipo1Pokemon === tipo && pokemon.style.display === 'block' || tipo2Pokemon === tipo && pokemon.style.display === 'block') {
                    pokemon.style.display = 'block'; // Mostrar el pokemon si coincide con el filtro
                } else {
                    pokemon.style.display = 'none'; // Ocultar el pokemon si no coincide con el filtro
                }
            })
        
        }

    });
}

// Agregar el event listener al input para activar la función cargarPokemons en cada cambio
filtroInput.addEventListener("input", filtrarPokemons);




const tiposSelec = []
const contenedorFiltros = document.getElementById('filtrador')


function agregQuitarFiltro(tipo) { 
    return function() { // Envolver la lógica en una función para asegurar que 'tipo' se pase correctamente
        if (tiposSelec.includes(tipo)) {
            const index = tiposSelec.indexOf(tipo);
            if (index !== -1) {
                tiposSelec.splice(index, 1);
            }

            const filtroEliminado = contenedorFiltros.querySelector(".tipo." + tipo);
            if (filtroEliminado) {
                // Remover el filtro del contenedor
                contenedorFiltros.removeChild(filtroEliminado);
            }
        } else {
            tiposSelec.push(tipo);
            const nuevoFiltro = document.createElement("div");
            nuevoFiltro.classList.add("tipo", tipo); // Agregar clases al nuevo filtro div
            nuevoFiltro.innerHTML = tipo; // Añadir el texto como contenido del nuevo filtro

            // Agregar un event listener al nuevo filtro div
            nuevoFiltro.addEventListener("click", function() {
                agregQuitarFiltro(tipo)();
            });

            contenedorFiltros.appendChild(nuevoFiltro);
        }

        // Llamar a filtrarTipos() fuera del bloque 'if'/'else' principal para que se ejecute siempre después de manipular tiposSelec
        filtrarPokemons()
    };
}

function agregarFiltros() {
    let divElementos = document.querySelectorAll('.tipo');

    divElementos.forEach(divElemento => {
        // Obtiene el texto dentro del elemento y lo convierte a minúsculas
        const tipo = divElemento.textContent.toLowerCase();
        
        // Agrega un event listener para el evento 'click' que llame a la función agregQuitarFiltro con el tipo adecuado
        divElemento.addEventListener("click", agregQuitarFiltro(tipo));
    });
}

setTimeout(agregarFiltros, 1000); // Llamar a agregarFiltros después de un retraso de 1000 milisegundos


/*function filtrarTipos() {
    const pokemons = document.querySelectorAll('.pokemon'); // Obtener todos los elementos con la clase .pokemon
    filtrarPokemons()
    pokemons.forEach(pokemon => {

        if (tiposSelec.length === 0) {
            pokemon.style.display = 'block';
        }else{
            
            tiposSelec.forEach((tipo)=>{
                const tipo1PokemonElement = pokemon.querySelector('.tipo1');
                const tipo2PokemonElement = pokemon.querySelector('.tipo2');
                
                // Verificar si los elementos de tipo existen antes de acceder a su contenido
                const tipo1Pokemon = tipo1PokemonElement ? tipo1PokemonElement.textContent.toLowerCase() : '';
                const tipo2Pokemon = tipo2PokemonElement ? tipo2PokemonElement.textContent.toLowerCase() : '';
                
                // Comprobar si el nombre del pokemon o el número del pokemon coincide con el filtro
                if (tipo1Pokemon === tipo && pokemon.style.display === 'block' || tipo2Pokemon === tipo && pokemon.style.display === 'block') {
                    pokemon.style.display = 'block'; // Mostrar el pokemon si coincide con el filtro
                } else {
                    pokemon.style.display = 'none'; // Ocultar el pokemon si no coincide con el filtro
                }
            })
        
        }

    });

    

    
}*/