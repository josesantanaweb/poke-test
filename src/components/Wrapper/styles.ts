import styled from "styled-components";

interface Props {
  darkTheme: boolean;
}

export const Wrapper = styled.div<Props>`
  background-color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.gray[80] : theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 2rem 3rem 2rem 6rem;
  padding: 2rem;
  min-height: calc(100vh - 195px);
`;
