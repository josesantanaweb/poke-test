import styled from "styled-components";

interface Props {
  width?: number;
  darkTheme?: boolean;
}

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalCard = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.gray[70] : theme.colors.white};
  width: 300px;
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
  height: 150px;
`;

export const Name = styled.h6<Props>`
  color: ${({ theme, darkTheme }) => darkTheme ? theme.colors.white : theme.colors.black};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

export const Ability = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const AbilityLabel = styled.h6`
  color: ${({ theme }) => theme.colors.gray[40]};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-transform: capitalize;
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AbilityNumber = styled.h6`
  color: ${({ theme }) => theme.colors.primary[10]};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const AbilityBar = styled.div`
  width: 170px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  position: relative;
  overflow: hidden;
`;

export const AbilityBarInner = styled.span<Props>`
  width: ${({ width }) => width}px;
  height: 10px;
  display: block;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary[10]};
  position: absolute;
  top: 0;
  left: 0;
`;

export const Close = styled.div`
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary[10]};
`;

