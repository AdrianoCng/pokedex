const pokemonKeysFactory = {
    baseKey: ["Pokemons"],
    all() {
        return [...this.baseKey, "List"];
    },
    details(name: string) {
        return [...this.baseKey, "Details", name];
    },
};

export default pokemonKeysFactory;
