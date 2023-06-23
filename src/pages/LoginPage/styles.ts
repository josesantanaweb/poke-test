import styled from "styled-components";

interface Props {
  darkTheme?: boolean;
}

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginCard = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.gray[70] : theme.colors.white};
  width: 300px;
  border-radius: 10px;
  padding: 1.5rem;
`;

export const LoginTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LoginLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const LoginTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.black };
  font-weight: 500;
  text-align: left;
  margin-bottom: 1rem;
`;

export const LoginInputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const LoginInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[10]};
  color: ${({ theme }) => theme.colors.gray[40]};
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[40]};
    opacity: 1;
  }
`;

export const LoginIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
`;

export const LoginFooter = styled.div`
  width: 100%;
`;

