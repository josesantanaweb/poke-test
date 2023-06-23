import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  width: 20%;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray[40]};
  height: 35px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[40]};
    opacity: 1;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`;
