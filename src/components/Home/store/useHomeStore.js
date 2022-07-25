import { defineStore } from 'pinia'
import http from '../../../HTTP/axios.js'

export const useHome = defineStore('Home', {
    state: () => ({ 
        pokemon: null,
        list_pokemon : [] 
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        async getlistPokemon () {
            let url = 'pokemon/4' 
            http.getData(url).then( response => {
                this.pokemon = response.data
                console.log(this.pokemon)
            }).catch(e => console.log(e))
        },
    },
})