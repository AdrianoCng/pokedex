import { useState } from "react";
import TextInput from "../../components/text-input/TextInput";

interface Props {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export default function SearchForm({ onSubmit }: Props) {
    const [inputText, setInputText] = useState("");

    return (
        <form onSubmit={onSubmit}>
            <h1>Pokedex</h1>

            <TextInput
                value={inputText}
                name="test"
                onChange={(value) => setInputText(value)}
                label="Search for a Pokemon"
                fullWidth
            />
        </form>
    );
}
