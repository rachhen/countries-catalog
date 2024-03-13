import { useQuery } from "@tanstack/react-query";
import { Country } from "~/types/country";

export const useCountries = () => {
  return useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: async () => {
      return fetch(import.meta.env.VITE_API_URL).then((res) => res.json());
    },
  });
};
