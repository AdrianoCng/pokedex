import { useQuery, UseQueryOptions } from "react-query";
import axios, { AxiosError } from "axios";

import pokemonKeysFactory from "./pokemons.keys";

interface QueryOptions extends Omit<UseQueryOptions<any, AxiosError>, "queryKey" | "queryFn"> {
    name: string;
}
export default function usePokemon({ name, ...queryOptions }: QueryOptions) {
    const { data, ...query } = useQuery<any, AxiosError>(
        pokemonKeysFactory.details(name),
        async () => {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);

            return data;
        },
        {
            ...queryOptions,
        }
    );

    return [data, query] as const;
}
