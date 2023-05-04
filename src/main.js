import { pokemonNames, pokemonTyping, regionLimits, fetchAPI } from "./pokemonData.js";
import { randomNumber, capitalizeFirstLetter } from "./valueModifiers.js";

async function getPokemonList(offset = 0, limit = 151) {
  const pokemonListResults = await fetchAPI(`pokemon?offset=${offset}&limit=${limit}`);
  const pokemonList = pokemonListResults.results;
  return pokemonList;
}

async function getPokemon(name) {
  const pokemon = await fetchAPI(`pokemon/${name}`);
  return pokemon;
}

function addClassByType(type, e) {
  const classByType = pokemonTyping;
  e.classList.add(classByType[type]);
}

function createTypeElement(type) {
  const typeElement = document.createElement("span");
  typeElement.textContent = capitalizeFirstLetter(type);
  typeElement.classList.add("type");
  addClassByType(type, typeElement);
  return typeElement;
}

async function renderPokedex() {
  const pokemonList = await getPokemonList();
  
  for (const dexEntry of pokemonList) {
    const pokemonData = await getPokemon(dexEntry.name);

    const kantoContainer = document.querySelector(".kanto");
    const entry = document.createElement("li");
    entry.classList.add("entry");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("sprite");
    
    const img = document.createElement("img");
    img.width = 68;
    img.src = pokemonData.sprites.other["official-artwork"].front_default;
    img.alt = pokemonData.name;

    const name = document.createElement("span");
    name.textContent = capitalizeFirstLetter(pokemonData.name);
    name.classList.add("name");
        
    kantoContainer.appendChild(entry);
    entry.appendChild(imgContainer);
    imgContainer.appendChild(img);
    entry.appendChild(name);

    const primaryType = pokemonData.types[0].type.name;
    if (pokemonData.types.length === 2) {
      const secondaryType = pokemonData.types[1].type.name;

      addClassByType(primaryType, entry);
      addClassByType(secondaryType, entry);
      const type1 = createTypeElement(primaryType);
      const type2 = createTypeElement(secondaryType);

      entry.appendChild(type1);
      entry.appendChild(type2);
    } else {
      addClassByType(primaryType, entry);
      const type1 = createTypeElement(primaryType);
      entry.appendChild(type1);
    }
  };
}

renderPokedex();