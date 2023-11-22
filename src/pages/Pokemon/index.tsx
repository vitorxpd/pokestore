import { useParams } from 'react-router-dom';

interface PokemonParams {
  name: string;
}

export function Pokemon() {
  const { name } = useParams<Partial<PokemonParams>>();

  return <main>{name}</main>;
}
