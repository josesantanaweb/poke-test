import styled from "styled-components";

interface Props {
  darkTheme: boolean;
}

export const Pokemon = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.gray[70] : theme.colors.white};
  border: 1px solid ${({ theme, darkTheme }) => darkTheme ? '#353535' : theme.colors.gray[10]};
  border-radius: 10px;
  padding: 1rem;
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;
`;

export const Imagen = styled.img`
  width: 70%;
  height: 120px;
`;

export const Weight = styled.div`
  height: 10px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary[10]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Name = styled.h6<Props>`
  color: ${({ theme, darkTheme }) => darkTheme ? theme.colors.white : theme.colors.black};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const Abilities = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Ability = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[40]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-right: 1rem;
  text-transform: capitalize;
`;
