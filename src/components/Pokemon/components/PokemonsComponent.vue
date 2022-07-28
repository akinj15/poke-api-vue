<template>
    <h2>lista de pokemons</h2>
    <div v-for="item in pokemonStore.list_pokemon" :key="item.name" >
        <div @click="carregarPokemon(item)">
             {{ item.name }} 
        </div>
    </div>
        <button @click="previous()">voltar</button>
        <button @click="next()">next</button>
</template>
<script>
    import Pokemons from "../controllers/PokemonsController.js";
    export default Pokemons;
</script>
