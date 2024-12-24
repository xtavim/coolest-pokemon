import { Redis } from '@upstash/redis';
import { PokemonList } from './types';

const redis = Redis.fromEnv();

export const getTotalBattles = () => redis.get("totalBattles");
export const getLeaderboard = async () => {
  const { results } = await getAllPokemon();

  return results.map(pkmn => {
    const dexNumber = getPokemonDex(pkmn.url);
    return {
      dexNumber,
      wins: redis.get(`${dexNumber}:wins`),
      losses: redis.get(`${dexNumber}:losses`)
    }
  });
};

export const getAllPokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=999999', {
    cache: 'force-cache',
    next: { revalidate: 2592000 },
  }).then(res => res.json()) as Promise<PokemonList>;

export const getPokemonDex = (url: string) => {
  const split = url.split('/').filter(Boolean);
  return split[split.length - 1]
}

export const recordBattle = async (winnerDex: string, loserDex: string) =>
  Promise.all([
    redis.incr(`${winnerDex}:wins`),
    redis.incr(`${loserDex}:losses`),
    redis.incr('totalBattles'),
  ])