import { pokemonTyping, regionLimits, fetchAPI } from "./pokemonData.js";
import { addZeroes } from "./valueModifiers.js";

const regionButtons = document.querySelector("aside");
regionButtons.addEventListener("click", handleRegionButton);
let { offset, limit } = regionLimits.kanto;
let isRendering = false;

function handleRegionButton(event) {
  if (isRendering) {
    return;
  }

  const clickedButton = event.target.closest(".region-button");
  
  if (clickedButton) {
    const selectedButton = regionButtons.querySelector(".region-button.selected");
    
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }
    
    clickedButton.classList.add("selected");
    ({ offset, limit } = regionLimits[clickedButton.dataset.region]);
    renderPokedex();
  }
}

async function getPokemonList(currentOffset = offset, currentLimit = limit) {
  const pokemonListResults = await fetchAPI(`pokemon?offset=${currentOffset}&limit=${currentLimit}`);
  const pokemonList = pokemonListResults.results;
  return pokemonList;
}

async function getPokemonData(name) {
  const pokemon = await fetchAPI(`pokemon/${name}`);
  const dexNumber = pokemon.id;
  const pokemonSpecies = await fetchAPI(`pokemon-species/${dexNumber}`);
  return { ...pokemon, ...pokemonSpecies };
}

function checkRegion(gen) {
  for (const region in regionLimits) {
    if (gen === regionLimits[region].gen) {
      return region;
    }
  }
}

function addTypeClass(type1, type2 = null) {
  const classByType = pokemonTyping;
  if (type2 === null) {
    return `entry--${classByType[type1]}`;
  } else {
    return `entry--${classByType[type1]}-${classByType[type2]}`;
  }
}

function createTypeElement(type) {
  const typeElement = document.createElement("span");
  typeElement.textContent = type;
  typeElement.classList.add("type");
  typeElement.classList.add("field");
  typeElement.classList.add(addTypeClass(type));
  return typeElement;
}

async function renderPokedex() {
  isRendering = true;
  const entryCollection = [];
  const dexListContainer = document.querySelector(".dexList");
  dexListContainer.textContent = "";
  const pokemonList = await getPokemonList();

  for (const dexEntry of pokemonList) {
    const pokemonData = await getPokemonData(dexEntry.name);
    const dexNumber = pokemonData.id;
    const pokemonRegion = checkRegion(pokemonData.generation.name);
    const pokemonName = pokemonData.names[8].name;
    const pokemonSprite = pokemonData.sprites.front_default;

    const entry = document.createElement("li");
    entry.classList.add("entry");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("sprite");
    
    const img = document.createElement("img");
    img.src = pokemonSprite;

    const info = document.createElement("div");
    info.classList.add("entry__info");

    const name = document.createElement("span");
    name.textContent = pokemonName;
    name.classList.add("name", "field");
    
    const number = document.createElement("span");
    number.textContent = addZeroes(dexNumber);
    number.classList.add("number", "field");

    const region = document.createElement("span");
    region.textContent = pokemonRegion;
    region.classList.add("region", "field");

    dexListContainer.append(entry);
    entry.append(imgContainer, info);
    imgContainer.append(img);
  
    if (pokemonData.types.length === 2) {
      const [primaryType, secondaryType] = pokemonData.types;
  
      const typeClass = addTypeClass(primaryType.type.name, secondaryType.type.name);
      entry.classList.add(typeClass);
  
      const type1 = createTypeElement(primaryType.type.name);
      const type2 = createTypeElement(secondaryType.type.name);

      info.append(name, number, region, type1, type2);
    } else {
      const primaryType = pokemonData.types[0].type.name;
  
      const typeClass = addTypeClass(primaryType);
      entry.classList.add(typeClass);
  
      const type1 = createTypeElement(primaryType);
  
      info.append(name, number, region, type1);
    }
    entryCollection.push(entry);
  };
  
  dexListContainer.append(...entryCollection);
  isRendering = false;
}

renderPokedex();