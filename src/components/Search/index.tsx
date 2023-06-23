import { BiSearch } from "react-icons/bi";
import * as S from "./styles";
import { useStore } from "../../store";

const Search = () => {
  const { setSearch } = useStore();

  const onChange = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <S.Search>
      <S.SearchInput type="text" placeholder="Buscar..." onChange={onChange}/>
      <S.SearchIcon>
        <BiSearch size={20} />
      </S.SearchIcon>
    </S.Search>
  );
};

export default Search;
