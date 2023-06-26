import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from '../Pokemon';
import Modal from '../Modal';
import * as S from "./styles";
import { IPokemon, IResult } from '../../interfaces';
import pokemonsApi from "../../api/pokemons";
import Loading from "../../assets/images/loading.svg"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useStore } from "../../store";

const Pokemons = () => {
  const [limit, setLimit] = useState<number>(12)
  const [offset, setOffset] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any>([]);
  const search = useStore((state) => state.search);
  const openModal = useStore((state) => state.openModal);

  const getPokemons = async () => {
    setLoading(true)
    const res = await pokemonsApi.get(`/?offset=${offset}&limit=${limit}`);
    const promises = res.data.results.map(async (pokemon: IResult) => {
      const { data } = await axios.get(pokemon.url);
      return await data;
    });
    const results = await Promise.all(promises);
    setLoading(false);
    setPokemons([...results]);
  };

  useEffect(() => {
    if (search.length > 0) {
      const filterData = pokemons.filter((res: any) => res.name.includes(search));
      setPokemons([...filterData]);
    } else {
      getPokemons();
    }
  }, [search]);

  useEffect(() => {
    getPokemons();
  }, [offset]);

  useEffect(() => {
    if (offset > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [offset]);

  if (loading) {
    return (
      <S.Loading>
        <S.LoadingImg src={Loading} alt="loading" />
      </S.Loading>
    );
  };

  return (
    <>
      <S.Pokemons>
        {pokemons?.map((pokemon: IPokemon, index: number) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))}
      </S.Pokemons>
      <S.Paginate>
        <S.PaginateButton
          onClick={() => setOffset(offset - 12)}
          disabled={disabled}
        >
          <BiChevronLeft size={24} />
        </S.PaginateButton>
        <S.PaginateButton
          onClick={() => setOffset(offset + 12)}
          className="button-next"
        >
          <BiChevronRight size={30} />
        </S.PaginateButton>
      </S.Paginate>
      {openModal && <Modal />}
    </>
  );
};

export default Pokemons;
