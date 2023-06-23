import * as S from "./styles";
import Button from '../Button';
import { IPokemon } from "../../interfaces";
import { useStore } from "../../store";

export interface PokemonProps {
  pokemon?: IPokemon;
}

const Pokemon = (props: PokemonProps) => {
  const { setOpenModal, setPokemon } = useStore();
  const darkTheme = useStore((state) => state.darkTheme);
  const { pokemon } = props;

  const handleViewDetail = (pokemon: any) => {
    setPokemon(pokemon);
    setOpenModal(true);
  };

  return (
    <S.Pokemon darkTheme={darkTheme}>
      <S.Preview>
        <S.Imagen
          src={pokemon?.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
        <S.Weight>Peso: {pokemon?.weight}</S.Weight>
      </S.Preview>
      <S.Name darkTheme={darkTheme}>{pokemon?.name}</S.Name>
      <S.Abilities>
        {pokemon?.abilities[0] && (
          <S.Ability>{pokemon?.abilities[0].ability.name}</S.Ability>
        )}
        {pokemon?.abilities[1] && (
          <S.Ability>{pokemon?.abilities[1].ability.name}</S.Ability>
        )}
      </S.Abilities>
      <Button onClick={() => handleViewDetail(pokemon)} label="Ver Detalle" />
    </S.Pokemon>
  );
};

export default Pokemon;
