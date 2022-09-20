import { PokemonsResponse } from "../../hooks/pokemons/usePokemons";
import styles from "./Card.module.scss";

interface Props {
    pokemon: PokemonsResponse["results"][0];
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    img?: string;
}
export default function Card({ pokemon, onClick, img }: Props) {
    const renderImage = () => {
        if (!img) return;

        return <img src={img} />;
    };

    return (
        <div className={styles.card} onClick={onClick}>
            {renderImage()}
            {pokemon.name}
        </div>
    );
}
