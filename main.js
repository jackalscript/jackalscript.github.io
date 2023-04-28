const POKE_API = 'https://pokeapi.co/api/v2/';
const randomizeButton = document.querySelector('#randomize');
const pokemonSearch = document.querySelector('#search-field');
const searchButton = document.querySelector('#search-button');
const searchInfo = document.querySelector('#search-info');

const regions = {
	kanto: {
		name: 'Kanto',
		firstMon: 1,
		lastMon: 151
	},
	johto: {
		name: 'Johto',
		firstMon: 152,
		lastMon: 251
	},
	hoenn: {
		name: 'Hoenn',
		firstMon: 252,
		lastMon: 386
	},
	sinnoh: {
		name: 'Sinnoh',
		firstMon: 387,
		lastMon: 493
	},
	unova: {
		name: 'Unova',
		firstMon: 494,
		lastMon: 649
	},
	kalos: {
		name: 'Kalos',
		firstMon: 650,
		lastMon: 721
	},
	alola: {
		name: 'Alola',
		firstMon: 722,
		lastMon: 809
	},
	galar: {
		name: 'Galar',
		firstMon: 810,
		lastMon: 898
	},
	paldea: {
		name: 'Paldea',
		firstMon: 899,
		lastMon: 1010
	}
}

randomizeButton.addEventListener('click', (e) => {
  e.preventDefault();
  getCheckedRegions();
});

searchButton.addEventListener('click', (e) => {
	e.preventDefault();
	getPokemon(pokemonSearch.value);
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getPokemon(min, max = undefined) {
	let chosenPokemon;
	let pokemonID = parseInt(min);
	searchInfo.innerText = '';

	if (min === '' || null) {
		searchInfo.innerText = 'Please enter a Pokemon name or ID number.';
		return;
	}	else if (typeof min === "number" && typeof max === "number") {
		chosenPokemon = randomNumber(min, max);
	} else if (pokemonID <= 0 || pokemonID > 1010) {
		searchInfo.innerText = 'There are no Pokemon with that ID number.';
		return;
	} else if (typeof min === "string") {
		chosenPokemon = min.trim().toLowerCase();
	}

  const response = await fetch(`${POKE_API}pokemon/${chosenPokemon}/`);
  const pokemon = await response.json();


	const pokemonName = document.querySelector('h2');
	const pokemonArtwork = document.querySelector('img');
  pokemonName.innerText = capitalizeFirstLetter(pokemon.name);
  pokemonArtwork.src = pokemon.sprites.other['official-artwork'].front_default;
}

function getCheckedRegions() {
	const checkedRegions = [];
	const regionCheckboxes = document.querySelectorAll('input[name="region"]:checked');
	regionCheckboxes.forEach((region) => {
		checkedRegions.push(region.value);
	});
	
	randomizeByRegion(checkedRegions);
}

function randomizeByRegion(regionArray) {
	console.log(regionArray);
  if (document.querySelector('input[name="region"]:checked') === null) {
		getPokemon(1, 1010);
	} else {
		const regionRandomizer = randomNumber(0, regionArray.length - 1);
		const selectedRegion = regionArray[regionRandomizer];
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

randomizeByRegion();