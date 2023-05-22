import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client.ts";
import genre from "../data/genre.ts";
import { Genre } from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genre,
  });

export default useGenres;
