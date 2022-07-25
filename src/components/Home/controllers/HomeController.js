import { useHome } from "../store/useHomeStore";

export default {
    setup () {
        const homeStore = useHome()
        
        homeStore.getlistPokemon()
        return {

        }
    }
}