import styled from "styled-components";

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export const Loading = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingImg = styled.img`
  width: 80px;
  height: 80px;
`;


export const Paginate = styled.div`
  display: flex;
  gap: 1em;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PaginateButton = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary[10]};
  border: none;
  border-radius: 5px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  height: 35px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[20]};
  }
`;

