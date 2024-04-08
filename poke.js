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
    
    let tipos = poke.types.map((type)=> `<p class="${type.type.name} tipo">${type.type.name}</p>`) 
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


function cargarPokemons() {
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
}

// Agregar el event listener al input para activar la función cargarPokemons en cada cambio
filtroInput.addEventListener("input", cargarPokemons);