const pokemonKeysFactory = {
    baseKey: ["Pokemons"],
    all(url: string) {
        return [...this.baseKey, "List", url];
    },
    details(name: string) {
        return [...this.baseKey, "Details", name];
    },
};

export default pokemonKeysFactory;
