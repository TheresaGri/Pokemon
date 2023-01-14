const mainElement = document.querySelector(".main");

//"modern" version
async function loadFirstPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
  const response = await fetch(url);
  const firstPokemonData = await response.json();
  console.log(firstPokemonData);

  mainElement.innerHTML += `<h2> ${firstPokemonData.name}</h2>`;
  mainElement.innerHTML += `<h2> ${firstPokemonData.height}</h2>`;
  mainElement.innerHTML += `<img src="${firstPokemonData.sprites.front_default}">`;
}


async function loadPikachu() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const response = await fetch(url);
  const pikachuData = await response.json();
  console.log(pikachuData);
  mainElement.innerHTML += `<h2>${pikachuData.name}</h2>`;
  mainElement.innerHTML += `<img src = "${pikachuData.sprites.front_female}">`;
}

function loadFirstPokemonThen() {
  const url = "https://pokeapi.co/api/v2/pokemon/1";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mainElement.innerHTML += `<h2> ${data.name}</h2>`;

    });
    
}

loadFirstPokemon();
loadPikachu();
loadFirstPokemonThen();
