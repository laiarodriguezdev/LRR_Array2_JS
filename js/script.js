// VARIABLES GLOBALS

/*------------------PART 0.------------------*/

//#region 
/*
// MUNICIPIS
fetch("js/data/municipis.json")
.then((response) => response.json())
.then((data) => {
	dades = data.elements;		
	
	console.log(dades)
	console.log(dades[0].municipi_nom)
});

/*

// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	console.log(dades)
	console.log(dades[0].name)
});


// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	console.log(dades)
	console.log(dades[0].title)
});

*/
//#endregion


// POKEMONS
let pokemonArray = [];

async function dadesPokemon(){
	try {
		const response = await fetch("js/data/pokemon.json");
	  
		if (!response.ok) {
		  throw new Error(`Error de la sol·licitud: ${response.status}`);
		}
	  
		const data = await response.json();
		const pokemons = data.pokemon;
	  
		// Imprimir els noms dels pokemons amb forEach i emmagatzemar-los a l'array
		pokemons.forEach((pokemon) => {
		  console.log(pokemon.name);
		  pokemonArray.push({ name: pokemon.name });
		  // Altres propietats que vulguis emmagatzemar
		});
	  
		// Imprimir l'array amb les dades dels pokemons
		console.log(pokemonArray);
	    } catch (error) {
		console.error('Hi ha hagut un error en obtenir les dades dels pokemons:', error);
	}
}

/*------------------PART 1.------------------*/
function LRRpart1(){
	dadesPokemon();
}

function orderList(ordre, array){
	
}

function searchList(element){

}

function calcMitjana(){
	//toFixed
}

function printList(){

}



/*------------------PART 2.------------------*/

/*------------------PART 3.------------------*/

/*------------------PART 4.------------------*/