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
			console.log(municipis[0].municipi_nom); 
			municipiArray.push({ municipi_nom: municipi.municipi_nom });
		});
	
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
  
	  console.log(moviesArray);
	})
}

// POKEMONS
let pokemonArray = [];
let pokemonArrayNoms = [];


async function dadesPokemon(){
	const response = await fetch("js/data/pokemon.json");
	if (!response.ok) {
		throw new Error(`Error de la sol·licitud: ${response.status}`);
	}
	const data = await response.json();
	const pokemons = data.pokemon || [];
	return pokemons.map(({ id, name, img, weight, type }) => ({ id, name, img, weight, type }));
}

//AQUEST NOMES AGAFA NOMS PER EL ORDERLIST + SEARCH
async function dadesPokemon2(){
	fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {
	const pokemons = data.pokemon;
	pokemons.forEach((pokemon) => {
		console.log(pokemon.name);
		pokemonArrayNoms.push({ name: pokemon.name});
	    });

	  console.log(pokemonArrayNoms);
	})
}

//#endregion

/*------------------PART 1.------------------*/

dadesPokemon();
dadesPokemon2();

function LRRreload(){
	location.reload();
}

function orderList(array, ord){
	array.sort((a, b) => ord ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

	array.forEach((element) => {
	  console.log(element.name);
	});
    
	const ordre = ord ? 'ascendent' : 'descendent';
	alert('Array ordenat de manera ' + ordre);
}

function searchList(array){
	const elementABuscar = prompt('Introdueix l\'element a buscar:');

	// Cerca l'element a l'array pel nom del Pokémon
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
	try {
	  const pokemonArrayMulti = await dadesPokemon();
    
	  if (pokemonArrayMulti.length > 0) {
	    const arrayMultidimensional = pokemonArrayMulti.map(({ name, img, weight }) => {
		const pesNumeric = parseFloat(weight);
		return [name, img, pesNumeric];
	    });
    
	    pesos = arrayMultidimensional.map((pokemon) => pokemon[2]);
    
	    console.log("ARRAY MULTI DE POKEMON: ", arrayMultidimensional);
	  } else {
	    console.error('Les dades de Pokemon són buides o no s\'han carregat correctament.');
	  }
	} catch (error) {
	  console.error('Error en obtenir les dades de Pokemon:', error);
	}
    }

crearArrayMultidimensional();
    
function calcMitjana(pesos) {
	const sumaPesos = pesos.reduce((acc, pes) => acc + pes, 0);
	const mitjana = (sumaPesos / pesos.length).toFixed(2);
    
	alert('La mitjana dels pesos és: ' + mitjana);
}
    

function printList(array) { 
		const resultatDiv = document.getElementById('resultat');
		const table = document.createElement('table');
	    
		const headerRow = table.insertRow(0);
		const headers = ['ID', 'Nom', 'Imatge', 'Pes'];
		headers.forEach((headerText, index) => {
		  const th = document.createElement('th');
		  th.appendChild(document.createTextNode(headerText));
		  headerRow.appendChild(th);
		});
	    
		array.forEach((pokemon) => {
		  const row = table.insertRow(-1);
	    
		  const cellId = row.insertCell(0);
		  cellId.appendChild(document.createTextNode(pokemon.id));
	    
		  const cellNom = row.insertCell(1);
		  cellNom.appendChild(document.createTextNode(pokemon.name));
	    
		  const cellImg = row.insertCell(2);
		  const img = document.createElement('img');
		  img.src = pokemon.img;
		  img.alt = pokemon.name;
		  cellImg.appendChild(img);
	    
		  const cellPes = row.insertCell(3);
		  cellPes.appendChild(document.createTextNode(pokemon.weight));
		});
	    
		resultatDiv.innerHTML = '';
		resultatDiv.appendChild(table);
	
}

//PRIMER CARREGA TOT I LLAVORS SI QUE ES MOSTRA LA TAULA. 
document.addEventListener('DOMContentLoaded', (event) => {
	dadesPokemon().then((pokemonArray) => {
	  printList(pokemonArray);
	});
});
    
/*------------------PART 2.------------------*/

let arrayLabels = [];
let arrayDadesGraf = [];
let backgroundColor = [];
let borderColor = [];

async function obtenirLabelsUnics() {
	try {
		const pokemonArray = await dadesPokemon();
		
		if (pokemonArray.length > 0) {
		  const labelsUnicsSet = new Set();
		  
		  pokemonArray.forEach((pokemon) => {
		    // Afegeix les etiquetes desitjades al conjunt
		    labelsUnicsSet.add(pokemon.etiqueta); // Reemplaça "etiqueta" amb la propietat que vols utilitzar com a etiqueta
		  });
	  
		  // Converteix el conjunt a un array
		  const labelsUnicsArray = Array.from(labelsUnicsSet);
	  
		  console.log('Array de labels únics:', labelsUnicsArray);
		  return labelsUnicsArray;
		} else {
		  console.error('Les dades de Pokemon són buides o no s\'han carregat correctament.');
		  return [];
		}
	    } catch (error) {
		console.error('Error en obtenir les dades de Pokemon:', error);
		return [];
	    }
}
    
// Crida la funció per obtenir l'array de labels únics
async function carregarDadesGrafiques() {
	const labelsUnics = await obtenirLabelsUnics();
	console.log(labelsUnics);
}

carregarDadesGrafiques();

/*------------------PART 3.------------------*/


/*------------------PART 4.------------------*/

