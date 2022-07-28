<template>
    <div class="container">
        <div class="pokemon">
            <h2 v-if="pokemonStore.pokemon">{{pokemonStore.pokemon.name}}</h2>
            <img v-if="pokemonStore.pokemon" :src="pokemonStore.pokemon.sprites.other.dream_world.front_default" alt="">
        </div> 
        <div>
            <button @click="voltar">voltar</button>
        </div>
    </div>
</template>
<script>
    import Pokemon from "../controllers/PokemonController.js";
    export default Pokemon;
</script>
