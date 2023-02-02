import { ConteinerCard,ULCont,Lista } from "./ListPokemonStyle";
import { useFetch } from "../../Hooks/useFetch";


function ListPokemon({valor}) {

const url = `https://pokeapi.co/api/v2/pokemon?limit=${valor}&offset=0`;

const { pokemonsList } = useFetch(url);

return (
<ConteinerCard>
    <ULCont>
    {pokemonsList && pokemonsList.map((e,i) => <Lista key={e.id}>Nome:{e.name} Number:{i}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} alt="" />
    </Lista>)}
    
    </ULCont>
</ConteinerCard>
)

}
export default ListPokemon;