let contentGridElement = document.getElementById('pokemonGrid');
// alert("loaded");

let jsonDatabase = [
  {
    "name" : "Bulbasaur",
    "color" : "#8ED0B4",
    "species" : "Seed Pokémon",
    "type" : "grass, poison",
    "evolutions" : ["Bulbasaur", "Ivysaur (Level 16)", "Venusaur (Level 32)"],
    "image" : "bulbasaur.jpg"
  },
  {
    "name" : "Charmander",
    "color" : "#F4B186",
    "species" : "Lizard Pokémon",
    "type" : "fire",
    "evolutions" : ["Charmander", "Charmeleon (Level 16)", "Charizard (Level 36)"],
    "image" : "charmander.jpg"
  },
  {
    "name" : "Squirtle",
    "color" : "#5BA6BB",
    "species" : "Tiny Turtle Pokémon",
    "type" : "water",
    "evolutions" : ["Squirtle", "Wartortle (Level 16)", "Blastoise (Level 36)"],
    "image" : "squirtle.jpg"
  },
  {
    "name" : "Chikorita",
    "color" : "#D9E2AB",
    "species" : "Leaf Pokémon",
    "type" : "grass",
    "evolutions" : ["Chikorita", "Bayleef (Level 16)", "Meganium (Level 32)"],
    "image" : "chikorita.jpg"
  },
  {
    "name" : "Cyndaquil",
    "color" : "#E36B46",
    "species" : "Fire Mouse Pokémon",
    "type" : "fire",
    "evolutions" : ["Cyndaquil", "Quilava (Level 14)", "Typhlosion (Level 36)"],
    "image" : "cyndaquil.jpg"
  },
  {
    "name" : "Totodile",
    "color" : "#75C2CC",
    "species" : "Big Jaw Pokémon",
    "type" : "water",
    "evolutions" : ["Totodile", "Croconaw (Level 18)", "Feraligatr (Level 30)"],
    "image" : "totodile.jpg"
  },
  {
    "name" : "Treecko",
    "color" : "#CAE186",
    "species" : "Wood Gecko Pokémon",
    "type" : "grass",
    "evolutions" : ["Treecko", "Grovyle (Level 16)", "Sceptile (Level 36)"],
    "image" : "treecko.jpg"
  },
  {
    "name" : "Torchic",
    "color" : "#F1A142",
    "species" : "Chick Pokémon",
    "type" : "fire",
    "evolutions" : ["Torchic", "Combusken (Level 16)", "Blaziken (Level 36)"],
    "image" : "torchic.jpg"
  },
  {
    "name" : "Mudkip",
    "color" : "#57B2DE",
    "species" : "Mud Fish Pokémon",
    "type" : "water",
    "evolutions" : ["Mudkip", "Marshtomp (Level 16)", "Swampert (Level 36)"],
    "image" : "mudkip.jpg"
  },
  {
    "name" : "Turtwig",
    "color" : "#BFD595",
    "species" : "Tiny Leaf Pokémon",
    "type" : "grass",
    "evolutions" : ["Turtwig", "Grotle (Level 18)", "Torterra (Level 32)"],
    "image" : "turtwig.jpg"
  },
  {
    "name" : "Chimchar",
    "color" : "#DA7E2A",
    "species" : "Chimp Pokémon",
    "type" : "fire",
    "evolutions" : ["Chimchar", "Monferno (Level 14)", "Infernape (Level 36)"],
    "image" : "chimchar.jpg"
  },
  {
    "name" : "Piplup",
    "color" : "#95CAD8",
    "species" : "Penguin Pokémon",
    "type" : "water",
    "evolutions" : ["Piplup", "Prinplup (Level 16)", "Empoleon (Level 36)"],
    "image" : "piplup.jpg"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createGridElement(jsonDatabase[i]);
}

function createGridElement(incomingJSON){
  let newContentElement = document.createElement("div");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('gridContentItem');

  let pokemonName = document.createElement("h2");
  pokemonName.innerText = incomingJSON['name'];
  newContentElement.appendChild(pokemonName);

  let pokeImg = document.createElement("img");
  pokeImg.classList.add("pokemonImage");
  pokeImg.src = incomingJSON['image'];
  newContentElement.appendChild(pokeImg);

  let pokeSpecies = document.createElement("p");
  pokeSpecies.innerText = incomingJSON['species'];
  pokeSpecies.classList.add('typeText');
  newContentElement.appendChild(pokeSpecies);

  let pokeType = document.createElement("p");
  pokeType.innerText = incomingJSON['type'];
  newContentElement.appendChild(pokeType);

  let pokeEvol = document.createElement("ul");
  newContentElement.appendChild(pokeEvol);

  for(var i = 0; i < incomingJSON['evolutions'].length; i++){
    var newEvol = document.createElement("li");
    newEvol.innerText = incomingJSON['evolutions'][i];
    pokeEvol.appendChild(newEvol);
  }

  contentGridElement.appendChild(newContentElement);
}
