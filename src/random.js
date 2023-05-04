import { pokemonNames, regionLimits, fetchAPI } from "./pokemonData.js";
import {randomNumber, capitalizeFirstLetter} from "./valueModifiers.js";

const randomizeButton = document.querySelector("#randomize");
const resetButton = document.querySelector("#reset-button");
const searchButton = document.querySelector("#search-button");
const pokemonSearch = document.querySelector("#search-field");

randomizeButton.addEventListener("click", (e) => {
  e.preventDefault();
  getMarkedRegionCheckboxes();
});

resetButton.addEventListener("click", (e) => {
	e.preventDefault();
	const regionCheckboxes = document.querySelectorAll("input[name='region']:checked");
	regionCheckboxes.forEach((region) => {
		region.checked = false;
	});
});

searchButton.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(pokemonSearch.value);
});

pokemonSearch.addEventListener("search", (e) => {
	e.preventDefault();
	getPokemon(pokemonSearch.value);
});

async function getPokemon(min, max = undefined) {
	let chosenPokemon;
	const inputID = parseInt(min);
	const nameExceptions = Object.entries(pokemonNames);
  let foundException = true;

	const searchInfo = document.querySelector("#search-info");
	searchInfo.innerText = `Who's that Pokemon?`;

	if (!min) {
		searchInfo.innerText = "Please enter a valid Pokemon name or ID number.";
		return;
	}	else if (typeof min === "number") {
		chosenPokemon = randomNumber(min, max);
	} else if (inputID <= 0 || inputID > 1010) {
		searchInfo.innerText = "Please enter a valid Pokemon name or ID number.";
		return;
	} else {
		const inputName = min.toLowerCase().trim().split(" ").join("-");

		nameExceptions.forEach((name) => {
			if (inputName === name[0]) {
				chosenPokemon = name[1].inputName;
        foundException = false;
			}
		});

    if (foundException) {
      chosenPokemon = inputName;
    }
	} 

	try {
    const pokemon = await fetchAPI(`pokemon/${chosenPokemon}/`);

    let pokemonPrintName = pokemon.name;
		nameExceptions.forEach((name) => {
			if (pokemonPrintName === name[1].inputName) {
				pokemonPrintName = name[1].pokemonNameData;
			} 
    });
    
		const pokemonNameh2 = document.querySelector("h2");
		const pokemonArtworkImg = document.querySelector("img");
  	pokemonNameh2.innerText = `It's ${capitalizeFirstLetter(pokemonPrintName)}!`;
  	pokemonArtworkImg.src = pokemon.sprites.other["official-artwork"].front_default;
	} catch (error) {
		console.error("Error: ", error);
		searchInfo.innerText = "Please enter a valid Pokemon name or ID number.";
		return;
	}
}

function getMarkedRegionCheckboxes() {
	const checkedRegions = [];
	const regionCheckboxes = document.querySelectorAll("input[name='region']:checked");
	regionCheckboxes.forEach((region) => {
		checkedRegions.push(region.value);
	});
	
	randomizeByRegion(checkedRegions);
}

function randomizeByRegion(regionArray) {
	const checkedRegions = document.querySelectorAll("input[name='region']:checked");
	if (checkedRegions.length === 0) {
		getPokemon(1, 1010);
		return;
	}

	const regionRandomizer = randomNumber(0, regionArray.length - 1);
	const selectedRegion = regionArray[regionRandomizer];
	const regionLimitsSelected = regionLimits[selectedRegion];

	if (regionLimitsSelected) {
		getPokemon(regionLimitsSelected.min, regionLimitsSelected.max);
	} else {
		getPokemon(1, 1010);
	}
}

randomizeByRegion();