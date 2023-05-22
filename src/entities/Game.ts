import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export default interface Game {
  image_background: string;
  id: number;
  slug: string;
  genres:Game[];
  publishers: Publisher[]
  name: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
