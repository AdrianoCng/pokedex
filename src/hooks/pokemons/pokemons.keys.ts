const pokemonKeysFactory = {
    baseKey: ["Pokemons"],
    all() {
        return [...this.baseKey, "List"];
    },
    details(url: string) {
        return [...this.baseKey, "Details", { url }];
    },
};

export default pokemonKeysFactory;
