import * as S from "./styles";

export interface ButtonProps {
  onClick: () => void;
  label?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { onClick, label } = props;
  return (
    <S.Button onClick={onClick}>
      {label}
    </S.Button>
  );
};

export default Button;
