import axios, { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import pokemonKeysFactory from "./pokemons.keys";

export interface PokemonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

type QueryOptions = Omit<UseQueryOptions<PokemonsResponse, AxiosError>, "queryKey" | "queryFn">;

export default function usePokemons(queryOptions?: QueryOptions) {
    const { data, ...query } = useQuery<PokemonsResponse, AxiosError>(
        pokemonKeysFactory.all(),
        async () => {
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

            return data;
        },
        {
            ...queryOptions,
        }
    );

    return [data, query] as const;
}
