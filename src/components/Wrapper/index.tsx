import * as S from "./styles";
import { useStore } from "../../store";

export interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  const darkTheme = useStore((state) => state.darkTheme);
  const { children } = props;
  return <S.Wrapper darkTheme={darkTheme}>{children}</S.Wrapper>;
};

export default Wrapper;
