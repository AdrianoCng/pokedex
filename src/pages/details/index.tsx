import { useNavigate, useParams } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";

import usePokemon from "../../hooks/pokemons/usePokemon";
import styles from "./Details.module.scss";

export default function DetailsPage() {
    const { name } = useParams();
    const navigate = useNavigate();

    const [pokemon, pokemonQuery] = usePokemon({ name: name || "" });

    const renderContent = () => {
        if (pokemonQuery.isLoading) {
            return <p>Loading...</p>;
        }

        if (pokemonQuery.isError) {
            return <p>Pokemon Not Found.</p>;
        }

        return (
            <>
                <h1 className={styles.pokemon_name}>{pokemon?.name}</h1>

                <p>
                    <span className={styles.pokemon_name}>{name}</span> is{" "}
                    {(pokemon?.height * 0.1).toFixed(2)} meter tall and weighs{" "}
                    {(pokemon?.weight * 0.1).toFixed(1)}kg.
                </p>

                <table className={styles.table}>
                    {pokemon?.stats.map(({ base_stat, stat }: any) => (
                        <tr>
                            <th>{stat.name}</th>
                            <td>{base_stat}</td>
                        </tr>
                    ))}
                </table>
            </>
        );
    };

    return (
        <>
            <div className={styles.hero}>
                <span className={styles.icon_back} onClick={() => navigate("/")}>
                    <ImArrowLeft />
                </span>
                <div className={styles.img_container}>
                    <img src={pokemon?.sprites.other.dream_world.front_default} />
                </div>
            </div>

            <div className={styles.body}>{renderContent()}</div>
        </>
    );
}
