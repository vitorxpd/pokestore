export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  price: number;
  types: {
    name: string;
    color: string;
  }[];
  sprite: string;
}
