const POKE_API = 'https://pokeapi.co/api/v2/';
const randomizeButton = document.querySelector('#randomize');
const pokemonSearch = document.querySelector('#search-field');
const searchButton = document.querySelector('#search-button');
const searchInfo = document.querySelector('#search-info');

randomizeButton.addEventListener('click', (e) => {
  e.preventDefault();
  regionSelector();
});

searchButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(pokemonSearch.value);
	searchPokemon(pokemonSearch.value);
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getPokemon(min, max = undefined) {
	let chosenPokemon;

	if (typeof min === "number" && typeof max === "number") {
		chosenPokemon = randomNumber(min, max);
		console.log(chosenPokemon);
	} else if (typeof min === "number" && typeof max === undefined && min < 1010) {
		chosenPokemon = min;
		console.log(chosenPokemon);
	} else if (typeof min === "number" && min > 1010) {
		chosenPokemon = randomNumber(1, 1010);
		console.log(chosenPokemon);
		searchInfo.innerText = `There are only 1010 Pokemon. Here's a random one.`;
	} else if (typeof min === "string" && typeof max === undefined) {
		chosenPokemon = min.toLowerCase();
		console.log(chosenPokemon);
	} else {
		chosenPokemon = "abra";
	}

	console.log(typeof min, min);
	console.log(typeof max, max);

  const response = await fetch(`${POKE_API}pokemon/${chosenPokemon}/`);
  const pokemon = await response.json();

	// console.log(chosenPokemon);
  // console.log(pokemon);

	const pokemonName = document.querySelector('h2');
	const pokemonArtwork = document.querySelector('img');
  pokemonName.innerText = capitalizeFirstLetter(pokemon.name);
  pokemonArtwork.src = pokemon.sprites.other['official-artwork'].front_default;
}

function regionSelector() {
  if (document.querySelector('input[name="region"]:checked') === null) {
		getPokemon(1, 1010);
	} else {
		const selectedRegion = document.querySelector('input[name="region"]:checked').value;
		console.log(selectedRegion);
  	if (selectedRegion === 'kanto') {
    	getPokemon(1, 151);
    } else if (selectedRegion === 'johto') {
			getPokemon(152, 251);
  	}   else if (selectedRegion === 'hoenn') {
    	getPokemon(252, 386);
  	}  else if (selectedRegion === 'sinnoh') {
    	getPokemon(387, 493);
		} else if (selectedRegion === 'unova') {
    	getPokemon(494, 649);
  	} else if (selectedRegion === 'kalos') {
    	getPokemon(650, 721);
  	} else if (selectedRegion === 'alola') {
    	getPokemon(722, 809);
  	} else if (selectedRegion === 'galar') {
    	getPokemon(810, 898);
  	} else if (selectedRegion === 'paldea') {
    	getPokemon(899, 1010);
  	} else {
    	getPokemon(1, 1010);
  	}
	}
}

function searchPokemon(input) {
	if (input === '' || null) {
		searchInfo.innerText = 'Please enter a Pokemon name or ID number.';
	} else if (typeof input === 'number' || typeof input === 'string') {
		getPokemon(input);
	} else {
		searchInfo.innerText = 'Please enter a Pokemon name or ID number.';
	}
}

regionSelector();