// VARIABLES GLOBALS

/*------------------PART 0.------------------*/

//#region FUNCIONS PER ELS DOCUMENTS
// MUNICIPIS
let municipiArray =[];

async function dadesMunicipi(){
	fetch("js/data/municipis.json")
	.then((response) => response.json())
	.then((data) => {
		const municipis = data;
	
		municipis.forEach((municipi) => {
		  console.log(municipis[0].municipi_nom); // Nom del municipi
		  municipiArray.push({ municipi_nom: municipi.municipi_nom });
		});
	
		// Imprimir l'array amb les dades dels municipis
		console.log(municipiArray);
	})
}

// METEORITS
let meteoritesArray = [];

async function dadesMeteor(){
	fetch("js/data/earthMeteorites.json")
	.then((response) => response.json())
	.then((data) => {
	  const meteorites = data.meteorites;
  
	  meteorites.forEach((meteorite) => {
	    console.log(meteorite.name); 
	    meteoritesArray.push({ name: meteorite.name });
	  });
  
	  console.log(meteoritesArray);
	})
}

// MOVIES 
let moviesArray = [];

async function dadesMovies(){
	fetch("js/data/movies.json")
	.then((response) => response.json())
	.then((data) => {
	const movies = data.movies;
	movies.forEach((movie) => {
		console.log(movie.title);
		moviesArray.push({ title: movie.title});
	    });
  
	  // Imprimir l'array amb les dades dels meteorites
	  console.log(moviesArray);
	})
}

// POKEMONS
let pokemonArray = [];

async function dadesPokemon(){
	fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {
	  const pokemons = data.pokemon;
  
	  pokemons.forEach((pokemon) => {
	    console.log(pokemon.name);
	    pokemonArray.push({ name: pokemon.name });
	  });
  
	  // Imprimir l'array amb les dades de les pel·lícules
	  console.log(pokemonArray);
	})
}
//#endregion

/*------------------PART 1.------------------*/

	dadesPokemon();

function LRRreload(){
	location.reload();
}

function arrayOrdenat(array, ord){
	array.sort((a, b) => ord ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

	array.forEach((element) => {
	  console.log(element.name);
	});
    
	const ordre = ord ? 'ascendent' : 'descendent';
	alert('Array ordenat de manera ' + ordre);
}

function searchList(array){
	const elementABuscar = prompt('Introdueix l\'element a buscar:');
  
	// Cerca l'element a l'array
	const index = array.findIndex((element) => element.name === elementABuscar);

	if (index !== -1) {
	alert('L\'element ' + elementABuscar + ' es troba a la posició ' + index);
	} else {
	alert('L\'element ' + elementABuscar + ' no es troba a l\'array');
	}
}

/*
	Realitza una array multidimensional que emmagatzemi més d’un valor. Exemple:
		a. [[“nom Pokemon”, img, weight], [“nom Pokemon”, img, weight]...]
		*Tingues en compte que si per exemple la dada és “23 kg” t’has de quedar només amb el
		valor numèric
		- En el cas que sigui possible, afegeix una imatge.

*/

async function crearArrayMultidimensional() {
	const pokemonArray = await dadesPokemon();
	const arrayMultidimensional = [];
    
	pokemonArray.forEach((pokemon) => {
	  // Extreu el pes numeric (ignorant la unitat "kg")
	  const pesNumeric = parseFloat(pokemon.weight);
    
	  // Afegeix un nou element a l'array multidimensional
	  arrayMultidimensional.push([pokemon.name, pokemon.img, pesNumeric]);
	});

	console.log(arrayMultidimensional);
}

crearArrayMultidimensional();

function calcMitjana(valor){
	const mitjana = valor.toFixed(2);
  	alert('La mitjana del valor numèric és: ' + mitjana);
}

function printList(){

}



/*------------------PART 2.------------------*/

/*------------------PART 3.------------------*/

/*------------------PART 4.------------------*/