import styled from "styled-components";

interface Props {
  darkTheme: boolean;
}

export const TopSection = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.div<Props>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.black};
  font-weight: 500;
`;
