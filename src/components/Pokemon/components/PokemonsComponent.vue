<template>
    <div class="container">
        <header>
            <h2>lista de pokemons</h2>
        </header>
        <div class="pokemons">
            <div v-for="item in pokemonStore.list_pokemon" :key="item.name" >
                <div @click="carregarPokemon(item)">
                     {{ item.name }} 
                </div>
            </div>
        </div>
        <div class="buttons">
            <button @click="previous()">voltar</button>
            <button @click="next()">next</button>
        </div>
    </div>
</template>
<script>
    import Pokemons from "../controllers/PokemonsController.js";
    export default Pokemons;
</script>
