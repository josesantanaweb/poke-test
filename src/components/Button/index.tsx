import * as S from "./styles";

export interface ButtonProps {
  onClick: () => void;
  label?: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { onClick, label, className } = props;
  return (
    <S.Button onClick={onClick} className={className}>
      {label}
    </S.Button>
  );
};

export default Button;
