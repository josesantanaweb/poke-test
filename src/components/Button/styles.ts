import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary[10]};
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  height: 40px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[20]};
  }
`;
