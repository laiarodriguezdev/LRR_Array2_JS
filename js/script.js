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

function arrayAscendent(array){
	array.sort((a, b) => a.name.localeCompare(b.name));

	array.forEach((element) => {
		console.log(element.name);
	});
	alert('Array ordenat de manera ascendent');
}

function arrayDescendent(array){
	array.sort((a, b) => b.name.localeCompare(a.name));

	array.forEach((element) => {
		console.log(element.name);
	});
      alert('Array ordenat de manera descendent');
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