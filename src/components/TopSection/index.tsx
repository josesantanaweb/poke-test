import * as S from "./styles";
import { useStore } from "../../store";

export interface TopSectionProps {
  title?: string;
}

const TopSection = (props: TopSectionProps) => {
  const { title } = props;
  const darkTheme = useStore((state) => state.darkTheme);
  return (
    <S.TopSection>
      <S.Title darkTheme={darkTheme}>{title}</S.Title>
    </S.TopSection>
  );
};

export default TopSection;
