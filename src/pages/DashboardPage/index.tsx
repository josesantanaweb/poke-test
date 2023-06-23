import Navbar from "../../components/Navbar";
import Pokemons from "../../components/Pokemons";
import Sidebar from "../../components/Sidebar";
import TopSection from "../../components/TopSection";
import Wrapper from "../../components/Wrapper";
import * as S from "./styles";

const DashboardPage = () => {
  return (
    <S.Dashboard>
      <Navbar />
      <Sidebar />
      <Wrapper>
        <TopSection title="Lista de Pokemones" />
        <Pokemons />
      </Wrapper>
    </S.Dashboard>
  );
}

export default DashboardPage;
