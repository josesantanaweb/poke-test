import { BiX } from "react-icons/bi";
import * as S from "./styles";
import { useStore } from "../../store";

const Modal = () => {
  const { setOpenModal } = useStore();
  const pokemon = useStore((state) => state.pokemon);
const darkTheme = useStore((state) => state.darkTheme);
  const calcWidth = (stat: number) => stat * 170 / 100;

  return (
    <S.Modal>
      <S.ModalCard darkTheme={darkTheme}>
        <S.Preview>
          <S.Imagen
            src={pokemon?.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
          <S.Close onClick={() => setOpenModal(false)}>
            <BiX size={28} />
          </S.Close>
        </S.Preview>
        <S.Name darkTheme={darkTheme}>{pokemon?.name}</S.Name>
        {pokemon?.stats.map((stat, index) => (
          <S.Ability key={index}>
            <S.AbilityLabel>{stat.stat.name}</S.AbilityLabel>
            <S.AbilityNumber>{stat.base_stat}</S.AbilityNumber>
            <S.AbilityBar>
              <S.AbilityBarInner width={calcWidth(stat.base_stat)} />
            </S.AbilityBar>
          </S.Ability>
        ))}
      </S.ModalCard>
    </S.Modal>
  );
};

export default Modal;
