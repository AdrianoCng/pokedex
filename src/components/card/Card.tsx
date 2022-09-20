import { PokemonsResponse } from "../../hooks/pokemons/usePokemons";
import styles from "./Card.module.scss";

interface Props {
    pokemon: PokemonsResponse["results"][0];
    img?: string;
}
export default function Card({ pokemon, img }: Props) {
    const renderImage = () => {
        if (!img) return;

        return <img src={img} />;
    };

    return (
        <div className={styles.card}>
            {renderImage()}
            {pokemon.name}
        </div>
    );
}
