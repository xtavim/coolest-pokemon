export const getAllPokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=999999', {
    cache: 'force-cache',
    next: { revalidate: 2592000 },
  }).then(res => res.json());

export const getPokemonDex = (url: string) =>
  url.split('/').filter(Boolean).pop();
