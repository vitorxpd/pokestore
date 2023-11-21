import { pokemonsService } from '../services/pokemonsService';

export async function getPokemonPrice(name: string) {
  let price = 0;

  const {
    pokemon: { capture_rate, is_legendary, is_mythical },
  } = await pokemonsService.getPokemonSpecie(name);

  switch (true) {
    case capture_rate <= 3 || is_legendary:
      price = 1200;
      break;
    case is_mythical:
      price = 1000;
      break;
    case capture_rate <= 35:
      price = 800;
      break;
    case capture_rate <= 45:
      price = 600;
      break;
    case capture_rate <= 75:
      price = 400;
      break;
    case capture_rate <= 120:
      price = 100;
      break;
    case capture_rate <= 255:
      price = 50;
      break;
    default:
      break;
  }

  return { price };
}
