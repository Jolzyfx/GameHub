
import useData from "./useData";
import { Game } from "./useGames";

 export interface Genre {
  id: number
  name: string
}
 


const useGenres = () => useData<Game>('/genres')

export default useGenres