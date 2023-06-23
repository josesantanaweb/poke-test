export interface IColors {
  white: string;
  black: string;
  background: string;
  primary: {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
  };
  gray: {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
  };
}

export interface IRadius {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
}

export interface IFontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
}

export interface ITheme {
  name: string;
  colors: IColors;
  radius: IRadius;
  fontSize: IFontSizes;
  fontFamily: string;
}

export interface IPokemonsResponse {
  count: number;
  next: string;
  previous: any;
  results: IResult[];
}

export interface IResult {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  abilities: IAbility[];
  weight: string;
  sprites: ISprites;
  stats: IStat[];
}

export interface IAbility {
  ability: IAbility2;
}

export interface IAbility2 {
  name: string;
}

export interface ISprites {
  other: IOther;
}

export interface IOther {
  dream_world: IHome;
}

export interface IHome {
  front_default: string;
}

export interface IStat {
  base_stat: number;
  stat: IStat2;
}

export interface IStat2 {
  name: string;
}
