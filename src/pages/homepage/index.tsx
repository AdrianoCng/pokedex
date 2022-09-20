import Card from "../../components/card/Card";
import SearchForm from "../../containers/search-form/SearchForm";
import usePokemons from "../../hooks/pokemons/usePokemons";
import styles from "./Homepage.module.scss";

export default function Homepage() {
    const [pokemonsList, pokemonsListQuery] = usePokemons();

    return (
        <div className={styles.container}>
            <SearchForm
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            />

            <div className={styles.card_deck}>
                {pokemonsList?.results.map((pokemon) => (
                    <Card pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
