import axios, { AxiosError } from "axios";
import { url } from "inspector";
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

interface QueryOptions
    extends Omit<UseQueryOptions<PokemonsResponse, AxiosError>, "queryKey" | "queryFn"> {
    url: string;
}

export default function usePokemons({ url, ...queryOptions }: QueryOptions) {
    const { data, ...query } = useQuery<PokemonsResponse, AxiosError>(
        pokemonKeysFactory.all(url),
        async () => {
            const { data } = await axios.get(url);

            return data;
        },
        {
            ...queryOptions,
        }
    );

    return [data, query] as const;
}
