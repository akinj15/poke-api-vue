import { usePokemon } from "../store/usePokemonStore";
import { useRouter } from "vue-router";

export default {
    setup () {
        const router = useRouter()
        const pokemonStore = usePokemon()
        const carregarPokemon = async (item) => {
            let limpaUrl = () => {
                return item.url.split('https://pokeapi.co/api/v2/pokemon/')
            }
            let idPokemon = limpaUrl()[1].slice(0, -1) 
            router.push({path:`/pokemon/${idPokemon}`})
        }
        const next = async () => {
            await pokemonStore.getlistPokemon({next : true})
        } 
        const previous = async () => {
            await pokemonStore.getlistPokemon({previous : true})
        }  
        pokemonStore.getlistPokemon()
        return {
            pokemonStore,
            carregarPokemon,
            next,
            previous,
        }
    }
}