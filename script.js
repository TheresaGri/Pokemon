const mainElement = document.querySelector(".main");

async function loadFirstPokemon() {
	const url = "https://pokeapi.co/api/v2/pokemon/1";
	const response = await fetch(url);
	const firstPokemonData = await response.json();
	console.log(firstPokemonData);

  mainElement.innerHTML += `<h2> ${firstPokemonData.name}</h2>`;
  mainElement.innerHTML += `<h2> ${firstPokemonData.height}</h2>`;
  mainElement.innerHTML += `<img src="${firstPokemonData.sprites.front_default}">`;
}

loadFirstPokemon();

async function loadPikachu() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const response = await fetch(url);
  const pikachuData = await response.json();
  console.log(pikachuData);
  mainElement.innerHTML = `<h2>${pikachuData.name}</h2>`;
  mainElement.innerHTML = `<img src = "${pikachuData.sprites.front_female}">`;
}

loadPikachu();