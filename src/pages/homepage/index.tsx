import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../components/card/Card";
import SearchForm from "../../containers/search-form/SearchForm";
import usePokemons from "../../hooks/pokemons/usePokemons";
import routes from "../../routes";
import styles from "./Homepage.module.scss";

export default function Homepage() {
    const navigate = useNavigate();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const [pokemonsList, pokemonsListQuery] = usePokemons({
        url,
    });

    const goToDetailsPage = (name: string) => {
        navigate(`${routes.details}/${name}`);
    };

    const renderDeck = () => {
        if (pokemonsListQuery.isLoading) {
            return <p>Loading...Please wait.</p>;
        }

        if (pokemonsList?.results.length === 0) {
            return <p>No Pokemons founds. Please try again.</p>;
        }

        return pokemonsList?.results.map((pokemon) => (
            <Card
                key={pokemon.name}
                pokemon={pokemon}
                onClick={() => {
                    goToDetailsPage(pokemon.name);
                }}
            />
        ));
    };

    return (
        <div className={styles.container}>
            <SearchForm onSubmit={goToDetailsPage} />

            <div className={styles.card_deck}>{renderDeck()}</div>

            <div className={styles.btn_grp}>
                {pokemonsList?.previous && (
                    <button
                        className={styles.btn}
                        onClick={() => setUrl(pokemonsList?.previous || "")}
                    >
                        Previous
                    </button>
                )}
                {pokemonsList?.next && (
                    <button className={styles.btn} onClick={() => setUrl(pokemonsList?.next || "")}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
