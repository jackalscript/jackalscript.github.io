const pokemonNames = {
	"female-nidoran": {
    inputName: "nidoran-f",
    pokemonNameData: "nidoran♀"
  },
  "male-nidoran": {
    inputName: "nidoran-m",
    pokemonNameData: "nidoran♂"
  },
  "farfetch'd": {
    inputName: "farfetchd",
    pokemonNameData: "farfetch'd"
  },
	"mr. mime": {
		inputName: "mr-mime",
		pokemonNameData: "mr. Mime",
	},
  "deoxys": {
    inputName: "deoxys-normal",
    pokemonNameData: "deoxys"
  },
  "wormadam": {
    inputName: "wormadam-plant",
    pokemonNameData: "wormadam"
  },
	"mime jr.": {
		inputName: "mime-jr",
		pokemonNameData: "mime Jr.",
	},
	"porygon-z": {
		inputName: "porygon-z",
		pokemonNameData: "porygon-Z",
	},
  "giratina": {
    inputName: "giratina-altered",
    pokemonNameData: "giratina"
  },
  "shaymin": {
    inputName: "shaymin-land",
    pokemonNameData: "shaymin"
  },
  "basculin": {
    inputName: "basculin-red-striped",
    pokemonNameData: "basculin"
  },
  "darmanitan": {
    inputName: "darmanitan-standard",
    pokemonNameData: "darmanitan"
  },
  "tornadus": {
    inputName: "tornadus-incarnate",
    pokemonNameData: "tornadus"
  },
  "thundurus": {
    inputName: "thundurus-incarnate",
    pokemonNameData: "thundurus"
  },
  "landorus": {
    inputName: "landorus-incarnate",
    pokemonNameData: "landorus"
  },
  "keldeo": {
    inputName: "keldeo-ordinary",
    pokemonNameData: "keldeo"
  },
  "meloetta": {
    inputName: "meloetta-aria",
    pokemonNameData: "meloetta"
  },
  "meowstic": {
    inputName: "meowstic-male",
    pokemonNameData: "meowstic"
  },
  "aegislash": {
    inputName: "aegislash-shield",
    pokemonNameData: "aegislash"
  },
  "pumpkaboo": {
    inputName: "pumpkaboo-average",
    pokemonNameData: "pumpkaboo"
  },
  "gourgeist": {
    inputName: "gourgeist-average",
    pokemonNameData: "gourgeist"
  },
  "zygarde": {
    inputName: "zygarde-50",
    pokemonNameData: "zygarde"
  },
  "oricorio": {
    inputName: "oricorio-baile",
    pokemonNameData: "oricorio"
  },
  "lycanroc": {
    inputName: "lycanroc-midday",
    pokemonNameData: "lycanrock"
  },
  "wishiwashi": {
    inputName: "wishiwashi-solo",
    pokemonNameData: "wishiwashi"
  },
  "minior": {
    inputName: "minior-red-meteor",
    pokemonNameData: "minior"
  },
  "mimikyu": {
    inputName: "mimikyu-disguised",
    pokemonNameData: "mimikyu"
  },
  "toxtricity": {
    inputName: "toxtricity-amped",
    pokemonNameData: "toxtricity"
  },
  "eiscue": {
    inputName: "eiscue-ice",
    pokemonNameData: "eiscue"
  },
  "indeedee": {
    inputName: "indeedee-male",
    pokemonNameData: "indeedee"
  },
	"morpeko": {
		inputName: "morpeko-full-belly",
		pokemonNameData: "morpeko",
	},
	"urshifu": {
		inputName: "urshifu-single-strike",
		pokemonNameData: "urshifu",
	},
	"basculegion": {
		inputName: "basculegion-blue-striped",
		pokemonNameData: "basculegion",
	},
	"enamorus": {
		inputName: "enamorus-incarnate",
		pokemonNameData: "enamorus",
	},
	"mr. rime": {
		inputName: "mr-rime",
		pokemonNameData: "mr. Rime",
	},
  "great-tusk": {
    inputName: "great-tusk",
    pokemonNameData: "great Tusk"
  },
  "scream-tail": {
    inputName: "scream-tail",
    pokemonNameData: "scream Tail"
  },
  "brute-bonnet": {
    inputName: "brute-bonnet",
    pokemonNameData: "brute Bonnet"
  },
  "flutter-mane": {
    inputName: "flutter-mane",
    pokemonNameData: "flutter Mane"
  },
  "slither-wing": {
    inputName: "slither-wing",
    pokemonNameData: "slither Wing"
  },
  "sandy-shocks": {
    inputName: "sandy-shocks",
    pokemonNameData: "sandy Shocks"
  },
  "iron-treads": {
    inputName: "iron-treads",
    pokemonNameData: "iron Treads"
  },
  "iron-bundle": {
    inputName: "iron-bundle",
    pokemonNameData: "iron Bundle"
  },
  "iron-hands": {
    inputName: "iron-hands",
    pokemonNameData: "iron Hands"
  },
  "iron-jugulis": {
    inputName: "iron-jugulis",
    pokemonNameData: "iron Jugulis"
  },
  "iron-moth": {
    inputName: "iron-moth",
    pokemonNameData: "iron Moth"
  },
  "iron-thorns": {
    inputName: "iron-thorns",
    pokemonNameData: "iron Thorns"
  },
  "roaring-moon": {
    inputName: "roaring-moon",
    pokemonNameData: "roaring Moon"
  },
  "iron-valiant": {
    inputName: "iron-valiant",
    pokemonNameData: "iron Valiant"
  },
  "walking-wake": {
    inputName: "walking-wake",
    pokemonNameData: "walking Wake"
  },
  "iron-leaves": {
    inputName: "iron-leaves",
    pokemonNameData: "iron Leaves"
  },
};

const pokemonTyping = {
  normal: "normal",
  fire: "fire",
  water: "water",
  electric: "electric",
  grass: "grass",
  ice: "ice",
  fighting: "fighting",
  poison: "poison",
  ground: "ground",
  flying: "flying",
  psychic: "psychic",
  bug: "bug",
  rock: "rock",
  ghost: "ghost",
  dragon: "dragon",
  dark: "dark",
  steel: "steel",
  fairy: "fairy"
};

const regionLimits = {
  "kanto": { min: 1, max: 151, offset: 0, limit: 151 },
  "johto": { min: 152, max: 251, offset: 151, limit: 100 },
  "hoenn": { min: 252, max: 386, offset: 251, limit: 135 },
  "sinnoh": { min: 387, max: 493, offset: 386, limit: 107 },
  "unova": { min: 494, max: 649, offset: 493, limit: 156 },
  "kalos": { min: 650, max: 721, offset: 649, limit: 72  },
  "alola": { min: 722, max: 809, offset: 721, limit: 88  },
  "galar": { min: 810, max: 898, offset: 809, limit: 89  },
  "paldea": { min: 899, max: 1010, offset: 898, limit: 112 }
};

async function fetchAPI(param) {
  const POKE_API = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${POKE_API}${param}`);
    const pokemon = await response.json();
    return pokemon;
};

export { pokemonNames, pokemonTyping, regionLimits, fetchAPI };