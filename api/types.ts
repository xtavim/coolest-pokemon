export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  front_female?: string;
  back_female?: string;
  front_shiny_female?: string;
  back_shiny_female?: string;
  other: {
    dream_world: {
      front_default: string;
      front_female?: string;
    };
    ['official-artwork']: {
      front_default: string;
    };
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  forms: { name: string; url: string }[];
  game_indices: GameIndex[];
  types: Type[];
  stats: Stat[];
  sprites: Sprites;
  is_default: boolean;
  species: {
    name: string;
    url: string;
  };
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
  held_items: Array<{
    item: {
      name: string;
      url: string;
    };
    version_details: Array<{
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  base_experience: number;
}
