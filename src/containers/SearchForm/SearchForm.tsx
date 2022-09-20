import { useState } from "react";
import TextInput from "../../components/text-input/TextInput";
import styles from "./SearchForm.module.scss";

export default function SearchForm() {
    const [inputText, setInputText] = useState("");

    return (
        <form>
            <h1>Pokedex</h1>

            <TextInput
                value={inputText}
                name="test"
                onChange={(value) => setInputText(value)}
                className={styles.input_search}
                label="Search for a Pokemon"
            />
        </form>
    );
}
