import { Platform } from "./Platform";

export interface Game {
  image_background: string;
  id: number;
  slug: string;
  name: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}